import { createRequire } from "node:module";
import path from "node:path";

const root = process.env.QA_MODULES;
if (!root || !path.isAbsolute(root)) throw new Error("QA_MODULES must point to isolated lint dependencies");
const require = createRequire(path.join(root, "lint-entry.cjs"));
const parser = require("@typescript-eslint/parser");
const hooks = require("eslint-plugin-react-hooks");

export default [
  { ignores: ["dist/**", "node_modules/**", "assets/vendor/**"] },
  {
    files: ["src/**/*.{ts,tsx}"],
    languageOptions: {
      parser,
      parserOptions: { ecmaVersion: "latest", sourceType: "module", ecmaFeatures: { jsx: true } },
    },
    plugins: { "react-hooks": hooks },
    rules: {
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "error",
      "no-debugger": "error",
      "no-unreachable": "error",
      "no-dupe-keys": "error",
      "no-duplicate-imports": ["error", { allowSeparateTypeImports: true }],
    },
  },
];
