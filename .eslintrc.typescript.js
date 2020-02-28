module.exports = {
  "parserOptions": {
    "project": "./tsconfig.json",
  },
  "extends": [
    "@vkontakte/eslint-config/typescript",
  ],
  "rules": {
    "@typescript-eslint/explicit-member-accessibility": "off",
    "@typescript-eslint/no-unnecessary-condition": "off",
    "@typescript-eslint/no-magic-numbers": "off",
    "@typescript-eslint/no-unused-vars": ["error", {
      "ignoreRestSiblings": true
    }]
  }
}
