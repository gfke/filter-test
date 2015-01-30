'use strict';

module.exports =
    angular.module('filterTest.common.directives', [])
        .directive('multiSelectFilter', [require('./multiSelectFilterDirective')])
        .directive('dateFilter', [require('./dateFilterDirective')])
        .directive('textFilter', [require('./textFilterDirective')])
        .directive('numberFilter', [require('./numberFilterDirective')])
        .directive('booleanFilter', [require('./booleanFilterDirective')]);
