var path = require('path');
var node_modules = path.resolve(__dirname, '../node_modules');

module.exports = {
  entry: path.resolve(__dirname, '../client/entry/client.js'),
  output: {
    path: path.resolve(__dirname, '../public/build'),
    publicPath: '/assets/', // for hot build, the link will be http://localhost:8080/assets/
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      {test: /client(\\|\/).+\.jsx?$/, exclude: /node_modules/, loader: 'babel', query: {presets: ['es2015', 'react']}}
    ]
  }
};