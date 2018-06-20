const path = require('path');
const config = require('../config');
const utils = require('./utils');
const vueLoaderConfig = require('./vue-loader.config');

function resolve (dir) {
  return path.join(__dirname, '..', dir);
};

module.exports = {
  entry: {
    main: './examples/main',
    vendor: [
      'vue',
      'vue-router'
    ]
  },
  resolve: {
    extensions: ['.js', '.vue', '.md'],
    alias: {
      'vue$': 'vue/dist/vue.common.js',
      'src': path.resolve(__dirname, '../src'),
      'assets': path.resolve(__dirname, '../src/assets'),
      'views': path.resolve(__dirname, '../src/views'),
      'components': path.resolve(__dirname, '../src/components')
    },
    modules: [
      path.join(__dirname, 'src'),
      'node_modules'
    ]
  },
  output: {
    path: config.build.assetsRoot,
    publicPath: process.env.NODE_ENV === 'production' ? config.build.assetsPublicPath : config.dev.assetsPublicPath,
    filename: '[name].js',
    chunkFilename: '[name].chunk.js'
  },
  module: {
    noParse: /es6-promise\.js$/, // avoid webpack shimming process
    rules: [
      {
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        include: [resolve('src'), resolve('test'), resolve('examples')],
        options: {
          formatter: require('eslint-friendly-formatter')
        }
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig
      },
      {
        test: /\.md$/,
        loader: 'vue-markdown-loader',
        options: {
          preprocess: function (MarkdownIt, Source) {
            MarkdownIt.renderer.rules.table_open = function () {
              return '<div class="table-container"><table class="table">';
            };
            MarkdownIt.renderer.rules.table_close = function () {
              return '</table></div>';
            };
            return Source;
          }
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src'), resolve('examples')]
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
  performance: {
    hints: process.env.NODE_ENV === 'production' ? 'warning' : false
  }
};
