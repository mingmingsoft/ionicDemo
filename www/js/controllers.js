angular.module('starter.controllers', [])

.controller('StartCtrl', function($scope) {

})
.controller('ProductDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('ActivityCtrl', function($scope){

})
.controller('ActivityContentCtrl', function($scope){

})

.controller('CartCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})
.controller('SettlementCtrl', function($scope, Chats){
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})
    .controller('SettlementInvoiceCtrl', function($scope){

    })
.controller('OrderPayCtrl', function($scope){

})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
})
.controller('MyOrderCtrl', function($scope){
  $scope.test = '';
})
.controller('MyCommissionCtrl', function($scope){

})
.controller('ChangePwdCtrl', function($scope){

})

;
