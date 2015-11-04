module.exports = function (app) {

  let Router = require('koa-router');
  let indexCtrl = require('../controllers/index');

  let router = new Router();

  router
    .get('/', indexCtrl.index)
    .get('/link/:id', function *(next) {
      this.body = "Get value from params: " + this.params.id;
    })
    .get('/render/view', indexCtrl.view)
    .get('/view/:id', indexCtrl.test);

  app.use(router.middleware());

};