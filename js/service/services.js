var app= angular.module('myApp');

app.factory('UserService', function($http, $q) {
  var data ={
    "providerUrl": "https://graph.facebook.com/oauth/authorize?client_id=258522097629021&response_type=code&redirect_uri=http%3A%2F%2Fec2-54-200-125-36.us-west-2.compute.amazonaws.com%3A8080%2FhealthNode%2FhealthNode%2Fregister%2Fcallback%2Ffacebook",
    "authorizationCode": null,
    "oauth_token": null,
    "oauth_verifier": null,
    "oauth_callback_confirmed": false
};
var inHouseData = {
  "url":"/home",
   "message":"Welcome back Suma"
};

 return {
        logInWithServiceProvider: function(user) {
            var deferred = $q.defer();
              deferred.resolve(data);
              console.log("ServiceProvider");
            return deferred.promise;

          }, 
       logIn: function(user) {
        
            var deferred = $q.defer();
              deferred.resolve(inHouseData);
              console.log("InHouse");
            return deferred.promise;
          }
       }
});
/*          ,
      forgotPassword: function(user) {
             var deferred =$q.defer();
             deferred.resolve(pwddata);
             console.log("retrievePwd");
            return deferred.promise;
        }
      } 
})*/

app.factory('regUserService', function($http, $q) {
  var data ={
    "providerUrl": "https://graph.facebook.com/oauth/authorize?client_id=258522097629021&response_type=code&redirect_uri=http%3A%2F%2Fec2-54-200-125-36.us-west-2.compute.amazonaws.com%3A8080%2FhealthNode%2FhealthNode%2Fregister%2Fcallback%2Ffacebook",
    "authorizationCode": null,
    "oauth_token": null,
    "oauth_verifier": null,
    "oauth_callback_confirmed": false
};
  var inHouseregData = {
  "url":"/home",
   "message":"Welcome back "
};
var user=[];
var profiletestData={ "message":"checking to see if this works"};
 return {
        getInitialProfile: function(){
                        return InitialProfile;
                    },
        setInitialProfile: function(value){
                        InitialProfile=value;
                    },
                
        regWithServiceProvider: function(user) {
            var deferred = $q.defer();
              deferred.resolve(data);
              console.log("ServiceProvider");
            return deferred.promise;
          }, 
       register: function(user) {
        
            var deferred = $q.defer();
              deferred.resolve(inHouseregData);
              console.log("InHouseReg");
            return deferred.promise;
          }

        }

});

app.factory('fgtPwdService', function($http, $q) {
  
var pwddata= {
  "url":"/forgotPassword",
  "message":"Enter details to retrieve password"
};

 return {
       fgtPassword: function(user) {
            var deferred = $q.defer();
              deferred.resolve(pwddata);
              console.log("pwd retreival complete");
            return deferred.promise;
           }

        }
});

app.factory('profileService', function($http, $q) {
  var user=[];
  return{
        getUserDetails: function(){
                return user;
            },
        setUserDetails: function(value){
                user=value;
            },
        createProfile: function() {
            var deferred = $q.defer();
             deferred.resolve(data);
              console.log("Profile created with initial details");
            return deferred.promise;
          }, 
        updateProfile: function() { 
             var deferred = $q.defer();
             deferred.resolve(data);
              console.log("Profile updated");
            return deferred.promise;
            /* ??? Basically profile update should Push the new details associated with user such as insurance, family mbr, mbr details and insurance etc
            User is parent object with userprofile data, insurance and family info.  */
             },
        addInsurance: function(user) {
             var deferred = $q.defer();
             deferred.resolve(data);
              console.log("insurance details updated");
            return deferred.promise;
             },

        addFamily: function(details) {
             var deferred = $q.defer();
             deferred.resolve(data);
              console.log("family details updated");
            return deferred.promise;
             },


           }

});

app.factory('Users', function($http, $q) {
  var users=[];
  return{
        all: function(){
                return users;
            },
        getprofileId: function(profileId){
                users[profileId];
            },
        getmbrId: function(mbrId){
                users[mbrId];
            },
          }           

});
   
  
