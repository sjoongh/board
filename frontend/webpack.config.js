const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  // enntry file
  // ./src/static/js/index.js
  entry: ['@babel/polyfill', './frontend/static/js/index.js'],
  // 컴파일 + 번들링된 js 파일이 저장될 경로와 이름 지정
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [
          // src
          path.resolve(__dirname, 'frontend')
        ],
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-proposal-class-properties']
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
        template: "./frontend/index.html"
    })
  ],
  devtool: 'source-map',
  devServer: {
    host: "localhost",
    port: 8080,
  },
  mode: 'development'
};