var app=angular.module("MonthChooser",[]);
app.controller("MonthController",["$scope",function($scope){
    $scope.month="May";
}]);
app.directive("monthChooser",function(){
    var directive={

        link:function(scope,elm,attr){
            scope.yearMonths=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];


            //elm[0].addEventListener("click",onclickEvent);
            elm[0].querySelector("input").addEventListener("focus",getOnFocusEvent);
            elm[0].querySelector(".datepicker-months").addEventListener("blur",getBlurEvent(scope));
            elm[0].ownerDocument.body.addEventListener("click",getClickEvent(scope));
             scope.pickerHide=true;
             function onclickEvent(){
                     event.srcElement.style.display=""
                 }
                 function getOnFocusEvent(){

                     scope.$apply(scope.pickerHide=false);

                 }
                 function getBlurEvent(scope){
                     return function(){
                         scope.pickerHide=true;
                     }
                 }
                 function getClickEvent(scope){
                     return function(){

                     }
                 }
        },
        scope:{
            monthModel:'='

        },
        restrict:"EA",
        templateUrl:"partials/monthpicker.html"

    }
    return directive;

})