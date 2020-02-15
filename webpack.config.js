/* eslint-disable @typescript-eslint/no-var-requires */
const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/App.tsx',
  devtool: 'source-map',
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src/components/'),
      utils: path.resolve(__dirname, './src/utils'),
      gen: path.resolve(__dirname, './gen'),
    },
    extensions: ['.tsx', '.ts', '.js', 'json'],
    modules: [path.resolve(__dirname, 'src'), './node_modules'],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html',
    }),
  ],
  devServer: {
    contentBase: './dist',
  },
};
