'use strict';

module.exports = /*@ngInject*/
    function numberFilterDirective() {
        return {
            restrict: 'A',
            scope: {
                name: '='
            },
            template: '<input type="number" />',
            link: function (scope) {
                console.log(scope);
            }
        };
    };
