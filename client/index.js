var myApp = angular.module('myApp', [])
          .controller('myCtrl',function($scope,$http){
             $scope.name = 'shekhar'
             $scope.showDiv = false
             $scope.showInsta = true

             $scope.submit = function(user){
                $scope.user = user;
               let data = {
                 usery: $scope.user.name,
                 pass: $scope.user.pwd
                }
                console.log('user', $scope.user)

                $http.post('/someUrl',data).then(function(response){
                			console.log('data sent', response)
                		})
                		.catch((err)=>console.log('err',err))
              };
          })

