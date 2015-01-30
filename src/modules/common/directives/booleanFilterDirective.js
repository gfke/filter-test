'use strict';

module.exports = /*@ngInject*/
    function booleanFilterDirective() {
        return {
            restrict: 'A',
            scope: {
                name: '='
            },
            template: '<b>{{name}}</b><input type="radio" name="{{name}}" value="1">Yes</radio><input type="radio" name="{{value.NAME}}" value="0">No</radio>',
            link: function (scope) {
console.log(scope);
            }
        };
    };
