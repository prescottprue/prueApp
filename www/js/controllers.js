angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicTabsDelegate, $ionicModal) {
	// $scope.currentTab = 1;
	$ionicTabsDelegate.select(1);
	
	$scope.loadTab = function(argTab) {
		console.log('[AppCtrl] loadTab called with: ', argTab);
		$ionicTabsDelegate.select(argTab);
	}
})
.controller('ProjectsCtrl', function($scope, Friends) {
	console.log('ProjectsCtrl');
  $scope.projects = [{title:'Project 1'},{title:'Project 2'}];
})
.controller('ResumeCtrl', function($scope, Friends) {
	console.log('ResumeCtrl');

})
.controller('ContactCtrl', function($scope, Friends, $window) {
	console.log('ContactCtrl');
  $scope.emailMe = function() {
  	console.log('[ContactCtrl] emailMe called');
  	var link = "mailto:prescottprue@gmail.com";
  	$window.location.href=link;
  }
})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
})

.controller('AccountCtrl', function($scope) {
});
