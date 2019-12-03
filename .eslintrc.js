module.exports = {
  "extends": ["@vkontakte"],

  "overrides": [
    {
      "files": ["**/*.ts", "**/*.tsx"],
      "extends": [
        "./.eslintrc.typescript.js"
      ]
    }
  ],

  "parserOptions": {
    "ecmaVersion": 2018,  // Allows for the parsing of modern ECMAScript features
    "sourceType": "module",  // Allows for the use of imports
    "ecmaFeatures": {
      "jsx": true,  // Allows for the parsing of JSX
      "restParams": true,
      "spread": true
    }
  },

  "globals": {
    "Element": true
  },

  "env": {
    "browser": true,
    "node": true
  }
}
