
///<reference path="jasmine.js"/>
///<reference path="../../Scripts/angular.min.js"/>
///<reference path="../../Scripts/angular-route.min.js"/>
///<reference path="../../Scripts/angular-mocks.js"/>
///<reference path="../app.js"/>

describe('Testing a MainCtrl controller', function() {
  //describe('MainCtrl', function() {
    
    var $scope,ctrl;
  var someServiceMock;
    beforeEach(module('plunker'));
  beforeEach(function()
  {
    someServiceMock=jasmine.createSpyObj('PetService',['getData']);
    module('plunker');
    inject(function($rootScope,$controller){
      
      $scope=$rootScope.$new();
    //  someServiceMock.getData.andReturn($q.when('weee'))
      //someServiceMock.someAsyncCall.andReturn($q.when('weee'));
       //  $timeout = _$timeout_;
         ctrl=$controller('MainCtrl',{
           $scope:$scope//,
         //  PetService:someServiceMock
         })
         
         it('should be Hello World',function()
         {
          expect($scope.name).toEqual('World');
          
         })
      
    })
  });
 // })
});

  