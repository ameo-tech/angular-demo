angular.module('archapp', ['ngRoute', 'angular-growl', 'ngCookies', 'ngStorage', 'ngBusy', 'angularPayments'])

.config(['$routeProvider', 'growlProvider', '$httpProvider', function ($routeProvider, growlProvider, $httpProvider) {

    //set close timeout for growl notification.
    growlProvider.globalTimeToLive(10000);
    $httpProvider.interceptors.push('requestInterceptor');

    $routeProvider
    .when('/', {
        templateUrl: 'modules/home/main.html',
        controller: 'main-controller'
    })
    .when('/login', {
        templateUrl: 'modules/account/login-register.html',
        controller: 'login-controller'
    })
        .when('/logout', {
            templateUrl: 'modules/account/login-register.html',
            controller: 'login-controller'
        })

    
    .when('/registration', {
        templateUrl: 'modules/account/registration.html',
        controller: 'login-controller'
    });
}])

.run(['$rootScope', 'loginService', '$location', '$cookies', function ($rootScope, loginService, $location, $cookies) {
 //Put code here that you want to run on start-up.
}]);


angular.element(document).ready(function () {
    angular.bootstrap(document, ["archapp"]);
});