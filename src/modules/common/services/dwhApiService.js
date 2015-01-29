'use strict';

var dwpApiFacade = require('dwh-api-facade');

module.exports = /*@ngInject*/
  function dwhApiService(/* inject dependencies here, i.e. : $rootScope */) {
    return {
      getAllFilters: function () {
          return [1,2,3];
      }
    };
  };
