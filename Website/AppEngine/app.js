/**
 * Copyright 2017, Google, Inc.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

// [START app]
const express = require('express');
const app = express();
const Storage = require('@google-cloud/storage');

var config = {
  projectId: 'balloonsat-173803',
  keyFilename: 'BalloonSat-47b9eb0223be.json'
};

const storage = Storage(config);

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});
app.get('/index.html', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});
app.get('/index.js', function (req, res) {
  res.sendFile(__dirname + '/index.js');
});
app.get('/reload',function (req, res) {
   storage.bucket('balloonsat-173803.appspot.com').getFiles().then(function(images){
        res.send(images[0]);
   }); 
});

// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});
// [END app]
