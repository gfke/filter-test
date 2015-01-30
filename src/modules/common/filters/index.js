'use strict';

module.exports =
  angular.module('filterTest.common.filters', [])
      .filter('optionId', require('./optionId'));
