angular.module('store', [])
.controller('dataCtrl', function($scope, $http) {
    $http({
        method : "GET",
        url : "https://sneakpeeq-sites.s3.amazonaws.com/interviews/ce/feeds/store.js"
    }).then(function mySucces(response) {
        $scope.myWelcome = response.data;
    }, function myError(response) {
        $scope.myWelcome = response.statusText;
    });
});
