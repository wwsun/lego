'use strict';

const database = require('../utils/dbUtil');
const wrap = require('co-monk');
const Land = wrap(database.get('land'));

const db = {
  tobi: {name: 'tobi', species: 'ferret'},
  loki: {name: 'loki', species: 'ferret'},
  jane: {name: 'jane', species: 'ferret'}
};

const user = {

  list: function *(next) {
    if ('GET' !== this.method) return yield next;
    let names = Object.keys(db);
    this.body = yield 'pets: ' + names.join(', ');
  },

  land: function *(next) {
    if ('GET' !== this.method) return yield next;
    this.body = yield Land.findOne({});
  }


};

module.exports = user;