module.exports = {
    root: true,
    extends: 'hfe',
    plugins: ['html'],
    parser: "babel-eslint",
    parserOptions: {
      sourceType: 'module',
      ecmaFeatures: {
        experimentalObjectRestSpread: true,
      },
    },
    rules: {
      "no-console": 0,
      "no-debugger": process.env.NODE_ENV === 'production' ? 2 : 0,
      "comma-dangle": "off",
      "no-shadow": "off",
      "no-param-reassign": "off",
      "no-empty-function": "off",
      "no-useless-escape": "off",
      "no-undefined": "off",
      "consistent-return": "off",
      "no-implicit-coercion": 0,
      "new-cap": 0,
      "no-control-regex": 0,
      "complexity": ["error", 24]
    },
    globals: {
      HFE_FLIGHT: true,
      Analytics: false,
        __ENV__: false
    },
  };
  