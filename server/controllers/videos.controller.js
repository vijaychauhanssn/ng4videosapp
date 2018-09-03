var config = require('config.json');
var express = require('express');
var router = express.Router();
var videoService = require('services/video.service');

// routes
router.get('/', getAll);

module.exports = router;

function getAll(req, res) {
    videoService.getAll()
        .then(function (videos) {
            res.send(videos);
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}

