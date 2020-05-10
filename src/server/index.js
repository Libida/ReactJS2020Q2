const express = require('express');
const index = express();
const port = 8080;
const ghpages = require('gh-pages');

index.use(express.static('public'));
index.listen(port, () => console.log(`React app listening at http://localhost:${port}`));

ghpages.publish('public', function (err) {});
