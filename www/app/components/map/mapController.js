viewController.controller('mapController', function ($scope, $ionicModal, $timeout, gw2api) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});
  angular.extend($scope, {
    bounds: {
      northEast: {
        lat: 180,
        lng: -180
      },
      southWest: {
        lat: -180,
        lng: 180
      }
    }
  });
  angular.extend($scope, {
    defaults: {
      zoomControlPosition: 'bottomleft',
      tileLayer:           'https://tiles.guildwars2.com/1/1/{z}/{x}/{y}.jpg',
      maxZoom:             7,
      attributionControl:  false,
      path:                {
        weight:  10,
        color:   '#800000',
        opacity: 1
      },
      tileLayerOptions:    {
        continuousWorld: false,
        noWrap:          true,
        reuseTiles:      true,
        detectRetina:    false
      }

      //crs: L.CRS.Simple
    },
    center:   {
      lat:  15,
      lng:  0,
      zoom: 2
    }
  });

});
