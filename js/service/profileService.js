var app= angular.module('myApp');
app.factory('ProfileService', function($http, $q) {
 var data = 'data/profile.json';
 return {
        add: function(profile) {
            var deferred = $q.defer();
            deferred.resolve(data);
            return deferred.promise;
          }, 
       update: function(profile) {
            var deferred = $q.defer();
            deferred.resolve(data);
            return deferred.promise;
          },
        list: function(profileId){
        	 var deferred = $q.defer();
            deferred.resolve(data);
            return deferred.promise;
        },
        deleteProfile : function(){
        	 var deferred = $q.defer();
            deferred.resolve(data);
            return deferred.promise;
        }
       }
});