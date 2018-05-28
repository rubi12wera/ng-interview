'use strict';

describe('ngInterview.students module', function() {

	var $controller;
	var httpBackend;
	var myserv;
	var $q;
	var deferred;
	var students = {
		        id: 2,
		        name: 'Adriana',
		        last: 'McQ'
		    };
	beforeEach(
		function() {
			module('ngInterview.students');
			inject(function(_$controller_, $httpBackend, _StudentsService_, _$q_) {
			$controller = _$controller_;
			httpBackend = $httpBackend;
			myserv = _StudentsService_;
			

			$q = _$q_;
    
    // We use the $q service to create a mock instance of defer
    deferred = $q.defer();
    
    // Use a Jasmine Spy to return the deferred promise
    spyOn(myserv, 'getStudentList').and.returnValue(deferred.promise);
		});
	});

	describe('StudentsController', function() {

		it('should instantiate', function() {
		var studentsCtrl = $controller('StudentsController');
			expect(studentsCtrl).toBeDefined();
		});

		it('should call service', function() {
			deferred.resolve([students]);

			var studentsCtrl = $controller("StudentsController", { StudentsService: myserv});

			console.log(studentsCtrl.students);
			expect(myserv.getStudentList).toHaveBeenCalled();
			
		});
    });


});
