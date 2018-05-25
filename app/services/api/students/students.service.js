(function() {
	'use strict';

	angular
		.module('ngInterview.api.students')
		.service('StudentsService', StudentsService);

	StudentsService.$inject = ['$http', '$timeout'];
	function StudentsService($http, $timeout) {

		/**
		 * Exposed functions
		 */

		this.getName = getName; // This function serves no purpose. It's just here as an example.
		
		/**
		 * Implementations
		 */
		var triedTimes = 0;

		this.getStudentList = function () {
			triedTimes ++;
		 	return $http.get('http://il-resume-api.azurewebsites.net/api/students')
                .then(function(response){
                	return response;
                }, function(response){
                	return response;
                });
                
		 };
		var reTry = this.getStudentList;
		 



		function getName() {
			return 'studentsService';
		};
	}
})();
