module.exports = {
  extends: ["plugin:@ableco/core", "plugin:@ableco/unicorn"],
  parser: "babel-eslint",

  env: {
    es6: true,
  },

  plugins: ["babel", "import", "unicorn"],

  rules: {
    ...require("./rules/import"),
  },
};
