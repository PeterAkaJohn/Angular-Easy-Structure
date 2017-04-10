'use strict';

angular.module('app', ['ui.router', 'app.controller', 'app.core', 'app.service', 'app.directive'])
.config(function($stateProvider, $urlRouterProvider) {
        $stateProvider

            // route for the home page
            .state('app', {
                url:'/',
                views: {
                    'main': {
                        templateUrl : 'views/main.html',
                        controller  : 'Controller'
                    }
                }

            });

        $urlRouterProvider.otherwise('/');
    });
