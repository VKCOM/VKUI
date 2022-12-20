module.exports = {
  root: false,
  env: {
    jest: true,
  },
  extends: ['plugin:jest-playwright/recommended'],
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
  },
  rules: {
    'no-restricted-properties': 'off',
    'no-restricted-globals': 'off',
    'react/display-name': 'off',
  },
};
