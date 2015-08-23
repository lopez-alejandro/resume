(function () {
    'use strict';
    angular
        .module('app')
        .config(States);

    States.$inject = ['$stateProvider', '$urlRouterProvider'];

    function States($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/home');

        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: 'app/components/home/home.html'
            })
    }
})();
