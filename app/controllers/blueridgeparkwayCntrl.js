"use strict";


angular.module("routing").controller("blueridgeparkwayCntrl",function($scope,routeFactory){
    routeFactory.getBlueridge()
    .then((routeData)=>{
        $scope.listRoutes = routeData.routes;
    }); 
});