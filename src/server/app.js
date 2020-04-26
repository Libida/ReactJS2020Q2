const express = require('express');
const path = require('path');
const app = express();
const port = 8080;
const ghpages = require("gh-pages");

app.use(express.static(path.join(__dirname, 'public')));

app.get('*', function(req, res){
    res.sendFile(path.join(__dirname, '../../public/index.html'));
});

app.listen(port, () => console.log(`React app listening at http://localhost:${port}`));

ghpages.publish("public", function (err) {});
