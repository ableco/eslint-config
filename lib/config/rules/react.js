// See https://github.com/yannickcr/eslint-plugin-react

module.exports = {
  "react/jsx-no-undef": "error",
  "react/jsx-uses-vars": "error",
  "react/jsx-uses-react": "error",
  "react/react-in-jsx-scope": "error",
  "react/no-string-refs": "error",
  "react/prop-types": ["error", { skipUndeclared: true }],
  "react/forbid-prop-types": "error",
  "react/prefer-stateless-function": "error",
};
