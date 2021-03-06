'use strict'

var mongoose = require('mongoose');
var url = "mongodb://localhost:27017/api_albums";
var app = require('./app');
var port = process.env.PORT || 3678;
mongoose.set('useCreateIndex', true);
mongoose.connect(url, { useNewUrlParser: true }, (err, res) => {
  if (err) throw err;
  else {
    mongoose.set('useCreateIndexes', true);
    app.listen(port,function() {
        console.log(`Api restfull álbumes funcionando en http://localhost:${port}`);
    });
  }
});
mongoose.set('useCreateIndex', true);
