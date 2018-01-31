
//====================================================================================================================
// Module:    routing
// Optimized: Yes
// File:      ./app/app.js
//====================================================================================================================

(function (module) {

  "use strict";

  module

  .config($routeProvider => {
      $routeProvider
          .when("/",{
              templateUrl:"partials/view.html",
              controller:"viewCntrl"
          })

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
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/blueridgeparkwayCntrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";


  module.controller("blueridgeparkwayCntrl",function($scope,routeFactory){
      routeFactory.getBlueridge()
      .then((routeObjects)=>{
          console.log(routeObjects.data,"route");
          $scope.listRoutes = routeObjects.data.routes;
          console.log("list routes",$scope.listRoutes);
      }); 
  });

  //question: wehre is the data supposed to be kept??
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/route66Cntrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";


  module.controller("route66Cntrl",function($scope,routeFactory){
      routeFactory.getRoute66()
      .then((routeObjects)=>{
          console.log(routeObjects.data,"route");
          $scope.listRoutes = routeObjects.data.routes;
          console.log("list routes",$scope.listRoutes);
      }); 
  });

//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/viewCntrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";


  module.controller("viewCntrl", function ($scope) {
  $scope.view = [
    {
      name: "The Blue Ridge Parkway",
      link: "partials/blueridge.html"
    },
    {
      name: "Route 66",
      link: "partials/route66.html"
    }
  ];
  });

//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/routeFactory.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.factory("routeFactory",function($q,$http){
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




}) (angular.module ('routing', ['ngRoute']));



//====================================================================================================================
// Module:    routing
// Optimized: Yes
// File:      ./app/app.js
//====================================================================================================================

(function (module) {

  "use strict";

  module

  .config($routeProvider => {
      $routeProvider
          .when("/",{
              templateUrl:"partials/view.html",
              controller:"viewCntrl"
          })

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
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/blueridgeparkwayCntrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";


  module.controller("blueridgeparkwayCntrl",function($scope,routeFactory){
      routeFactory.getBlueridge()
      .then((routeObjects)=>{
          console.log(routeObjects.data,"route");
          $scope.listRoutes = routeObjects.data.routes;
          console.log("list routes",$scope.listRoutes);
      }); 
  });

  //question: wehre is the data supposed to be kept??
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/route66Cntrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";


  module.controller("route66Cntrl",function($scope,routeFactory){
      routeFactory.getRoute66()
      .then((routeObjects)=>{
          console.log(routeObjects.data,"route");
          $scope.listRoutes = routeObjects.data.routes;
          console.log("list routes",$scope.listRoutes);
      }); 
  });

//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/viewCntrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";


  module.controller("viewCntrl", function ($scope) {
  $scope.view = [
    {
      name: "The Blue Ridge Parkway",
      link: "partials/blueridge.html"
    },
    {
      name: "Route 66",
      link: "partials/route66.html"
    }
  ];
  });

//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/routeFactory.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.factory("routeFactory",function($q,$http){
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




}) (angular.module ('routing', ['ngRoute']));



//====================================================================================================================
// Module:    routing
// Optimized: Yes
// File:      ./app/app.js
//====================================================================================================================

(function (module) {

  "use strict";

  module

  .config($routeProvider => {
      $routeProvider
          .when("/",{
              templateUrl:"partials/view.html",
              controller:"viewCntrl"
          })

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
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/blueridgeparkwayCntrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";


  module.controller("blueridgeparkwayCntrl",function($scope,routeFactory){
      routeFactory.getBlueridge()
      .then((routeObjects)=>{
          console.log(routeObjects.data,"route");
          $scope.listRoutes = routeObjects.data.routes;
          console.log("list routes",$scope.listRoutes);
      }); 
  });

  //question: wehre is the data supposed to be kept??
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/route66Cntrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";


  module.controller("route66Cntrl",function($scope,routeFactory){
      routeFactory.getRoute66()
      .then((routeObjects)=>{
          console.log(routeObjects.data,"route");
          $scope.listRoutes = routeObjects.data.routes;
          console.log("list routes",$scope.listRoutes);
      }); 
  });

//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/routeFactory.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.factory("routeFactory",function($q,$http){
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




}) (angular.module ('routing', ['ngRoute']));



//====================================================================================================================
// Module:    routing
// Optimized: Yes
// File:      ./app/app.js
//====================================================================================================================

(function (module) {

  "use strict";

  module

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
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/blueridgeparkwayCntrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";


  module.controller("blueridgeparkwayCntrl",function($scope,routeFactory){
      routeFactory.getBlueridge()
      .then((routeObjects)=>{
          console.log(routeObjects.data,"route");
          $scope.listRoutes = routeObjects.data.routes;
          console.log("list routes",$scope.listRoutes);
      }); 
  });

  //question: wehre is the data supposed to be kept??
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/route66Cntrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";


  module.controller("route66Cntrl",function($scope,routeFactory){
      routeFactory.getRoute66()
      .then((routeObjects)=>{
          console.log(routeObjects.data,"route");
          $scope.listRoutes = routeObjects.data.routes;
          console.log("list routes",$scope.listRoutes);
      }); 
  });

//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/routeFactory.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.factory("routeFactory",function($q,$http){
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




}) (angular.module ('routing', ['ngRoute']));


