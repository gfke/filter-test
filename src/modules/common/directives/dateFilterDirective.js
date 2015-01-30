'use strict';

module.exports = /*@ngInject*/
    function dateFilterDirective() {
        return {
            restrict: 'A',
            scope: {
                name: '='
            },
            template: '<input type="date"  />',
            link: function (scope) {
                console.log(scope);
            }
        };
    };
