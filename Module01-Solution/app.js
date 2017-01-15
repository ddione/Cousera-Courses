(function () {
  'use strict'
  angular.module('LunchCheck',[])

  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];

  function LunchCheckController($scope) {
    $scope.name = "";
    $scope.message = "";
    $scope.FontColor="";
    $scope.Border="";
    //$scope.checkEmpty = [];
    $scope.EmptyItemMessage="";

    $scope.myMessage = function () {
      var len = checkEmptyItems($scope.name).length;
      if ($scope.name == ""){
        $scope.message = "Please enter data first";
        $scope.FontColor="Red"
        $scope.Border="Red"
      }
      else if (len <= 3){
        $scope.message = "Enjoy";
        $scope.FontColor="Green"
        $scope.Border="Green"
      }
      else{
        $scope.message = "Too much";
        $scope.FontColor="Green"
        $scope.Border="Green"
      }

    };

    function checkEmptyItems(items) {
      var NonEmptyItems = [];
      var splitedItems = items.split(',');
      $scope.EmptyItemMessage ="";
      for (var i = 0; i < splitedItems.length; i++) {
        if (splitedItems[i].trim()=="") {
          $scope.EmptyItemMessage = "NOT consider and empty item, i.e., , , as an item towards to the count";
          continue;
        }
        NonEmptyItems.push(splitedItems[i]);
      }
      return NonEmptyItems;
    }
  }

})();
