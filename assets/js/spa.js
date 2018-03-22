angular.module('Platzi', []);
angular.module('Platzi').controller('BaseCtrl', ['$scope', '$http', function ($scope, $http){

    //instead of $http.get use io.socket for realtime
    io.socket.get('/emoji', function(data){
        $scope.emojis = data;
        //angular auto (digest loop) handles this w/ http. this is the way to tap in and have it autorender
        $scope.$apply();
    });

    io.socket.on('emoji', function NewEvent(event){
        switch(event.verb) {
            case 'created':
                $scope.emojis.push(event.data);
                $scope.$apply();
                break;
        }
    });

}]);

/*

asdasdas

*/