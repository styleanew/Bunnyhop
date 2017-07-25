(function () {
    'use strict';

    angular
        .module('app')
        .controller('BunnyControl', BunnyControl);

    BunnyControl.$inject = ['$scope']; 

    function BunnyControl($scope) {
        $scope.title = 'BunnyControl';

        activate();

        function activate() { }
    }
})();
