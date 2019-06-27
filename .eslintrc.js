module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    // 'semistandard', // FIXME: Temporarily disabled due to troubles with typescript
    'standard',
    'plugin:react/recommended'
  ],

  plugins: ['typescript', 'react', 'import', 'react-hooks'],

  parserOptions: {
    ecmaFeatures: {
      jsx: true
    }
  },

  settings: {
    react: {
      version: 'detect'
    }
  },

  rules: {
    'no-unused-vars': [2, { vars: 'all', args: 'after-used', ignoreRestSiblings: true }],
    'quote-props': [2, 'consistent-as-needed'],
    'no-trailing-spaces': ['error', { skipBlankLines: true }],
    'no-extend-native': 'off',
    'no-return-assign': 'off',
    'react/no-deprecated': 'off',

    // Order of imports
    'import/order': ['error', { groups: ['builtin', 'external', 'parent', 'sibling', 'index'] }],
    // This rule reports any imports that come after non-import statements
    'import/first': 'error',
    // Tmp
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.tsx'] }],

    // Enable semicolons
    semi: ['error', 'always']
  }
};
