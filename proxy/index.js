const request = require('request');
const { parse } = require("url");
module.exports = (req, res) => {
    const { query: { url } } = parse(req.url, true);
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Dummy", "Hi");
    request.get(url).pipe(res);
};
