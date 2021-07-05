// See http://eslint.org/docs/rules/#possible-errors

module.exports = {
  "no-dupe-keys": "error",
  "no-undef": "error",
  "no-unreachable": "error",
  "no-unused-vars": [
    "error",
    {
      argsIgnorePattern: "^_",
      varsIgnorePattern: "^_",
      ignoreRestSiblings: true,
    },
  ],
  "no-useless-constructor": "error",
  "no-var": "error",
  "no-duplicate-imports": "error",
  "no-duplicate-case": "error",
  "no-console": ["error", { allow: ["warn", "error"] }],
  "no-debugger": "error",
};
