'use strict';

import koa from 'koa';

var lego;
export default lego = koa();

if (module.parent) {
  lego.listen(7001);
  console.log('Lego server is listening at %s', 7001);
}