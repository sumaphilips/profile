// Ionic Starter App, v0.9.20

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js

angular.module('myApp', ['ionic'])

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    
    .state('login', {
      url: "/logIn",
      templateUrl: 'templates/logIn.html',
      controller: 'logInController'
    })
   
    .state('register', {
      url: "/register",
      templateUrl: 'templates/register.html',
      controller: 'registerController'
    })
    .state('fgtPassword', {
      url: "/fgtPassword",
      templateUrl:'templates/fgtPassword.html',
      controller: 'fgtPwdController'
    })
    .state('tab', {
      url: "/tab",
      abstract:true,
      templateUrl:'templates/tabs.html',
            
      })
    .state('tab.profile', {
      url: "/profile/:profileId",
      views: {
        'tab-profile':{              
              templateUrl:'templates/tab-profile.html',
              controller: 'ProfileController'
            }
          }         
      })
    
    .state('tab.addInsurance', {
      url: "/addInsurance",
      views: {
        'tab-insurance':{              
              templateUrl:'templates/insurance.html',
              controller: 'insuranceDetailCtrl'
            }
          }         
      })
     .state('tab.insurance-detail', {
      url: "/addInsurance/:profileId/:MbrId",
      views: {
        'tab-insurance':{              
              templateUrl:'templates/tab-addInsurance.html',
              controller: 'insuranceDetailCtrl'
            }
          }         
      })
    .state('tab.addFamilyMbr', {
      url: "/addFamilyMbr",
       views: {
        'tab-family':{    
      templateUrl:'templates/family.html',
      controller: 'addFamilyMbrCtrl'
    }
  }
})
   .state('tab.family-detail', {
      url: "/addFamilyMbr/:profileId/:MbrId",
      views: {
        'tab-family':{              
              templateUrl:'templates/tab-addFamilyMbr.html',
              controller: 'addFamilyMbrCtrl'
            }
          }         
      })    
    $urlRouterProvider.otherwise("/tab/profile/1");
   });

