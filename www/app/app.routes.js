app.config(function ($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
      url:         '/app',
      abstract:    true,
      templateUrl: 'app/components/menu/menu.html',
      controller:  'menuController'
    })

    .state('app.home', {
      url:   '/home',
      views: {
        'menuContent': {
          templateUrl: 'app/components/home/home.html',
          controller:  'homeController'
        }
      }
    })
    .state('app.achievementDetail', {
      url:    '/achievementDetail',
      params: {
        id: null
      },
      views:  {
        'menuContent': {
          templateUrl: 'app/components/achievementDetail/achievementDetail.html',
          controller:  'achievementDetailController'
        }
      }
    })
    .state('app.map', {
      url:    '/map',
      params: {
        location: null,
        posX:     null,
        posY:     null,
        layer:    null,
        posID:    null
      },
      views:  {
        'menuContent': {
          templateUrl: 'app/components/map/map.html',
          controller:  'mapController'
        }
      }
    });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/home');
});
