"use strict";


angular.module("routing").controller("blueridgeparkwayCntrl",function($scope,routeFactory){
    routeFactory.getBlueridge()
    .then((routeObjects)=>{
        console.log(routeObjects.data,"route");
        $scope.listRoutes = routeObjects.data.routes;
        console.log("list routes",$scope.listRoutes);
    }); 
});

//question: wehre is the data supposed to be kept??