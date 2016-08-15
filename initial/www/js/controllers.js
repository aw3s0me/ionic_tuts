/**
 * Created by akorovin on 16.08.2016.
 */

angular.module('rssappControllers', [])
  .controller('EntriesCtrl',
    ['$ionicPlatform', '$scope', 'RSSService', 'settings',
    function ($ionicPlatform, $scope, RSSService, settings) {
      // Event similar to cordovas deviceReady
      // CALLED AFTER cordovas deviceReady
      $ionicPlatform.ready(function () {
        $scope.title = settings.TITLE;
        // Service that handles fetching RSS data
        RSSService.getEntries(settings.RSS_URL)
          .then(function (entries) {
            $scope.entries = entries;
          }, function (err) {
            console.log('error', err);
          });
      });
    }])
  // Controller used when second view is rendered
  .controller('EntryCtrl', ['$scope', 'RSSService', '$stateParams',
    function($scope, RSSService, $stateParams) {
      // Asks Service to get particular entry
      RSSService.getEntry($stateParams.index).then(
        function(entry) {
          $scope.entry = entry;
        }, function(err) {
          console.log("error", err);
        });
    }]);
