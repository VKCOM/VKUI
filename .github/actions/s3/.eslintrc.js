module.exports = {
  root: false,
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
  },
  rules: {
    '@typescript-eslint/naming-convention': 'off', // [Reason] 'snake_case' is expected naming
  },
};
