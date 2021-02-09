const path = require('path');
const nodeExternals = require('webpack-node-externals');
//const CopyWebpackPlugin = require('copy-webpack-plugin');
module.exports = {
  entry: {
    index: path.resolve(__dirname, '../server.js')
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 3000
  },
  mode: 'development',
  target: 'node',
  devtool: 'cheap-module-eval-source-map',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '../dist/server')
  },
  externals: [nodeExternals()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '../src')
    },
    extensions: ['.js']
  },
  module: {
    rules: [{
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env'], '@babel/react'
            ],
          }
        }
      },
      {
        test: /\.css$/,
        use: [
          'isomorphic-style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: true
            }
          }
        ]
      }
    ]
  },
  plugins: [
    /*     new CopyWebpackPlugin([{
          from:path.resolve(__dirname,'../public'),
          to:path.resolve(__dirname,'../dist')
        }]) */
  ]
}