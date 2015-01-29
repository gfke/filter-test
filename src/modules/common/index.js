'use strict';

module.exports =
  angular.module('filterTest.common', [
    require('./directives').name,
    require('./filters').name,
    require('./services').name
  ]);
