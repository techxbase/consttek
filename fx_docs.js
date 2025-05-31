#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const projectRoot = process.cwd();
const targetExtensions = ['.js', '.jsx', '.ts', '.tsx'];
const excludeDirs = ['node_modules', '.next', 'out', '.git', 'dist'];

function shouldProcessFile(filePath) {
  const ext = path.extname(filePath);
  return targetExtensions.includes(ext);
}

function isExcludedDir(dirPath) {
  return excludeDirs.some(excluded => dirPath.includes(path.join(projectRoot, excluded)));
}

function wrapDocumentUsages(content) {
  const documentRegex = /(?<!typeof\s)document(?![\w])/g;
  if (!documentRegex.test(content)) return content;

  return content.replace(documentRegex, (match, offset, str) => {
    const before = str.slice(Math.max(0, offset - 50), offset);
    const after = str.slice(offset + match.length, offset + match.length + 50);
    // Skip already-guarded or import lines
    if (before.includes('typeof') || before.includes('import') || after.includes('!==')) {
      return match;
    }
    return `(typeof document !== 'undefined' ? document : undefined)`;
  });
}

function processFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const newContent = wrapDocumentUsages(content);
  if (newContent !== content) {
    fs.writeFileSync(filePath, newContent, 'utf8');
    console.log(`Updated: ${filePath}`);
  }
}

function traverseDirectory(dirPath) {
  if (isExcludedDir(dirPath)) return;
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
