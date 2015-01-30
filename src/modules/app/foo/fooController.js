'use strict';

module.exports = /*@ngInject*/
    function fooController($scope, $filter, dwhApi) {
        var
            allFilters = {
                bool: {},
                option: {},
                date: {},
                int: {},
                query: {}
            };

        function resetFilters() {
            var all = angular.copy(allFilters);

            $scope.bool = all.bool;
            $scope.option = all.option;
            $scope.date = all.date;
            $scope.int = all.int;
            $scope.query = all.query;

        }

        $scope.welcome = 'Congratulations!';
        //Init all filters with all values
        dwhApi.getAllFilters().then(function (filter) {
            angular.forEach(filter, function (value, key) {
                switch (value.type) {
                    case 'bool':
                        allFilters['bool'][key] = value;
                        break;
                    case 'date':
                        allFilters['date'][key] = value.data;
                        break;
                    case 'int':
                        allFilters['int'][key] = value.data;
                        break;
                    case 'option':
                        allFilters['option'][key] = value.data;
                        break;
                    case 'query':
                        allFilters['query'][key] = value.data;
                        break;
                    default:
                        console.error('Unknown filter type: ' + value.type);
                        break;
                }
            });
            resetFilters();
        });

        $scope.refresh = function () {
            for (var filterGroup in allFilters) {
                var currentGroup = allFilters[filterGroup];
                for (var specificFilter in currentGroup) {
                    $scope[filterGroup][specificFilter] = null;
                    dwhApi.getSpecificFilter(specificFilter, filterGroup).then(function (result) {
                        if (!result) return;

                        var filtered = allFilters[result.filterGroup][result.filterName];
                        if (result.filterValues) {
                            filtered = filterOptionsById(filtered, result.filterValues);
                        }

                        $scope[result.filterGroup][result.filterName] = filtered;
                    });
                }
            }
        };

        $scope.reset = function () {
            resetFilters();
        };

        $scope.getValue = function (name, group) {
            return $scope[group][name];
        };

        function filterOptionsById(allFilters, filtersToMatch) {
            var out = [];
            filtersToMatch.forEach(function (value) {
                allFilters.forEach(function (value2) {
                    if (value.ID && value.ID === value2.ID) {
                        out.push(value);
                        return false;
                    }
                });
            });
            return out;
        }
    };
