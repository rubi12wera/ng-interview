(function() {
	'use strict';

	angular
		.module('ngInterview.api.students')
		.service('StudentsService', StudentsService);

	StudentsService.$inject = ['$http'];
	function StudentsService($http) {

		/**
		 * Exposed functions
		 */

		this.getName = getName; // This function serves no purpose. It's just here as an example.
		
		/**
		 * Implementations
		 */
		this.getStudentList = function () {
		 	return $http.get('http://il-resume-api.azurewebsites.net/api/students')
                .then(function(response){
                	return response;
                }, function(response){
                	return response;
                });
                
		 };
		
		function getName() {
			return 'studentsService';
		};
	}
})();
