'use strict'

var express = require('express');
var ImageController = require('../controllers/image');
var api = express.Router();

/*api.get('/album/:id', ImageController.getAlbum);
api.post('/album', ImageController.saveAlbum);
api.get('/albums', ImageController.getAlbums);
api.put('/album/:id', ImageController.updateAlbum);
api.delete('/album/:id', ImageController.deleteAlbum);*/
api.get('/test', ImageController.test);
module.exports = api;
