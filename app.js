angular.module('plunker', [])

.filter('CatFilter', function () {
  return function (items) {
    var filtered = [];
  
    for (var i = 0; i < items.length; i++) {
      var item = items[i];
      if (item.type=='Cat') {
        filtered.push(item);
      }
   
    }
    return filtered;
  }
})
.service('PetService', function($http) {
   function getData() {
        return $http.get('data.json').then(function(response) {
          
            return  dataList=response.data || null;
        }, function(response) {
            return {};
        });
    };
return {
        getData: getData
    }
})
  .controller('MainCtrl', function($scope, PetService) {
    $scope.name = 'World';
     $scope.groupByGender=[];
//To get data from Service
    $scope.GetDataT = function() {
      //Consuming Service from PetService
      PetService.getData().then(function(data) {
        if(data){
        $scope.groupByGender = groupBy(data, 'gender');
        console.log($scope.groupByGender)
        }
      });
    }
    $scope.GetDataT();
    
/*custom method to filter data by a category*/
    function groupBy(arr, key) {
      if(arr){
      var newArr = [],
        types = {},
        newItem, i, j, cur;
      for (i = 0, j = arr.length; i < j; i++) {
        cur = arr[i];
        if (!(cur[key] in types)) {
          types[cur[key]] = {
            key: cur[key],
            data: []
          };
          newArr.push(types[cur[key]]);
        }
        types[cur[key]].data.push(cur);
      }
      return newArr;
    }
    }
    /*mock methods*/
    
  });
  
  
  