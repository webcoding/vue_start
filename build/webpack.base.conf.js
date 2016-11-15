var path = require('path')
var config = require('../config')
var utils = require('./utils')
var projectRoot = path.resolve(__dirname, '../')

var env = process.env.NODE_ENV
// check env & config/index.js to decide weither to enable CSS Sourcemaps for the
// various preprocessor loaders added to vue-loader at the end of this file
var cssSourceMapDev = (env === 'development' && config.dev.cssSourceMap)
var cssSourceMapProd = (env === 'production' && config.build.productionSourceMap)
var useCssSourceMap = cssSourceMapDev || cssSourceMapProd


// 在默认情况下，Babel 的 es2015 预设方案（preset）会把 ES6 模块转换为 CommonJS 格式。如果你想让 Webpack 来处理 ES6 模块，那你应该换用 es2015-webpack 这个预设方案。

// http://javascriptplayground.com/blog/2016/10/moving-to-webpack-2/
// https://webpack.vuefe.cn/how-to/upgrade-from-webpack-1/
module.exports = {
  // devtool: "source-map",
  entry: {
    app: './src/main.js',
    vendor: ['vue', 'vue-router', 'vuex', 'es6-promise']
  },
  output: {
    path: config.build.assetsRoot,
    publicPath: process.env.NODE_ENV === 'production' ? config.build.assetsPublicPath : config.dev.assetsPublicPath,
    filename: '[name].js'
  },
  resolve: {
    // (was split into `root`, `modulesDirectories` and `fallback` in the old options)
    //（以前这个选项分散在 `root`、`modulesDirectories` 和 `fallback` 三处。）
    // 模块查找路径：指定解析器查找模块的目录。
    // 相对路径会在每一层父级目录中查找（类似 node_modules）。
    // 绝对路径会直接查找。
    // 将按你指定的顺序查找。
    modules: [
      path.resolve(__dirname, "src"),
      "node_modules"
    ],
    // root: path.join(__dirname, "src"),
    // fallback: [path.join(__dirname, '../node_modules')],

    // These JSON files are read in directories
    // 描述文件：这些 JSON 文件将在目录中被读取。
    descriptionFiles: ["package.json", "bower.json"],

    // These fields in the description files are looked up when trying to resolve the package directory
    // 入口字段：在解析一个包目录时，描述文件中的这些字段所指定的文件将被视为包的入口文件。
    mainFields: ["main", "browser"],

    // These files are tried when trying to resolve a directory
    // 入口文件：在解析一个目录时，这些文件将被视为目录的入口文件。
    mainFiles: ["index"],

    // These fields in the description files offer aliasing in this package
    // The content of these fields is an object where requests to a key are mapped to the corresponding value
    // 别名字段：描述文件中的这些字段提供了该包的别名对照关系。
    // 这些字段的内容是一个对象，每当请求某个键名时，就会映射到对应的键值。
    aliasFields: ["browser"],

    // These extensions are tried when resolving a file
    // 扩展名：在解析一个文件时，将会尝试附加这些文件扩展名。
    extensions: [".js", ".json", ".vue"],

    // If false it will also try to use no extension from above
    // 强制使用扩展名：如果值为 false，在解析一个文件时，也会尝试匹配无扩展名的文件。
    enforceExtension: false,

    // These extensions are tried when resolving a module
    // 模块后缀名：在解析一个模块名时，将会尝试附加这些后缀名。
    moduleExtensions: ["-loader"],

    // If false it's also try to use no module extension from above
    // 强制使用模块后缀名：如果值为 false，在解析一个模块名时，也会尝试匹配不包含后缀名的模块。
    enforceModuleExtension: false,

    // 另外：在解析一个模块名时，会使用这个别名映射表。
    alias: {
      // These aliasing is used when trying to resolve a module
      'vue$': 'vue/dist/vue',
      'src': path.resolve(__dirname, '../src'),
      'assets': path.resolve(__dirname, '../src/assets'),
      'components': path.resolve(__dirname, '../src/components'),
      // jquery: path.resolve(__dirname, "vendor/jquery-2.0.0.js")
    }
  },

  // resolveLoader: {
  //   // fallback: [path.join(__dirname, '../node_modules')]
  // },
  module: {
    // loader 改为了 rules 从下至上为处理顺序，所以语法检查要房子最下面
    // 为保险起见，也可以使用 preLoaders 配置项，确保对源代码在没编译前进行检查
    // preLoaders 改为 enforce: true
    rules: [
      {
        test: /\.vue$/,
        enforce: "pre",
        loader: "eslint-loader",
        include: projectRoot,
        exclude: /node_modules/
      },
      {
        test: /\.js$/,
        enforce: "pre",
        loader: "eslint-loader",
        include: projectRoot,
        exclude: /node_modules/
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        // vueConfig
        options: {
          postcss: [
            require('autoprefixer')({
              browsers: ['last 3 versions']
            })
          ]
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: projectRoot,
        exclude: /node_modules/
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",
            options: {
              modules: true
            }
          }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'postcss-loader',
            // options: {
            //   plugins:
            // }
          },
          'sass-loader'
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  },
  // eslint: {
  //   // 友好提示语法错误，支持点击错误提示直接打开文件
  //   formatter: require('eslint-friendly-formatter')
  // },
  // vue: {
  //   loaders: utils.cssLoaders({ sourceMap: useCssSourceMap }),
  //   postcss: [
  //     require('autoprefixer')({
  //       browsers: ['last 3 versions']
  //     })
  //   ]
  // }
}
