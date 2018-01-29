"use strict";

angular.module("routing", ["ngRoute"])

.config($routeProvider => {
    $routeProvider
        .when("/",{
            templateUrl:"partials/blueridge.html",
            controller:"blueridgeparkwayCntrl"
        })
        .otherwise("/");
    });