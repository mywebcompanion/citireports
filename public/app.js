/**
 * Created by ARUN on 4/1/2016.
 */
var ReportApp = angular.module('ReportApp',['ui.bootstrap','ui.router']);
ReportApp.config(['$logProvider','$stateProvider','$urlRouterProvider',function($logProvider, $stateProvider, $urlRouterProvider) {
    $stateProvider.state('home', {
        url: '/',
        controller: 'ReportsController',
        templateUrl : 'views/HomeView.html'
    });
}]);

ReportApp.run(function($rootScope, $state){

    $state.transitionTo('home'); // Kickstarting default route

});