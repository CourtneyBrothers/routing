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
              templateUrl:"partials/partials.html",
              controller:"blueridgeparkwayCntrl"
          })
          .otherwise("/");
      });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/blueridgeparkwayCntrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";


  module.controller("blueridgeparkwayCntrl",function($scope,routeFactory){
      routeFactory.getBlueridge()
      .then((routeData)=>{
          $scope.listRoutes = routeData.routes;
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
      return { getBlueridge };
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
              templateUrl:"partials/partials.html",
              controller:"blueridgeparkwayCntrl"
          })
          .otherwise("/");
      });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/blueridgeparkwayCntrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";


  module.controller("blueridgeparkwayCntrl",function($scope,routeFactory){
      routeFactory.getBlueridge()
      .then((routeData)=>{
          $scope.listRoutes = routeData.routes;
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
      return { getBlueridge };
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
              templateUrl:"partials/blueridge.html",
              controller:"blueridgeparkwayCntrl"
          })
          .otherwise("/");
      });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/blueridgeparkwayCntrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";


  module.controller("blueridgeparkwayCntrl",function($scope,routeFactory){
      routeFactory.getBlueridge()
      .then((routeData)=>{
          $scope.listRoutes = routeData.routes;
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
      return { getBlueridge };
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
              templateUrl:"partials/blueridge.html",
              controller:"blueridgeparkwayCntrl"
          })
          .otherwise("/");
      });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/blueridgeparkwayCntrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";


  module.controller("blueridgeparkwayCntrl",function($scope,routeFactory){
      routeFactory.getBlueridge()
      .then((routeData)=>{
          $scope.listRoutes = routeData.routes;
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
      return { getBlueridge };
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
              templateUrl:"partials/blueridge.html",
              controller:"blueridgeparkwayCntrl"
          })
          .otherwise("/");
      });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/blueridgeparkwayCntrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";


  module.controller("blueridgeparkwayCntrl",function($scope,routeFactory){
      routeFactory.getBlueridge()
      .then((routeData)=>{
          $scope.listRoutes = routeData.routes;
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
      return { getBlueridge };
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
              templateUrl:"partials/blueridge.html",
              controller:"blueridgeparkwayCntrl"
          })
          .otherwise("/");
      });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/blueridgeparkwayCntrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";


  module.controller("blueridgeparkwayCntrl",function($scope,routeFactory){
      routeFactory.getBlueridge()
      .then((routeData)=>{
          $scope.listRoutes = routeData.routes;
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
      return { getBlueridge };
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
              templateUrl:"partials/blueridge.html",
              controller:"blueridgeparkwayCntrl"
          })
          .otherwise("/");
      });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/blueridgeparkwayCntrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";


  module.controller("blueridgeparkwayCntrl",function($scope,routeFactory){
      routeFactory.getBlueridge()
      .then((routeData)=>{
          $scope.listRoutes = routeData.routes;
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
      return { getBlueridge };
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
              templateUrl:"partials/blueridge.html",
              controller:"blueridgeparkwayCntrl"
          })
          .otherwise("/");
      });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/blueridgeparkwayCntrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";


  module.controller("blueridgeparkwayCntrl",function($scope,routeFactory){
      routeFactory.getBlueridge()
      .then((routeData)=>{
          $scope.listRoutes = routeData.routes;
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
      return { getBlueridge };
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
              templateUrl:"partials/blueridge.html",
              controller:"blueridgeparkwayCntrl"
          })
          .otherwise("/");
      });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/blueridgeparkwayCntrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";


  module.controller("blueridgeparkwayCntrl",function($scope,routeFactory){
      routeFactory.getBlueridge()
      .then((routeData)=>{
          $scope.listRoutes = routeData.routes;
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
      return { getBlueridge };
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
              templateUrl:"partials/blueridge.html",
              controller:"blueridgeparkwayCntrl"
          })
          .otherwise("/");
      });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/blueridgeparkwayCntrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";


  module.controller("blueridgeparkwayCntrl",function($scope,routeFactory){
      routeFactory.getBlueridge()
      .then((routeData)=>{
          $scope.listRoutes = routeData.routes;

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
      return { getBlueridge };
  });




}) (angular.module ('routing', ['ngRoute']));


