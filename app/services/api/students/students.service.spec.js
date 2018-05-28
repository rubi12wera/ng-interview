'use strict';

describe('ngInterview.api.students', function() {
	var httpBackend;
	var service;

	beforeEach( function(){
		module('ngInterview.api.students');
		inject(function($httpBackend, _StudentsService_){
			httpBackend = $httpBackend;
			service = _StudentsService_;
		})
	});
	describe('StudentsService', function() {

		it('should be instantiated', inject(function(StudentsService) {
			expect(StudentsService).toBeDefined();
		}));
		it("should return defined response and data: status 200", function () {
			var returnData = {
		        id: 2,
		        first: 'Adriana',
		        last: 'McQ'
		    };
		    httpBackend.whenGET("http://il-resume-api.azurewebsites.net/api/students").respond(200, returnData);
		 
		    var returnedPromise = service.getStudentList();

	        var result;
	        returnedPromise.then(function (response) {
	            result = response.data;
	        });
	 
	        httpBackend.flush();

			expect(service).toBeDefined();
			expect(result).toBeDefined();
		    expect(result).toEqual(returnData);
    	});	
    	
    	it("should return defined response and data: status 503", function () {
			var returnData = null;
		    httpBackend.whenGET("http://il-resume-api.azurewebsites.net/api/students").respond(503, returnData);
		 
		    var returnedPromise = service.getStudentList();

	        var result;
	        returnedPromise.then(function (response) {
	            result = response.data;
	        });
	 
	        httpBackend.flush();

			expect(service).toBeDefined();
			expect(result).toBeDefined();
		    expect(result).toEqual(returnData);
    	});	
	});

});
