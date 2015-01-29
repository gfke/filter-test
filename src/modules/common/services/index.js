'use strict';

module.exports =
    angular.module('filterTest.common.services', [])
        .factory('dwhApiService', require('./dwhApiService'));
