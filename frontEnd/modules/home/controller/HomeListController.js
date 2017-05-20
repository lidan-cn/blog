define([], function () {
    var ctrl = ['$scope', function ($scope) {
        console.log('home.list.ctrl');
        $('.ui.sticky.menu').sticky({
            context: "#list"
        });
    }];
    ctrl.name = 'home.list.ctrl';
    ctrl.registerType = 'controller';
    return ctrl;
});
