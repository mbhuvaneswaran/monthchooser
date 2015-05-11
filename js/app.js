var app=angular.module("MonthChooser",[]);
app.controller("MonthController",["$scope",function($scope){
    $scope.month="May";
}]);
app.directive("monthChooser",function(){
    var directive={

        link:function(scope,elm,attr){
            scope.yearMonths=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];


            //elm[0].addEventListener("click",onclickEvent);
           // elm[0].querySelector("input").addEventListener("focus",getOnFocusEvent);
            elm[0].querySelector(".datepicker-months").addEventListener("blur",getBlurEvent);
            elm[0].style.display="inline-block";
            elm[0].ownerDocument.body.addEventListener("click",getClickEvent);
             scope.pickerHide=true;

                 function getOnFocusEvent(){

                     scope.$apply(scope.pickerHide=false);

                 }
                 function getBlurEvent(){

                         scope.$apply(scope.pickerHide=true);

                 }
                 function getClickEvent(){
                     if(closest(event.target,"month-chooser")){
                            scope.$apply(scope.pickerHide=false);
                           return;
                     }
                     scope.$apply(scope.pickerHide=true);



                 }
                 function closest(el, clazz) {


                     // Traverse the DOM up with a while loop
                     while (el.className.indexOf(clazz) == -1) {
                         // Increment the loop to the parent node
                         el = el.parentNode;
                         if ((!el) || (el==document)){
                             return null;
                         }

                     }
                     // At this point, the while loop has stopped and `el` represents the element that has
                     // the class you specified in the second parameter of the function `clazz`

                     // Then return the matched element
                     return el;
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