module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true,
    jest: true
  },
  parser: "babel-eslint",
  extends: "react-app",
  plugins: ["import", "react-hooks", "prettier"],
  rules: {
    "no-dupe-keys": "warn",
    "no-undef": "warn",
    "no-unreachable": "warn",
    "no-unused-vars": [
      "warn",
      {
        argsIgnorePattern: "^_",
        varsIgnorePattern: "^_",
        ignoreRestSiblings: true
      }
    ],
    "no-useless-constructor": "warn",
    "no-var": "warn",
    "no-duplicate-imports": "warn",
    "no-duplicate-case": "warn",
    "import/no-unresolved": "warn",
    "import/default": "warn",
    "react/jsx-no-undef": "warn",
    "react/jsx-uses-vars": "warn",
    "react/jsx-uses-react": "warn",
    "react/react-in-jsx-scope": "warn",
    "react/no-string-refs": "warn",
    "react/prop-types": ["warn", { skipUndeclared: true }],
    "react/forbid-prop-types": "warn",
    "react/prefer-stateless-function": ["warn", { ignorePureComponents: true }],
    "react-hooks/rules-of-hooks": "warn", // Checks rules of Hooks
    "react-hooks/exhaustive-deps": "warn", // Checks effect dependencies
    "prettier/prettier": "warn",
    "no-console": ["warn", { allow: ["warn", "error"] }],
    "no-debugger": "warn"
  }
};

// Globals added dynamically or add them in .eslintignore
