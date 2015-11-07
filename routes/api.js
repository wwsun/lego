const route = require('koa-route');

const userCtrl = require('../app/controllers/user');

module.exports = function (app, route) {

  app.use(route.get('/api/user', userCtrl.list));
  app.use(route.get('/api/land', userCtrl.land));

};