const sessionService = require('../services/session');

/**
 * controller: overview -- 获取数据集的整体概况信息
 */
const overview = {

  getDistributionByDate: function *(date) {
    this.body = yield sessionService.getSessionsByDate(date);
  }

};

module.exports = overview;