#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const projectRoot = process.cwd();
const targetExtensions = ['.tsx', '.jsx'];
const targetDirs = ['pages', 'app', 'components'];

function isTargetFile(filePath) {
  return targetDirs.some(dir => filePath.includes(path.join(projectRoot, dir))) &&
         targetExtensions.includes(path.extname(filePath));
}

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');

  // Skip if already dynamic imported and wrapped
  if (content.includes('next/dynamic') && content.includes('ssr: false')) {
    console.log(`Skipping already wrapped file: ${filePath}`);
    return;
  }

  // Check for existing 'use client' directive
  const hasUseClient = content.trimStart().startsWith('"use client";') || content.trimStart().startsWith("'use client';");

  // Check for dynamic import to avoid duplicates
  const hasDynamicImport = content.includes(`import dynamic from 'next/dynamic'`) || content.includes(`import dynamic from "next/dynamic"`);

  // Patterns for different export default forms

  // 1. export default function ComponentName() {...}
  const exportFuncNamed = content.match(/export\s+default\s+function\s+(\w+)\s*\(/);

  // 2. export default function() {...}  (anonymous)
  const exportFuncAnon = content.match(/export\s+default\s+function\s*\(/);

  // 3. export default ComponentName;
  const exportDefaultName = content.match(/export\s+default\s+(\w+);/);

  if (exportFuncNamed) {
    const componentName = exportFuncNamed[1];
    // Remove 'export default' keyword from function declaration so function can be reused
    content = content.replace(
      /export\s+default\s+function\s+(\w+)\s*\(/,
      `function ${componentName}(`,
    );

    // Insert "use client"; at top if missing
    if (!hasUseClient) {
      content = `"use client";\n\n${content}`;
    }

    // Insert dynamic import if missing
    if (!hasDynamicImport) {
      content = `import dynamic from 'next/dynamic';\n\n${content}`;
    }

    // Wrap the component with dynamic import
    content += `\n\nconst NoSSR = dynamic(() => Promise.resolve(${componentName}), { ssr: false });\n\nexport default NoSSR;\n`;

    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Wrapped named function component with dynamic(): ${filePath}`);
    return;
  }

  if (exportFuncAnon) {
    // Anonymous default function export, assign a default name "Component"
    content = content.replace(
      /export\s+default\s+function\s*\(/,
      `function Component(`,
    );

    // Insert "use client"; at top if missing
    if (!hasUseClient) {
      content = `"use client";\n\n${content}`;
    }

    // Insert dynamic import if missing
    if (!hasDynamicImport) {
      content = `import dynamic from 'next/dynamic';\n\n${content}`;
    }

    // Wrap the component with dynamic import
    content += `\n\nconst NoSSR = dynamic(() => Promise.resolve(Component), { ssr: false });\n\nexport default NoSSR;\n`;

    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Wrapped anonymous function component with dynamic(): ${filePath}`);
    return;
  }

  if (exportDefaultName) {
    const componentName = exportDefaultName[1];

    // Insert "use client"; at top if missing
    if (!hasUseClient) {
      content = `"use client";\n\n${content}`;
    }

    // Insert dynamic import if missing
    if (!hasDynamicImport) {
      content = `import dynamic from 'next/dynamic';\n\n${content}`;
    }

    // Replace the export default with the dynamic wrapper
    content = content.replace(
      new RegExp(`export\\s+default\\s+${componentName};`),
      `const NoSSR = dynamic(() => Promise.resolve(${componentName}), { ssr: false });\n\nexport default NoSSR;`
    );

    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Wrapped default export component with dynamic(): ${filePath}`);
    return;
  }

  console.warn(`No default export found or unsupported format in: ${filePath}`);
}

function traverse(dir) {
  const files = fs.readdirSync(dir, { withFileTypes: true });
  for (const file of files) {
    const fullPath = path.join(dir, file.name);
    if (file.isDirectory()) {
      traverse(fullPath);
    } else if (file.isFile() && isTargetFile(fullPath)) {
      processFile(fullPath);
    }
  }
}

traverse(projectRoot);
