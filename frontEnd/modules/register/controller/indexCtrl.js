define([], function () {
    var ctrl = ['$scope', function ($scope) {
        $scope.user = 'scope';
    }];

    ctrl.name = 'register.ctrl';
    ctrl.registerType = 'controller';
    return ctrl;
});