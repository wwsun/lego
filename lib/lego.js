'use strict';

var koa = require('koa');
var path = require('path');
var views = require('koa-views');
var serve = require('koa-static');

require('babel/register'); // support es6 syntax

var config = require('../lib/config/default');

var app = module.exports = koa();

app.use(views(config.template.path, config.template.options));

require('../app/routes')(app);

if (!module.parent) {
  app.listen(3000);
}