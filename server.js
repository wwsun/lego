const Koa = require('koa');
const path = require('path');
const fs = require('fs');
const logger = require('koa-logger');
const config = require('./config/config');

/**
 * Initialize application
 */
const app = module.exports = new Koa();
app.use(logger());


/**
 * Start server
 */
if (!module.parent) {
  const port = process.env.PORT || config.port || 9001;
  app.listen(port);
  console.log('Running %s site at: http://localhost:%d', config.mode, port);
}