define([], function () {
    var ctrl = ['$scope', function ($scope) {
        console.log('home.ctrl');
    }];
    ctrl.name = 'home.ctrl';
    ctrl.registerType = 'controller';
    return ctrl;
});
