'use strict';
Object.defineProperty(exports, '__esModule', {value: true});
var tslib_1 = require('tslib');
var koa_compose_1 = tslib_1.__importDefault(require('koa-compose'));
var login_again_if_different_shop_1 = require('./login-again-if-different-shop');
var verify_token_1 = require('./verify-token');
var auth_1 = require('../auth');
function verifyRequest(givenOptions) {
  if (givenOptions === void 0) {
    givenOptions = {};
  }
  var _a = tslib_1.__assign(
      {accessMode: auth_1.DEFAULT_ACCESS_MODE, returnHeader: false},
      givenOptions,
    ),
    accessMode = _a.accessMode,
    returnHeader = _a.returnHeader;
  var routes = tslib_1.__assign(
    {authRoute: '/auth', fallbackRoute: '/auth'},
    givenOptions,
  );
  return koa_compose_1.default([
    login_again_if_different_shop_1.loginAgainIfDifferentShop(
      routes,
      accessMode,
    ),
    verify_token_1.verifyToken(routes, accessMode, returnHeader),
  ]);
}
exports.default = verifyRequest;
