"use strict";


angular.module("routing").controller("route66Cntrl",function($scope,routeFactory){
    routeFactory.getRoute66()
    .then((routeObjects)=>{
        console.log(routeObjects.data,"route");
        $scope.listRoutes = routeObjects.data.routes;
        console.log("list routes",$scope.listRoutes);
    }); 
});
