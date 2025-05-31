const fs = require("fs");
const path = require("path");

const TARGET_DIR = "./";
const EXTENSIONS = [".js", ".jsx", ".ts", ".tsx"];

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach((f) => {
    const dirPath = path.join(dir, f);
    if (fs.statSync(dirPath).isDirectory()) {
      walkDir(dirPath, callback);
    } else {
      callback(dirPath);
    }
  });
}

function fixFile(filePath) {
  const ext = path.extname(filePath);
  if (!EXTENSIONS.includes(ext)) return;

  let content = fs.readFileSync(filePath, "utf8");

  const regex =
    /const\s+NoSSR\s*=\s*dynamic\(\(\)\s*=>\s*Promise\.resolve\(function\)\s*,\s*\{\s*ssr:\s*false\s*\}\s*\);\s*export\s+default\s+NoSSR;\s*function\s+([A-Za-z0-9_]+)\s*\((.*?)\)\s*\{/gs;

  // Fix the dynamic+export declaration above the component
  const fixed = content.replace(regex, (match, compName, args) => {
    return `function ${compName}(${args}) {\n`;
  });

  // Add NoSSR and export at end of file if missing
  if (fixed !== content) {
    const exportLine = `\nconst NoSSR = dynamic(() => Promise.resolve(${compName}), { ssr: false });\nexport default NoSSR;\n`;
    fs.writeFileSync(filePath, fixed + exportLine, "utf8");
    console.log("✅ Fixed:", filePath);
  }
}

walkDir(TARGET_DIR, fixFile);
