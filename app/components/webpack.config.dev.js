'use strict';

var path = require('path');
var webpack = require('webpack');
var js_dist = path.join(__dirname, './dist');

module.exports = [{
  name: 'app',
  entry: {
    line: 'lib\app.jsx',
  },
  output: {
    path: js_dist,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: [/\.jsx$/],
        loaders: ["jsx-loader?insertPragma=React.DOM&harmony"],
      }
    ],
  },
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.js', '.jsx']
  }
}];