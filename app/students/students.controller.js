(function() {
	'use strict';

	angular
		.module('ngInterview.students')
		.controller('StudentsController', StudentsController);

	StudentsController.$inject = ['StudentsService'];
	function StudentsController(StudentsService) {

		/**
		 * Model
		 */

		var vm = this;
			vm.students;
			vm.errorMessage;
		var triedTimes= 0;
		var errorMessageText = "Student data could not be loaded at this time, please reload page or try again later."
		/**
		 * Initialization
		 */

		activate();

		/**
		 * Implementations
		 */

		function activate() {
			// Initialization code goes here
			
		getStudentsData();
		}

		function getStudentsData() {
			triedTimes ++;
			return StudentsService.getStudentList().then(function (response){
				if (response && response.data && typeof response.data === "object"){
					try{
						console.log(response);
					// checking for invalid JSON
						var respText = JSON.stringify(response.data);
							var jsonObject = JSON.parse(respText);
							vm.students = jsonObject;
					}
					catch(e){
					// should implement a log we can toggle on and off on different environments so we can later debug for errors
						vm.errorMessage = errorMessageText;
					}
				}
				else{
					if(triedTimes < 2){
						getStudentsData();
					}
					else{
						vm.errorMessage = errorMessageText;
					}
				}
				

			}, function (response){
				vm.errorMessage = errorMessageText;
			}); 

			
		}
	}
})();
