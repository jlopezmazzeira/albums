'use strict'

var express = require('express');
var ImageController = require('../controllers/image');
var multipart = require('connect-multiparty');
var multipartMiddelware = multipart({ multipartDir: './uploads' });
var api = express.Router();

api.get('/image/:id', ImageController.getImage);
api.post('/image', ImageController.saveImage);
api.get('/images/:album?', ImageController.getImages);
api.put('/image/:id', ImageController.updateImage);
api.delete('/image/:id', ImageController.deleteImage);
api.post('/upload-image/:id', multipartMiddelware, ImageController.uploadImage);
api.get('/get-image/:imageFile', multipartMiddelware, ImageController.getImageFile);

module.exports = api;
