var route = require('koa-route');

module.exports = function (app, route) {

  app.use(route.get('/api/test', function *() {

    if ('GET' != this.method) return yield next;
    this.body = {
      test: 'hello world'
    };
  }));


};