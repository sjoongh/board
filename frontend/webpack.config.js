const path = require('path');

module.exports = {
  mode: 'development',
  // enntry file
  target: 'node',
  entry: './server.js',
  devServer: {
    historyApiFallback: true,
  },
  // 컴파일 + 번들링된 js 파일이 저장될 경로와 이름 지정
  output: {
    // __dirname, 'dist/js'
    path: path.resolve('./index.js'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [
          path.resolve(__dirname, '/frontend')
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
  devtool: 'source-map',
};