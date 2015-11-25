
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
    });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/home');
});
