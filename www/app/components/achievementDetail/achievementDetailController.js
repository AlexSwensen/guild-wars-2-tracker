
viewController.controller('achievementDetailController', function ($scope, $state, $stateParams, gw2api) {
  console.log($stateParams.id);
  if ($stateParams.id === null) {
    $state.message = 'Error';
  }
  else {
    $scope.id = $stateParams.id;
  }

  gw2api.getAchievement($scope.id).then(function (achievement) {
    $scope.achievement = achievement.plain();
    console.log($scope.achievement);
  });

});
