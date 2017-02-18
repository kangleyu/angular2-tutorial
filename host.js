/**
 * Simple static server based on express
 * for hosting sample application
 */
var express = require('express');
var app = express();

app.use(express.static(__dirname));

app.listen(9000, function() {
  console.log('listenning on port 9000...');
})