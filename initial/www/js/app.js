// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'

// Defines the modules the app will need
// rssappControllers, rssappServices, and rssappConfig b will be defined in
// individual files
angular.module('starter', ['ionic', 'rssappControllers','rssappServices','rssappConfig'])

  .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $stateProvider
    // Defines initial view of app, a list of entries
      .state('Entries', {
        url: '/',
        controller: 'EntriesCtrl',
        templateUrl: 'partials/entry.html'
      })
      // Defines view for individual entry
      .state('Entry', {
        url: '/entry/:index',
        controller: 'EntryCtrl',
        templateUrl: 'partials/entry.html'
      });

    $urlRouterProvider.otherwise('/');
  }])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
