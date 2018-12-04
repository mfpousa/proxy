const request = require('request');
const { parse } = require("url");
module.exports = (req, res) => {
    const url = parse(req.url).searchParams.get("url");
    // res.setHeader("Access-Control-Allow-Origin", "*");
    request.get(url).pipe(res);
};
//