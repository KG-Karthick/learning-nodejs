const https = require("http");

const routes = require("./route");

const server = https.createServer(routes);

server.listen(3000);
