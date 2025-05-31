#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const projectRoot = process.cwd();
const targetExtensions = ['.js', '.jsx', '.ts', '.tsx'];
const excludeDirs = ['node_modules', '.next', 'out', '.git'];

function shouldProcessFile(filePath) {
  const ext = path.extname(filePath);
  return targetExtensions.includes(ext);
}

function isExcludedDir(dirPath) {
  return excludeDirs.some(excluded => dirPath.includes(path.join(projectRoot, excluded)));
}

function processFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');

  // Skip files that already have the guard
  if (content.includes('typeof document !== "undefined"') || content.includes('typeof window !== "undefined"')) {
    return;
  }

  const documentRegex = /\bdocument\b/g;
  if (!documentRegex.test(content)) {
    return;
  }

  const lines = content.split('\n');
  const modifiedLines = [];
  let insideUseEffect = false;
  let useEffectStartIndex = -1;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // Detect useEffect hook
    if (line.includes('useEffect(')) {
      insideUseEffect = true;
      useEffectStartIndex = i;
    }

    if (insideUseEffect && line.includes('}')) {
      insideUseEffect = false;
    }

    if (insideUseEffect && line.includes('document')) {
      // Wrap document usage inside typeof check
      modifiedLines.push('    if (typeof document !== "undefined") {');
      modifiedLines.push('      ' + line.trim());
      modifiedLines.push('    }');
    } else {
      modifiedLines.push(line);
    }
  }

  const newContent = modifiedLines.join('\n');
  fs.writeFileSync(filePath, newContent, 'utf8');
  console.log(`Updated: ${filePath}`);
}

function traverseDirectory(dirPath) {
  if (isExcludedDir(dirPath)) {
    return;
  }

  const entries = fs.readdirSync(dirPath, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dirPath, entry.name);

    if (entry.isDirectory()) {
      traverseDirectory(fullPath);
    } else if (entry.isFile() && shouldProcessFile(fullPath)) {
      processFile(fullPath);
    }
  }
}

traverseDirectory(projectRoot);
