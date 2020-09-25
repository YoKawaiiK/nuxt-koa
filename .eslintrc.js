module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  extends: [
    'plugin:nuxt/recommended',
    // 'plugin:vue/recommended',
    'plugin:vue/essential',
    'eslint:recommended'
  ],
  plugins: ['prettier'],
  // add your custom rules here
  rules: {
    "no-unused-labels": "off"
  }
}
