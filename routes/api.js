const userCtrl = require('../app/controllers/user');
const overviewCtrl = require('../app/controllers/overview');

module.exports = function (app, route) {

  app.use(route.get('/api/user', userCtrl.list)); // test data

  /**
   * 根据日期获取数据在每天的分布情况
   */
  app.use(route.get('/api/session/trend/:date', overviewCtrl.getDistributionByDate));

};