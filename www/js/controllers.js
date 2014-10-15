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
		  images:[{url:'http://s3.amazonaws.com/challengepost/photos/production/software_photos/000/148/970/datas/xlarge.png?1405905921'}],
	  	supportersIntro:'Administered by:',
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
	  	subtitle: 'Product Engineering Automation Software',
	  	description: 'Product engineering/design automation which generates a testable 3D model and matching drawings from customer specs.',
	  	supportersIntro:'Engineered for:',
	  	supporters:[{name:'WACO Products', link:'http://www.wacoproducts.com'}],
	  	tags:['engineering', 'automation', 'Waco', 'software'],
	  	link:'',//Page with more detail on tools used
	  	images:[{url:'img/projects/gateGUI.png', caption:''}]
	  },
	  {
	  	title:'Small Business C.M.S.', 
	  	description:'Simplified Content Management System specific to small businesses. At Kyper, we enjoied the challenge of building this from scratch using Nodejs and MongoDB.', 
	  	tags:['programming', 'software', 'nodejs', 'javascript'],
	  	images:[{url:'img/projects/cms1.png'}],
	  	supportersIntro: 'Challenge Project At:',
	  	supporters:[{name:'Kyper'}]
	  },
	  {
	  	title:'Pruvit Tower',
	  	subtitle:'Industrial grade wakeboard tower',
	  	description:'Custom designed/built wakeboard tower capable of towing two riders as well as working as a jumping platform.', 
	  	tags:['engineering', 'modeling', 'welding'],
	  	images:[
	  		{url:'img/projects/wakeboardTower/towerdesign.png'}, 
	  		{url:'img/projects/wakeboardTower/WakeboardTowerDesign.jpg'}, 
	  		{url:'img/projects/wakeboardTower/TowerFinished.jpg'}
	  	],
	  	supportersIntro:'Personal design built as a bonus',
	  	supporters:[{name:'WACO Products'}]
	  },
	  {
	  	title:'Garbage Can Bot',
	  	subtitle:'Teachers are not Maids',
	  	description:'Design/Built aluminum robot that carries a garbage can around Severna Park High School cafateria for students to dispose of lunch garbage. Previously this job would be handled by teachers, who would have to give up one of their planning periods.',
	  	extras:[
	  		{
	  			title:'PLTW Senior Design Project'
	  		}
	  	], 
	  	tags:['engineering', 'welding', 'modeling', 'design', 'PLTW'],
	  	images:[{url:'img/projects/bot.jpg'}]
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
		{name:'Javascript', frameworks:[
			{name:'Angular', link:'http://angularjs.org'}, 
			{name:'Grunt', link:'http://gruntjs.com/'},
			{name:'Yeoman', link:''},
			{name:'Famous', link:'http://famo.us'},
			{name:'Firebase/AngularFire', link:''},
			{name:'Parse Cloud Code'},
			{name:'Nodejs', link:'http://nodejs.org'}
			]
		},
		{name:'HTML+CSS3', frameworks:[
			{name:'Twitter Bootstrap', link:'http://bootstrap.com'}, 
			{name:'Ionic', link:'http://ionicframework.com'},
			{name:'LESS'},
			{name:'SASS'}
			]
		},
		{name:'Golang', link:'http://golang.org'},
		{name:'Ruby on Rails', },
		{name:'jQuery'},
		{name:'Less/Sass'},
		{name:'GIT versioning'},
		{name:'Objective - C', link:'http://apple.com'},
		

		
	];
	$scope.dataBases = [
		{name:'noSQL', 
			frameworks:[
				{name:'mongoDB'}, 
				{name:'Firebase'}, 
				{name:'Parse'},
			]
		},
		{name:'SQL',
			frameworks:[
				{name:'MYSQL'},
				{name:'SQLite'}
			]
		},
		{name:'Key Value Store',
			frameworks:[
				{name:'REDIS'},
				{name:'REDIGO'},
				{name:'REDINODE'}
			]
		}
	]
	$scope.software = [
		{name:'Autodesk Inventor', type:'engineering', link:'http://autodeskusa.com'},
		{name:'Solidworks', type:'engineering', link:''},
		{name:'Unix Bash', type:'programming'},
		{name:'Gcode/Shopbot', type:'engineering/programming'}

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
