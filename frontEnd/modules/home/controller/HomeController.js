define([], function () {
    var ctrl = function ($scope) {
        console.log('home.ctrl');
    };
    ctrl.$inject = ['$scope'];
    ctrl.registerName = 'home.ctrl';
    return ctrl;
});
