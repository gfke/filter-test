'use strict';

module.exports =
    angular.module('filterTest.common.services', [])
        .factory('dwhApiFactory', require('./dwhApiFactory'));
