angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicTabsDelegate, $ionicModal) {
	// $scope.currentTab = 1;
	$ionicTabsDelegate.select(1);
	
	$scope.loadTab = function(argTab) {
		console.log('[AppCtrl] loadTab called with: ', argTab);
		$ionicTabsDelegate.select(argTab);
	}
})
.controller('ProjectsCtrl', function($scope, Friends, $window) {
	console.log('ProjectsCtrl');
  $scope.projects = [
	  {
	  	title:'Escollate', 
		  subtitle:'Big Data for Small Businesses', 
		  description:'Data Analytics with Open Q&A that allows small buisnesses to make information based decisions like never before', 
		  links:[
		  	{text:'Hackathon Details', url:'http://challengepost.com/software/escollate'},
		  	{text:'App Demo', url:''}
		  ],
		  tags:['buisness', 'software', 'app'],
		  image:{url:'http://s3.amazonaws.com/challengepost/photos/production/software_photos/000/148/970/datas/xlarge.png?1405905921'},
	  	supporters:[
	  		{name:'Capital One', link:'https://www.capitalone.com/'}, 
	  		{name:'D2D Fund', link:'http://www.d2dfund.org/'},
	  		{name: 'CFSI', link:'http://www.cfsinnovation.com/'}
	  	],
		  extras:[
		  	{title:'Small Biz Dev Hackathon',
		  	link:'http://challengepost.com/software/escollate', 
		  	icon:'ion-trophy', 
		  	description:  '1st Place Winner ($10,000 Grand Prize) ',
		  	image:{url:''}
		  	}
		  ]
	  },
	  {
	  	title: 'Gate Generator',
	  	description: 'Product engineering/design automation which generates a testable 3D model and matching drawings from customer specs.',
	  	tags:['engineering', 'automation'],
	  	link:'',//Page with more detail on tools used
	  	images:[{url:'', caption:''}]
	  },
	  {
	  	title:'Small Business C.M.S.', 
	  	description:'Simplified Content Management System specific to small buisnesss', 
	  	tags:['programming', 'software']
	  },
	  {
	  	title:'Wakeboard Tower', 
	  	description:'Custom Designed/Built Industrial grade wakeboard tower', 
	  	tags:['engineering', 'modeling']
	  },
	  {
	  	title:'Garbage Bot', 
	  	description:'', 
	  	tags:['engineering', 'welding', 'modeling', 'design', 'PLTW']
	  }
  ];//End of $scope.projects
  $scope.viewLink = function(linkObj){
  	console.log('opening link:', linkObj);
  	$window.open(linkObj.url,'_blank');
  }
})
.controller('ResumeCtrl', function($scope, Friends) {
	console.log('ResumeCtrl');
	$scope.languages = [
		{name:'Javascript', frameworks:[]},
		{name:'Angular', link:'http://angularjs.org'}, 
		{name:'Grunt', link:'http://gruntjs.com/'}
	]

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
