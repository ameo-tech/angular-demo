(function () {
    'use strict';

    angular.module('archapp')

    .provider('apiconfig', ['apibase', function (apibase) {

        this.$get = function () {
            var apiConfig = {
                user: {
                    loginUrl: apibase + "/user/login",
                    signUpUrl: apibase + "/user/create",
                    logoutUrl: apibase + "/user/logout",
                    getUserUrl: apibase + '/user/info'
                }
                    var url = apiConfig.getLocalBaseAddress();
                    return url + '/data/countries.json';
                }
            };

            return apiConfig;
        }
    }])
    .constant('apibase', 'http://localhost/api');

})();