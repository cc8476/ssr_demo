const path = require('path');
module.exports = {
  entry: {
    index: path.resolve(__dirname, '../client.js')
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
    path: path.resolve(__dirname, '../dist/server/client.js')
  },
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
  ]
}