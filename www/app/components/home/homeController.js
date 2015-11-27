/**
 * Created by Alexander Swensen on 11/25/15.
 */

viewController.controller('homeController', function ($scope, gw2api) {



  //console.log(gw2api.getAchievement().one('daily').get());
  $scope.updateDaily = function () {
    gw2api.getDaily().then(function (response) {
      $scope.daily = response.plain().pve;
      console.log($scope.daily);

      $scope.daily = $scope.daily.map(function (item) {
        return gw2api.getAchievement(item.id).$object;
      });
    });
    $scope.$broadcast('scroll.refreshComplete');
  };

  $scope.updateDaily();

  //
  //$scope.test = gw2api.getAchievement(1984).$object;
  //console.log($scope.test);
  //$scope.getAchievement = function (id) {
  //  return gw2api.getAchievement(id).$object;
  //};
  //
  //console.log($scope.getAchievement(1984));

});
