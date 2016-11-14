var config = require('../config')
var webpack = require('webpack')
var merge = require('webpack-merge')
var utils = require('./utils')
var base = require('./webpack.base.conf')
var HtmlWebpackPlugin = require('html-webpack-plugin')

// add hot-reload related code to entry chunks
Object.keys(base.entry).forEach(function (name) {
  base.entry[name] = ['./build/dev-client'].concat(base.entry[name])
})

// const config = Object.assign({}, base, {
const config = merge(base, {
  module: {
    loaders: utils.styleLoaders({ sourceMap: config.dev.cssSourceMap })
  },
  // eval-source-map is faster for development
  devtool: '#eval-source-map',
  // plugins: (base.plugins || []).concat([
  plugins: [
    // // strip comments in Vue code
    // new webpack.DefinePlugin({
    //   'process.env': config.dev.env
    //   // 'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
    // }),
    // // extract vendor chunks for better caching
    // new webpack.optimize.CommonsChunkPlugin({
    //   name: 'vendor',
    //   filename: 'client-vendor-bundle.js'
    // }),
    // https://github.com/glenjamin/webpack-hot-middleware#installation--usage
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    // https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      filename: config.filename,
      template: config.template,
      inject: true
    })
  ]
})

// if (process.env.NODE_ENV === 'production') {
//   // Use ExtractTextPlugin to extract CSS into a single file
//   // so it's applied on initial render
//   const ExtractTextPlugin = require('extract-text-webpack-plugin')
//
//   // vueConfig is already included in the config via LoaderOptionsPlugin
//   // here we overwrite the loader config for <style lang="stylus">
//   // so they are extracted.
//   vueConfig.loaders = {
//     stylus: ExtractTextPlugin.extract({
//       loader: 'css-loader!stylus-loader',
//       fallbackLoader: 'vue-style-loader' // <- this is a dep of vue-loader
//     })
//   }
//
//   config.plugins.push(
//     new ExtractTextPlugin('styles.css'),
//     // this is needed in webpack 2 for minifying CSS
//     new webpack.LoaderOptionsPlugin({
//       minimize: true
//     }),
//     // minify JS
//     new webpack.optimize.UglifyJsPlugin({
//       compress: {
//         warnings: false
//       }
//     })
//   )
// }

module.exports = config
