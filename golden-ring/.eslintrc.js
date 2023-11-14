module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['airbnb-base', 'plugin:prettier/recommended'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['prettier'],
  rules: {
    'import/no-mutable-exports': 'off',
    'no-mutable-exports': 'off',
    'no-param-reassign': 'off',
    'no-multi-assign': 'off',
    'no-plusplus': 'off',
    'import/extensions': 'off',
    "prettier/prettier": [
      "error",
      {
        "endOfLine": "auto"
      }
    ]
  },
};
