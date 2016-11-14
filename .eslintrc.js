module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    // ecmaVersion: 6,
    sourceType: 'module'
  },
  // http://eslint.org/docs/rules/
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  // eslint-config-standard
  // 可共享的标准格式配置, 在自己工程中，加入 .eslint 文件即可
  // eslint-plugin-html
  // 支持从 html 等文件的 <script> 标签中读取配置的插件，通常配置文件都是 js 文件
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // 'env': {
  //   'browser': true,
  //   'node': true,
  //   'es6': true
  // },
  // add your custom rules here
  'rules': {
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
  }
}
