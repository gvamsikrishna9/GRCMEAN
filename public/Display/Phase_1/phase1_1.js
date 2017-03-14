
    var app = angular.module('phase1', []).controller('phase1Controller', function ($scope, $http) {
    $scope.myTextarea = null;
    $scope.segments = [];

    $http({
            method: 'GET',
            url: '',
			cache: false,
            data: {  }
        }).then(function (result) {
			console.log("here");
        $scope.segments = result.data;
    });

});


