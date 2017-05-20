define(['angular', 'lazyLoader'], function (angular, lazyLoader) {    //  service and directive files requires  service,directive self register in files
    var module = angular.module('home', [lazyLoader.name]);
    module.routerRules = [
        {
            "name": "home",
            "url": "/",
            "abstract": true,
            "templateUrl": "modules/home/views/layout.html",
            "controller": "home.ctrl",
            "files": ["home/controller/HomeController"]
        },
        {
            "name": "home.show",
            "url": "home",
            "views": {
                "menu": {
                    "templateUrl": "modules/home/views/menu.html",
                    "controller": "home.menu.ctrl"
                }, "list": {
                    "templateUrl": "modules/home/views/list.html",
                    "controller": "home.list.ctrl"
                }, "sidebar": {
                    "templateUrl": "modules/home/views/sidebar.html",
                    "controller": "home.sidebar.ctrl"
                }

            },
            "files": ["home/controller/HomeMenuController",
                "home/controller/HomeListController",
                "home/controller/HomeSidebarController"]
        }];
    module.config(['lazyLoaderProvider', function (lazyLoaderProvider) {
        lazyLoaderProvider.state(module.routerRules);
    }]);
    return module;
});