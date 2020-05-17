module.exports = {
  root: true,

  env: {
    browser: true,
    node: true,
  },

  parser: "vue-eslint-parser",

  parserOptions: {
    parser: "babel-eslint",
    sourceType: "module",
  },

  extends: [
    "eslint:recommended",
    "plugin:vue/vue3-essential",
    "plugin:prettier/recommended",
  ],

  rules: {
    // Add your rules here
    "no-console": "warn",
  },
};
