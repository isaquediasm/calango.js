const path = require('path');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

/* module.exports = {
  entry: [
    'babel-polyfill',
    './src/index',
    'webpack-dev-server/client?http://localhost:8080'
  ],
  output: {
      publicPath: '/',
      path: __dirname + '/dist',
      filename: 'bundle.js'
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: path.join(__dirname, 'src'),
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'stage-0'],
        }
      }
    ]
  },
  devServer: {
    contentBase: "./src"
  }
};
 */

module.exports = {
  context: __dirname + '/src', // `__dirname` is root of project and `src` is source
  entry: {
    app: './lib/groupByProp.js'
  },
  output: {
    path: __dirname + '/dist', // `dist` is the destination
    filename: 'sloth.js'
  },
  devServer: {
    contentBase: __dirname + '/src' // `__dirname` is root of the project
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Check for all js files
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: { presets: ['es2015'] }
          }
        ]
      }
    ]
  }
};
