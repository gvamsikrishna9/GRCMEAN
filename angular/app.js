angular.module('grcmean', ['ngRoute']).config(config);

function config($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'public\Display\Phase_1\phase1display.html',
      controller: translation_controller,
      controllerAs: 'vm'
    })
    .when('/grcmean/:id', {
      templateUrl: 'public\Display\Phase_2\phase2display.html',
      controller: translation_controller,
      controllerAs: 'vm'
    })
     .when('/grcmean/:key', {
      templateUrl: 'public\Display\Phase_3\phase3display.html',
      controller: translation_controller,
      controllerAs: 'vm'
    });
}
