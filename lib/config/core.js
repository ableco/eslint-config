module.exports = {
  plugins: ["import", "unicorn"],

  rules: {
    ...require("./rules/possible-errors"),
    ...require("./rules/unicorn"),
  },
};
