'use strict';

const path = require('path');
const node_modules = path.resolve(__dirname + '../node_modules');

module.exports = {

  entry: path.resolve(__dirname, '../client/index.js'),
  output: {
    path: path.resolve(__dirname, '../public/build'),
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      {test: /client(\\|\/).+\.jsx?$/, exclude: /node_modules/, loader: 'babel'}
    ]
  }
};