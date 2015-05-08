var app=angular.module("MonthChooser",[]);
app.controller("MonthController",["$scope",function($scope){
    $scope.month="May";
}]);
app.directive("monthChooser",function(){
    var directive={

        link:function(scope,elm,attr){
            debugger;
        },
        scope:{
            monthModel:'='
        },
        restrict:"EA",
        templateUrl:"partials/monthpicker.html"

    }
    return directive;
})