'use strict';

module.exports = /*@ngInject*/
    function textFilterDirective() {
        return {
            restrict: 'A',
            scope: {
                name: '='
            },
            template: '<input type="text"  />',
            link: function (scope) {
                console.log(scope);
            }
        };
    };
