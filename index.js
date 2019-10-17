module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true,
    jest: true
  },
  parser: "babel-eslint",
  plugins: ["import", "react", "react-hooks", "prettier"],
  rules: {
    "no-dupe-keys": "error",
    "no-undef": "error",
    "no-unreachable": "error",
    "no-unused-vars": [
      "error",
      {
        argsIgnorePattern: "^_",
        varsIgnorePattern: "^_",
        ignoreRestSiblings: true
      }
    ],
    "no-useless-constructor": "error",
    "no-var": "error",
    "no-duplicate-imports": "error",
    "no-duplicate-case": "error",
    "import/no-unresolved": "error",
    "import/default": "error",
    "react/jsx-no-undef": "error",
    "react/jsx-uses-vars": "error",
    "react/jsx-uses-react": "error",
    "react/react-in-jsx-scope": "error",
    "react/no-string-refs": "error",
    "react/prop-types": ["error", { skipUndeclared: true }],
    "react/forbid-prop-types": "error",
    "react/prefer-stateless-function": [
      "error",
      { ignorePureComponents: true }
    ],
    "react-hooks/rules-of-hooks": "error", // Checks rules of Hooks
    "react-hooks/exhaustive-deps": "error", // Checks effect dependencies
    "prettier/prettier": "error",
    "no-console": ["error", { allow: ["warn", "error"] }],
    "no-debugger": "error"
  }
};

// Globals added dynamically or add them in .eslintignore
