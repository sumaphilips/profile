var app= angular.module('myApp');

app.controller('logInController', [ 'UserService', '$scope', '$state', function( UserService, $scope, $state)  {
    $scope.authenticate = function(user) { 
    	UserService.logIn(user).then(function(data){
    		console.log(data);});
      }
  $scope.serviceProviderLogin = function() { 
    	UserService.logInWithServiceProvider().then(function(data){
    		console.log(data);});
 }  	
}]); 

app.controller('registerController', [ 'regUserService', '$scope', '$state', function( regUserService, $scope, $state)  {
    $scope.authenticate = function(user) { 
      regUserService.register(user).then(function(data){
        console.log(data);});
    }
    $scope.serviceProviderLogin = function() { 
       regUserService.regWithServiceProvider().then(function(data){
        console.log(data);});
  }
 $scope.prepopulateProfile = function () {
        regUserService.setInitialProfile($scope.user);
        $window.location.href = "#/profile";
  }    
}]); 

app.controller('fgtPwdController', ['fgtPwdService', '$scope', '$state', function( fgtPwdService, $scope, $state)  {
    $scope.retrieve = function(user) { 
      fgtPwdService.fgtPassword(user).then(function(data){
        console.log(data);});
    
     }    
}]); 

app.controller('ProfileController', ['profileService','regUserService' ,'$scope', '$state', '$location','$stateParams',  function(profileService, regUserService, $scope, $state, $location, $stateParams )  {
  /*$scope.user = {name:"", relation:""}
  $scope.bloodGroups=["A+","B+","AB+","O+","A-","B-","AB-","O-"];  */

    $scope.genders = [
    { gender: "Male", checked: false},
    { gender: "Female", checked: false }
      ];
    $scope.selectGender=function(gender){
    angular.forEach($scope.genders, function(value) 
        {
          value.checked =false;
        });
          $stateParams.gender=gender;
           gender.checked=true;
          };

$scope.bloodGrpsList=[{ bloodGrp: "A+", checked: false },
    { bloodGrp: "B+", checked: false },
    { bloodGrp: "AB+", checked: false },
    { bloodGrp: "O+", checked: false },
    { bloodGrp: "A-", checked: false },
    { bloodGrp: "B-", checked: false },
    { bloodGrp: "AB-", checked: false },
    { bloodGrp: "O-", checked: false }];
 $scope.selectBloodGrp=function(bloodGrp){
    angular.forEach($scope.bloodGrpsList, function(value) 
        {
          value.checked =false;
          
        });
          
          $stateParams.bloodGrp=bloodGrp;
          
           bloodGrp.checked=true;
       
          };   
    

    $scope.loadInitialProfile= function() {
        $scope.user = regUserService.getInitialProfile;
    }

    $scope.profiledata= function(user) { 
      profileService.setUserDetails.then(function(data){
        console.log(data);});
         } 

    $scope.relations = [{
      relation:"Self",
      checked:false
    },{
      relation:"Spouse",
      checked:false
    },{
      relation:"Child",
      checked:false
    },{
      relation:"Other",
      checked:false
    }];

    $scope.selectRelation=function(relation){
    angular.forEach($scope.relations, function(value) 
        {
          value.checked =false;
        });
           $stateParams.relation=relation;
           relation.checked=true;
          };
 

console.log($stateParams.bloodGrp);
$scope.profileId=$stateParams.profileId;

}]);

app.controller('insuranceDetailCtrl', [ 'profileService', '$scope', '$state','$stateParams','$location','$ionicModal', function( profileService, $scope, $state, $stateParams, $location,$ionicModal)  {
    $scope.relations = [{
      relation:"Self",
      checked:false
    },{
      relation:"Spouse",
      checked:false
    },{
      relation:"Child",
      checked:false
    },{
      relation:"Other",
      checked:false
    }];

    $scope.selectRelation=function(relation){
    angular.forEach($scope.relations, function(value) 
        {
          value.checked =false;
        });
           $stateParams.relation=relation;
           relation.checked=true;
          };

    $scope.updateInsurance = function(user) { 
      profileService.addInsurance(user).then(function(data){
        console.log(data);});
    
     }
    $scope.item = $stateParams.mbrId;
$scope.updateInsuranceItem = function(user) { 
 Users.getmbrId (user).then(function(data) {
  return users;});
  }
  
   }]); 

app.controller('addFamilyMbrCtrl', [ 'profileService', '$scope', '$state','$stateParams','$location','$ionicModal', function( profileService, $scope, $state, $stateParams, $location,$ionicModal)  {

$scope.genders = [
    { gender: "Male", checked: false},
    { gender: "Female", checked: false }
      ];
    $scope.selectGender=function(gender){
    angular.forEach($scope.genders, function(value) 
        {
          value.checked =false;
        });
          $stateParams.gender=gender;
           gender.checked=true;
          };

$scope.relations = [{
      relation:"Self",
      checked:false
    },{
      relation:"Spouse",
      checked:false
    },{
      relation:"Child",
      checked:false
    },{
      relation:"Other",
      checked:false
    }];

    $scope.selectRelation=function(relation){
    angular.forEach($scope.relations, function(value) 
        {
          value.checked =false;
        });
           $stateParams.relation=relation;
           relation.checked=true;
          };

  $scope.bloodGrpsList=[{ bloodGrp: "A+", checked: false },
    { bloodGrp: "B+", checked: false },
    { bloodGrp: "AB+", checked: false },
    { bloodGrp: "O+", checked: false },
    { bloodGrp: "A-", checked: false },
    { bloodGrp: "B-", checked: false },
    { bloodGrp: "AB-", checked: false },
    { bloodGrp: "O-", checked: false }];
 $scope.selectBloodGrp=function(bloodGrp){
    angular.forEach($scope.bloodGrpsList, function(value) 
        {
          value.checked =false;
          
        });
          
          $stateParams.bloodGrp=bloodGrp;
          
           bloodGrp.checked=true;
       
          };   
     
 
$scope.updateFamilyMbr = function(user) { 
      profileService.addFamily(user).then(function(data){
        console.log(data);});
        }

 
  }]);

/* $scope.mbr=[{name:'', age:'',bloodGrp:'',gender:'',relation:''}];

 $scope.newfamilymbr = [];

  $ionicModal.fromTemplateUrl('modal.html', {
    animation: 'slide-in-up',
    scope: $scope
  }).then(function (modal) {
    $scope.modal = modal;
  });
  
    
  $scope.openModal = function () {
    $scope.modal.show();
  }

  $scope.addFamilyMbr = function () {
    console.log($scope);
    $scope.mbr.push({name: $scope.newfamilymbr.name});
    $scope.mbr.push({age: $scope.newfamilymbr.age});
    $scope.mbr.push({bloodGrp: $scope.newfamilymbr.bloodGrp});
    $scope.mbr.push({gender: $scope.newfamilymbr.gender});
    $scope.mbr.push({relation: $scope.newfamilymbr.relation});
   
    $scope.modal.hide();
  };
  $scope.$on('$destroy', function() {
      $scope.modal.remove();
  }); */
/*app.controller('ItemCtrl', [ 'insuranceDetailCtrl','Users' ,'$scope', '$state','$stateParams','$location','$ionicModal', function( insuranceDetailCtrl, Users, $scope, $state, $stateParams, $location,$ionicModal)  {      

 
*/