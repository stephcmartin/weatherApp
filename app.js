// MODULE
let weatherApp = angular.module('weatherApp', ['ngRoute', 'ngResource']);

// ROUTES
weatherApp.config(function ($routeProvider) {
   
    $routeProvider
    
    .when('/', {
        templateUrl: 'pages/home.htm',
        controller: 'homeController'
    })
    
    .when('/forecast', {
        templateUrl: 'pages/forecast.htm',
        controller: 'forecastController'
    })
    
    .when('/about', {
        templateUrl: 'pages/about.htm',
        controller: 'aboutController'
    })
});

// CONTROLLERS
weatherApp.controller('homeController', ['$scope', function($scope) {
    
}]);

weatherApp.controller('forecastController', ['$scope', function($scope) {
    
}]);

weatherApp.controller('aboutController', ['$scope', function($scope) {
    
}]);