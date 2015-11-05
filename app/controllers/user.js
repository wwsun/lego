'use strict';

const db = {
  tobi: { name: 'tobi', species: 'ferret' },
  loki: { name: 'loki', species: 'ferret' },
  jane: { name: 'jane', species: 'ferret' }
};

const user = {

  list: function *() {
    if ('GET' !== this.method) return yield next;
    let names = Object.keys(db);
    this.body = 'pets: ' + names.join(', ');
  }

};

module.exports = user;