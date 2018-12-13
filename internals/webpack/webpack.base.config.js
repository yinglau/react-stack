const path = require('path');

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (opts) => ({
  // see https://webpack.docschina.org/concepts/mode/ for the description
  mode: opts.mode,

  // webpack entry config
  entry: opts.entry,

  output: Object.assign(
    {
      path: path.resolve('build'),
      publicPath: '/',
    },
    opts.output
  ),
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader'],
      },
    ]
  },
  plugins: opts.plugins.concat([

  ]),
  resolve: {
    modules: ['node_modules', 'app'],
    extensions: ['.js', '.jsx', '.react.js'],
    mainFields: ['browser', 'jsnext:main', 'main'],
  },
  devtool: opts.devtool || '',
  performance: opts.performance,
  target: 'web', // Make web variables accessible to webpack, e.g. window
});
