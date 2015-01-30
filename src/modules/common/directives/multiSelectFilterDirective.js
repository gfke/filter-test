'use strict';

module.exports = /*@ngInject*/
    function multiSelectFilterDirective() {
        return {
            restrict: 'A',
            scope: {
                name: '=',
                values: '='
            },
            template: '<option ng-repeat="value in values track by $index" value="{{value.ID}}">{{value.NAME}}</option>',
            link: function (scope) {

            }
        };
    };
