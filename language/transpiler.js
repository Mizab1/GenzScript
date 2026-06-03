#!/usr/bin/env node
const fs = require("fs");

const dictionary = {
  fax: "const",
  lit: "let",
  sus: "var",
  vibecheck: "if",
  plot_twist: "else if",
  or_nah: "else",
  mood: "switch",
  era: "case",
  basic: "default",
  grind: "for",
  doomscroll: "while",
  dip: "break",
  skrrt: "continue",
  cook: "function",
  yeet: "return",
  cop: "import",
  flex: "export",
  send_it: "try",
  caught_lacking: "catch",
  cancel: "throw",
  spill: "console.log",
  W: "true",
  L: "false",
  ghosted: "null"
};

function transpile(genzCode) {
  const lexerRegex = /(['"`])(?:\\.|[^\\])*?\1|\/\*[\s\S]*?\*\/|\/\/.*|\b([a-zA-Z_]\w*)\b/g;

  return genzCode.replace(lexerRegex, (match, quote, word) => {
    if (quote || match.startsWith("/")) {
      return match;
    }
    if (word && dictionary[word]) {
      return dictionary[word];
    }
    return match;
  });
}

function runFile(filePath) {
  const rawCode = fs.readFileSync(filePath, "utf8");
  const compiledJs = transpile(rawCode);

  try {
    eval(compiledJs);
  } catch (error) {
    console.error("Caught lacking, Fahhh!:", error.message);
  }
}

const targetFile = process.argv[2];
if (targetFile) {
  runFile(targetFile);
} else {
  console.log("Bruh, you forgot the file. Usage: cook <file.genz>");
}
