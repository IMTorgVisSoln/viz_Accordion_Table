



angular.module('ui.bootstrap.demo', ['ngAnimate', 'ui.bootstrap', 'smart-table'])
.controller('AccordionDemoCtrl', function ($scope) {
  $scope.oneAtATime = true;

  $scope.status = {
    isFirstOpenGrp1: false,
    isFirstOpenGrp2: false,
    isFirstOpenGrp3: false,
    isFirstOpenGrp4: false,
    isFirstOpenGrp5: false,
    isFirstDisabled: false
  };
})

.controller('grp0Ctrl', ['$scope', 
  function ($scope) {
    $scope.rowCollection = tmpTbl.slice(1,2);

  }
])

.controller('grp1Ctrl', ['$scope', 
  function ($scope) {
    $scope.rowCollection = tmpTbl.slice(2,5);

  }
])

.controller('grp2Ctrl', ['$scope', 
  function ($scope) {
    $scope.rowCollection = tmpTbl.slice(5,13);

  }
])

.controller('grp3Ctrl', ['$scope', 
  function ($scope) {
    $scope.rowCollection = tmpTbl.slice(13,25);

  }
])

.controller('grp4Ctrl', ['$scope', 
  function ($scope) {
    $scope.rowCollection = tmpTbl.slice(25,31);

  }
])

.controller('grp5Ctrl', ['$scope', 
  function ($scope) {
    $scope.rowCollection = tmpTbl.slice(31,42);

  }
]);
