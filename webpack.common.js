const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './client/src/index.js',
  output: {
    path: path.join(__dirname, './client/dist'),
    filename: '[name].chunk.js'
  },
  resolve: {
    extensions: [ '.jsx', '.js' ]
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({
      template: './client/index.html',
      filename: './index.html'
    })
  ],
  module: {
    rules: [
      {
        test: /\.js?$|.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [ '@babel/preset-env', '@babel/preset-react' ],
            plugins: [ '@babel/plugin-proposal-object-rest-spread', '@babel/plugin-transform-arrow-functions' ]
          }
        }
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ],
      },
    ]
  },
};
