const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: process.env.NODE_ENV,
  entry: './client/index.ts',
  output: {
    filename: 'bundle.ts',
    path: path.join(__dirname, '/dist'),
  },
  plugins: [
    // bundle html files
    new HTMLWebpackPlugin({
      template: './client/index.html',
    }),
  ],
  devServer: {
    // serve static files
    static: {
      publicPath: '/dist',
      directory: path.join(__dirname, 'dist'),
    },
    // proxy for express server
    proxy: {
      '/api': 'http://localhost:3000',
    },
  },
  module: {
    rules: [
      // babel loaders
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'ts-loader'],
      },
      // css loaders
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
};
