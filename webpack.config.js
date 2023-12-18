const path = require('path');
const html = require('html-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

module.exports = {
  mode: 'production',
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
    new FaviconsWebpackPlugin('./src/assets/Icon.svg'),
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
        test: /\.(png|svg|jpeg)$/i,
        type: 'assets/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
    ],
  },
};