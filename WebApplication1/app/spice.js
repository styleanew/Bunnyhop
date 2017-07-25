(function () {
    'use strict';
        
    spiceMod.controller('SpicyController', ['$scope', function ($scope) {

            $scope.spice = 'somewhat';

            $scope.chili = function () {
                $scope.spice = 'chili';
            };

            $scope.jalap = function () {
                $scope.spice = 'jap';
            };
        }]);

})();