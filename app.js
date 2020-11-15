const express = require('express');
const path = require('path');
var https = require('https')
var fs = require('fs')
const helmet = require('helmet');
const compress = require('compression');

const port = process.env.PORT || 6789;
const app = express();

app.use(compress());
app.use(helmet());
app.use(express.static(path.join(__dirname, 'dist'), { maxAge: 0 }));

app.get('*', function (request, response) {
  response.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(port);
console.log("server started on port " + port);