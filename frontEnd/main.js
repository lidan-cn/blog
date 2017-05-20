require.config({
    "paths": {
        "jquery": "libs/jquery/dist/jquery.min",
        "lodash": "libs/lodash/dist/lodash.min",
        "semantic-ui": "libs/semantic-ui/dist",
        "angular": "libs/angular/angular",
        "angular-ui-router": "libs/angular-ui-router/release/angular-ui-router",
        "app": "framework/app",
        "lazyLoader": "common/lazyLoader",
        "restangular": "libs/restangular/dist/restangular.min",
        "home": "modules/home",
        "register": "modules/register"
    },
    "shim": {
        "angular": {
            "deps": ['jquery'],
            "exports": "angular"
        },
        "angular-ui-router": ['angular'],
        "restangular": {
            "deps": ['angular']
        },
        "semantic-ui/semantic.min": {
            "deps": ['jquery']
        },
        "semantic-ui/components/sticky.min": {
            "deps": ['jquery']
        }
    }
});
// load modules 所有的模块路由配置文件定义了模块
require(['angular', 'app', 'semantic-ui/semantic.min', 'semantic-ui/components/sticky.min'], function (angular, app) {

    angular.bootstrap('html', [app.name]);
});