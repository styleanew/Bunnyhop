
(function () {
    'use strict';

    var app =
    angular
        .module('spice', [])
        .controller('SpicyController', ['$scope', function ($scope) {

            $scope.spice = 'somewhat';

            $scope.chili = function () {
                $scope.spice = 'chili';
            };

            $scope.jalap = function () {
                $scope.spice = 'jap';
            };
        }]);

})();