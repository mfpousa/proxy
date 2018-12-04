const NowClient = require('now-client');
const fs = require("fs");
const now = new NowClient("mpV28hdIlYhUJDCyO4DKeWHW");
now.createDeployment({
    name: "payhub-proxy",
    public: true,
    version: 2,
    files: [
        { "file": "index.js", "data": fs.readFileSync("./src/index.js").toString() },
    ],
    builds: [
        { "src": "*.js", "use": "@now/node" },
    ]
}).then(deployments => console.log(deployments));