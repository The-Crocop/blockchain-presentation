var http = require("http-server");

var server = http.createServer({root: "."}).listen(8081);

console.log("Starting server at port 8081")