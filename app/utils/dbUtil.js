'use strict';

const monk = require('monk');

const config = {
  db: 'jiaodian',
  host: 'localhost',
  user: '',
  pwd: '',
  port: 27017
};

const PORT = (config.port.length > 0) ? ':' + config.port : '';
const LOGIN = (config.user.length > 0) ? config.user + ':' + config.pwd + '#' : '';
const mongoURI = 'mongodb://' + LOGIN + config.host + PORT + '/' + config.db;

const db = monk(mongoURI);

module.exports = db;