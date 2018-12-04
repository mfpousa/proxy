const express = require('express')
const request = require('request');
const app = express();

app.get('/proxy', function (req, res) {
    const url = req.query.url;
    res.setHeader("Access-Control-Allow-Origin", "*");
    request.get(url).pipe(res);
});

app.listen(8081, "0.0.0.0", () => {
    console.log("Server started");
});