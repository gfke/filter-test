'use strict';

module.exports =
    angular.module('filterTest.foo', [])
        .config(function ($stateProvider) {
            $stateProvider
                .state('foo', {
                    url: '',
                    templateUrl: 'app/foo/layout.html',
                    controller: 'fooController'
                });
        })
        .controller('fooController',
        [
            '$scope',
            '$filter',
            'dwhApiFactory',
            require('./fooController')
        ]);
