(function() {

  angular.module("myApp").factory('userService', ['$q','$rootScope','$http', function($q, $rootScope,$http) {
		var url=$rootScope.url;
    	var sampleData;
    	var networkCall = function(request){
    		var deferred  = $q.defer();            	
    		$http({
    				method: request.method,
    				url: request.url
    			}).then(function successCallback(response) {
    				deferred.resolve(response.data);
    			}, function errorCallback(status, error) {
    				console.error("Data could not Be Retrieved. ERROR: Could not find data source. "+status);
    				deferred.reject(error);
    			});
    		return deferred.promise;
    	}
    	    return {
    	    	userCall: function(token){
    				var request = {
    					'method': 'GET',
    					'url':'../mock-data/employee.json'
    					};
    				return networkCall(request);
    			},
                loginCall: function(token){
    				var request = {
    					'method': 'GET',
    					'url':'../mock-data/login-data.json'
    					};
    				return networkCall(request);
    			}
    	    };
  }]);
})();