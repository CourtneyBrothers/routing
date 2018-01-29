"use strict";

angular.module("routing", ["ngRoute"])

.config($routeProvider => {
    $routeProvider
        .when("/",{
            templateUrl:"partials/partials.html",
            controller:"blueridgeparkwayCntrl"
        })
        .otherwise("/");
    });