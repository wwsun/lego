'use strict';

const db = require('../utils/dbUtil');
const wrap = require('co-monk');
const sessionTable = wrap(db.get('session'));

let session = {

  getSessionsByDate: function *(date) {

    let query = {'date': date};
    let opts = {sort: {'hour': 1}};

    let array = yield sessionTable.find(query, opts);

    let result = {
      hour: [],
      dup: []
    };

    array.forEach(function (element, index, array) {

      // only keep odd index
      if (index % 2 === 1) {
        result.hour.push(element['hour']);
        result.dup.push(element['sum']);
      }
    });

    return result;
  }

};

module.exports = session;