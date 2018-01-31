"use strict";

angular.module("routing", ["ngRoute"])

.config($routeProvider => {
    $routeProvider


        .when("/blueridge",{
            templateUrl:"partials/blueridge.html",
            controller:"blueridgeparkwayCntrl"
        })
        .when("/route66",{
            templateUrl:"partials/route66.html",
            controller:"route66Cntrl"
        })
        .otherwise("/");
        
    });