const path = require('path');
const html = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    static: './src'
  },
  plugins: [
    new html({
      title: 'El Cabron Pizza',
      template: './src/index.html',
      inject: 'head',
      scriptLoading: 'defer',
    }),
  ],
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    clean: true,
    path: path.resolve(__dirname, 'dist'),
  },
  
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpeg)$/,
        type: 'asset/resource',
      },
    ],
  },
};