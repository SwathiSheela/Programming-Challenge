///<reference path="jasmine.js"/>
///<reference path="../../Scripts/angular.min.js"/>
///<reference path="../../Scripts/angular-route.min.js"/>
///<reference path="../../Scripts/angular-mocks.js"/>
///<reference path="../app.js"/>

describe('Testing a Hello World controller', function() {
  var $scope = null;
  var ctrl = null;
var API_URL = '/data.json';
var pets, httpBackend;
  //you need to indicate your module in a test
  beforeEach(module('plunker'));

  
  beforeEach(inject(function($rootScope, $controller, $injector) {
    $scope = $rootScope.$new();
     httpBackend = $injector.get('$httpBackend');
   // pets = _pets_;
    ctrl = $controller('MainCtrl', {
      $scope: $scope
    });
  }));

  it('should say hallo to the World', function() {
    expect($scope.name).toEqual('World');
  });
  
  it('should say hallo to the World', function() {
    //$scope.GetData();
   // console.log($scope.groupByGender)
    expect($scope.name).toEqual('World');
  });
  });