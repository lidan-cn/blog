/**
 * main module
 * register common controller ,service ,directive
 */
define(['angular', 'lodash', 'angular-ui-router', 'register/config', 'home/config'],
    function (angular, _, uiRouter, register, home) {
        var dep = ['ng', 'ui.router', home.name, register.name];
        var app = angular.module('app', dep);

        // 配置路由不存在处理函数
        app.config(['$urlRouterProvider', '$provide', function ($urlRouterProvider, $provide) {
            $urlRouterProvider.otherwise('/home');
        }]);
        app.run(['$rootScope', '$state', function ($rootScope, $state) {
            $rootScope.$on('$stateNotFound', function (event, unfoundState, from, fromParams) {
                event.preventDefault();
                $state.go('pageError');
            });
        }]);

        return app;
    });
