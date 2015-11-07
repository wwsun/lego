'use strict';

const monk = require('monk');
const wrap = require('co-monk');

const config = {
  'db': 'jiaodian',
  'host': 'localhost',
  'user': '',
  'pw': '',
  'port': 27017
};

const db = monk('mongodb://localhost:27017/jiaodian');

module.exports = db;

