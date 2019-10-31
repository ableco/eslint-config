# @ableco/eslint-config

This repository provides recommended ESLint configuration for use on Able JavaScript projects.

## Installation

### Using yarn:
`yarn add @ableco/eslint-config --dev`

### Using npm:
`npm install @ableco/eslint-config --save-dev`

## Usage

In your `.eslintrc.js` file, replace it with:

```javascript
module.exports = {
  root: true,
  settings: {
    //... your own settings, for example "import/resolver" or "react".
  },
  extends: "@ableco"
};
```

> **Note:** This ESLint configuration only replaces `env`, `parser`, `extends`, `plugins` and `rules`.

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/ableco/eslint-config.

## License

The library is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).
