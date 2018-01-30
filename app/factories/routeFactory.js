'use strict';

angular.module("routing").factory("routeFactory",function($q,$http){
    let getBlueridge  = ()=>{
        return $q((resolve,reject)=>{
            $http
                .get("../data/blueridge.json")
                .then((routes)=>{
                    resolve(routes);
                    console.log(" data",routes);
                })
                .catch((err)=>{
                    reject(err);
                });
        });
    };
    let getRoute66 = ()=> {
        return $q((resolve,reject)=>{
            $http
                .get("../data/route66.json")
                .then((routes)=>{
                    resolve(routes);
                    console.log(" data",routes);
                })
                .catch((err)=>{
                    reject(err);
                });
        });
    };  
    return { getBlueridge, getRoute66 };
});


