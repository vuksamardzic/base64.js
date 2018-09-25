const path = require('path');
const mode = require('yargs').argv.mode;
const deploy = require('yargs').argv.deploy;
const HtmlWebpackPlugin = require('html-webpack-plugin');

const library_name = 'base64';
const filename = 'base64.js';
let dir = 'lib';
let plugins = [];

if (mode === 'development') {
  plugins.push(new HtmlWebpackPlugin({
    template: './demo/index.html',
    inject: 'head'
  }));
}
if (deploy) {
  dir = 'demo';
  plugins.push(new HtmlWebpackPlugin({
    template: './demo/index.html',
    inject: 'head'
  }));
}

module.exports = {
  entry: [
    '@babel/polyfill',
    './src/index.js'
  ],
  output: {
    path: path.resolve(__dirname, dir),
    filename: filename,
    library: library_name,
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel-loader',
      query: {
        presets: ['@babel/preset-env']
      }
    }]
  },
  plugins: plugins
};
