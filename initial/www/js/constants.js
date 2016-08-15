/**
 * Created by akorovin on 16.08.2016.
 */

/**
 * Configuration module
 * Used to define constants
 */
angular.module("rssappConfig", [])
  .constant("settings", {
    RSS_URL: "http://feeds.feedburner.com/raymondcamdensblog",
    TITLE: "Raymond Camden's Blog"
  });
