/**
 * Created by akorovin on 16.08.2016.
 */
angular.module('rssappServices', [])
  .factory('RSSService', function($q) {
    var entries;

    /**
     * Method that handles fetching RSS entries
     * @param rss
     * @returns {Promise}
       */
    function getEntries(rss) {
      // Handles async aspect of feed loading
      var deferred = $q.defer();
      // Do we have the entries already?
      if(entries && entries.length) {
        deferred.resolve(entries);
      } else {
        /**
         * Loads RSS library
         */
        google.load("feeds", "1", {callback:function() {
          // Defines new RSS process
          var feed = new google.feeds.Feed(rss);
          // Specifies max number of RSS entries
          feed.setNumEntries(10);
          // Begins RSS parsing
          feed.load(function(result) {
            if(!result.error) {
              entries = result.feed.entries;
              // Copies and saves RSS entries
              deferred.resolve(entries);
            } else {
              console.log("Error - "+result.error.message);
              deferred.fail(result.error.message);
            }
          });
        }});
      }
      return deferred.promise;
    }

    /**
     * Gets one entry
     * @param id
     * @returns {Promise}
     */
    function getEntry(id) {
      // Even though process isn't async
      // It still uses deferred
      var deferred = $q.defer();
      if(!entries || !entries.length) {
        deferred.fail("Entry does not exist.");
      } else {
        // Get entry from cache
        deferred.resolve(entries[id]);
      }
      return deferred.promise;
    }
    return {
      getEntries: getEntries,
      getEntry: getEntry
    }
  });
