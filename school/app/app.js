'use strict';

var app = angular.module('SchoolApp', ['ngRoute', 'ui.bootstrap',  'ngAnimate', 'toaster','ngFileUpload']);


app.config(['$routeProvider',
  function ($routeProvider) {
        $routeProvider.
        when('/login', {
            title: 'Login',
            templateUrl: 'partials/login.html',
            controller: 'ApplicationController'
        })
        .when('/', {
            title: 'Login',
            templateUrl: 'partials/login.html',
            controller: 'ApplicationController',
            role: '0'
        }).when('/schoolinfo', {
                templateUrl: 'partials/schoolinfo.html',
                controller: 'ApplicationController'
        }).when('/faculty', {
                templateUrl: 'partials/faculty.html',
                controller: 'ApplicationController'
        }).otherwise({
            redirectTo: '/login'
        });
  }]);