var sys = require("sys"),
my_http = require("http"),
fs = require('fs');
my_http.createServer(function(request,response){   
   console.log("Recieved request:" + request.url);
   var route = router[request.url];
   if(route) {
    route(request,response);}
  else {
    response.writeHead(404,{"Content-type":"text/plain"});
    response.end("Sorry the page was not found");
    }
}).listen(8080);   
sys.puts("Server Running on 8080");  

var router = {
  "/": function (req, res) {
  fs.readFile("index.html",function(error,data){
    if(error){
        response.writeHead(404,{"Content-type":"text/plain"});
        response.end("Sorry the page was not found");
    }else{
        response.writeHead(202,{"Content-type":"text/html"});
        response.end(data);
    }
  });
}
};