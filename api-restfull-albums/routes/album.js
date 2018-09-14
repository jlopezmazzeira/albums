'use strict'

var express = require('express');
var AlbumController = require('../controllers/album');
var api = express.Router();

api.get('/album/:id', AlbumController.getAlbum);
api.post('/album', AlbumController.saveAlbum);
api.get('/albums', AlbumController.getAlbums);
api.put('/album/:id', AlbumController.updateAlbum);
api.delete('/album/:id', AlbumController.deleteAlbum);

module.exports = api;
