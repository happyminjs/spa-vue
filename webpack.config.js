const path = require('path')
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const manifestObj = require('./build/dll/manifest.json')

module.exports = function(options) {
  let env = Object.prototype.toString.call(options) == '[object Object]' ? Object.keys(options)[0] : 'production';
  console.log('options: ', env);
  let config = {
    entry: {
      index: path.resolve(__dirname, './src/index.js')
    },
    stats: {
      children: false,
      entrypoints: false,
      modules: false,
      errors: true,
      errorDetails: true,
    },
    output: {
      filename: '[name].js',
      path: path.resolve(__dirname, './build'),
      publicPath: '/',
      chunkFilename: '[name].js',
      // library: ''
    },
    mode: env,
    optimization: {
      minimize: env == 'production', // 压缩js代码, 默认true
      occurrenceOrder: true,
      splitChunks: {  // 根据不同的策略来分割打包出来的bundle
        chunks: 'all', // async:分割异步打包的代码; all: 同时分割同步和异步代码
        minSize: 0,
        minChunks: 1, // 生成的commons块最小为多少
        cacheGroups: {   // 默认的规则不会打包,需要单独定义。内部的参数可以覆盖外部的参数。
          vendor: {    // 创建一个commons块，其中包括入口点之间共享的所有代码。
            name: 'vendor/vendor',
            chunks: 'all',
            test: /[\\/]node_modules[\\/]/, // 正则匹配node_modules内的文件
            priority: -10, // 优先级
            reuseExistingChunk: false, // 是否复用存在的chunk
          },
          commons: {
            name: 'vendor/common',
            chunks: 'all',
            test: /[\\/]src[\\/]utils[\\/]/, // 正则匹配 src/utils 内的文件
            priority: -10,
            reuseExistingChunk: false
          },
          styles: {
            name: 'vendor/vendor',
            chunks: 'all',
            test: /\.css$/,
            enforce: true
          },
        },
        name: false,
      },
      
    },
    module: {
      rules: [
        { 
          test: /\.js$/, 
          exclude: /node_modules/, 
          loader: "babel-loader" 
        },
        {
          test: /\.(css|less|s[a|c]ss)$/,
          exclude:/node_modules/,
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
            {
              loader: 'postcss-loader',
              options: {
                ident: 'postcss',
                plugins: (loader) => {
                  return [
                    require('postcss-import')(),
                    require('autoprefixer')({
                      browsers: ['last 2 versions']
                    }),
                    // require('postcss-adaptive')({
                    //   remUnit: 75,
                    //   autoRem: true
                    // })
                  ]
                }
              }
            },
            'less-loader'
          ]
        },
        {
          test: /\.vue$/,
          exclude:/node_modules/,
          loader: 'vue-loader'
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/,
          loader: 'url-loader',
          options: {
            limit: 100
          }
        }
      ]
    },
    plugins: [
      new VueLoaderPlugin(),
      new webpack.DllReferencePlugin({
        context: path.resolve(__dirname),
        manifest: manifestObj
      }),
      new MiniCssExtractPlugin({
        filename: '[name].css',
        chunkFilename: '[id].css',
      }),
      new HtmlWebpackPlugin({
        filename: 'index.html',
        chunks: ['vendor/vendor', 'vendor/common', 'index'], 
        inject: true,
        template: path.resolve(__dirname, './src/index.html'),
      })
    ],
    resolve: {
      // 自动解析确定的扩展
      extensions: ['.js', '.vue', '.less', '.json'],
      // 创建 import 或 require 的别名
      alias: {
        '@src': path.resolve(__dirname, './src'),
        '@': path.resolve(__dirname, './src')
        // 'vue': path.resolve(__dirname, './node_modules/vue/dist/vue.esm.js')
      }
    },
    devServer: {
      hot: true,
      contentBase: path.join(__dirname, "./build"),
      compress: true,
      host: '0.0.0.0',
      port: 3010,
      // open: true,
      historyApiFallback: true
    }
  }
  return config;
}
