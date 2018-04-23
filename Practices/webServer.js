function handleHTTP(req,res){
    if(req.method === "GET"){
        if(req.url === "/"){
            res.writeHead(200,{ "Content-type": "text/plain"})
            res.end("Hello World");
        }
        else{
            res.writeHead(403);
            res.end("Que haces???")
        }
    }
    else{
        res.writeHead(403);
        res.end("CACHADO!!!!")
    }
}

var host = "localhost";
var port = 8006;
const http = require("http");
const server = http.createServer(handleHTTP).listen(port,host);

