

angular.module('getterSetter', [])
.controller('ExampleController', ['$scope', function ($scope) {
    var _name = 'Brian';
    $scope.user = {
        name: function (newName) {
            // Note that newName can be undefined for two reasons:
            // 1. Because it is called as a getter and thus called with no arguments
            // 2. Because the property should actually be set to undefined. This happens e.g. if the
            //    input is invalid
            return arguments.length ? (_name = newName) : _name;
        }
    };
}]);

var nameApp = angular.module('nameApp', []);
nameApp.controller('NameCtrl', function ($scope) {
    $scope.name.first = 'John';
    $scope.name.last = 'Smith';
});

var mySpicy = angular.module('spicyApp', []);

mySpicy.controller('SpicyController', ['$scope', function ($scope) {
    $scope.spice = 'somewhat';

    $scope.chili = function () {
        $scope.spice = 'chili';
    };

    $scope.jalap = function () {
        $scope.spice = 'jap';
    };
}]);