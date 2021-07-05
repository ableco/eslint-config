module.exports = {
  extends: ["prettier"],

  plugins: ["prettier"],

  rules: {
    ...require("./rules/prettier"),
  },
};
