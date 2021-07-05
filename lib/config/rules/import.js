// See https://github.com/benmosher/eslint-plugin-import

module.exports = {
  "import/no-unresolved": "error",
  "import/default": "error",
  "import/no-anonymous-default-export": [
    "error",
    {
      allowArrowFunction: false,
      allowAnonymousClass: false,
      allowAnonymousFunction: false,
    },
  ],
};
