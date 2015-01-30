'use strict';

var dwhApiFacade = require('dwh-api-facade');

module.exports = /*@ngInject*/
    function dwhApiService(/* inject dependencies here, i.e. : $rootScope */) {

        var fakeFilters = ['region', 'active', 'eancid', 'start','limit'];

        function fakePermissions(filterName) {
            return fakeFilters.indexOf(filterName) !== -1;
        }

        function fakePermissionsOnArray(dataArray) {
            return dataArray.filter(function (value, index) {
                return (index % 2 === 0);
            });
        }

        return {
            getAllFilters: function () {
                var processedPromise = dwhApiFacade.asyncGetAllFilters('bookdach')
                    .then(function (response) {
                        return response.data.filter;
                    });
                return processedPromise;
            },
            getSpecificFilter: function (filterName, filterGroup) {
                var processedPromise = dwhApiFacade.asyncGetSpecificFilter('bookdach', filterName)
                    .then(function (response) {
                        if(fakePermissions(filterName)) return;

                        var data = response.data.data;

                        if (data) {
                            data = fakePermissionsOnArray(data);
                        }
                        return {filterValues: data, filterName: filterName, filterGroup: filterGroup};
                    });
                return processedPromise;
            }
        };
    };
