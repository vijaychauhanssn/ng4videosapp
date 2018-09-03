var config = require('config.json');
var _ = require('lodash');
var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
var Q = require('q');
var mongo = require('mongoskin');
var db = mongo.db(config.connectionString, { native_parser: true });
db.bind('videos');

var video = {};

video.getAll = getAll;

module.exports = video;

function getAll() {
    var deferred = Q.defer();
      db.videos.find().toArray(function (err, videos) {
      if (err) deferred.reject(err.name + ': ' + err.message);

        // return videos 
        videos = _.map(videos, function (video) {
            return _.omit(video, 'hash');
        });

        deferred.resolve(videos);
    });

    return deferred.promise;
}







