// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  /* 这样写的babel-eslint没有生效，有毒
  parserOptions: {
    'parser': 'babel-eslint'
  }, */
  parser: 'babel-eslint',
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard'
  ],
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  rules: {
    "no-new": "off"
  }
}
