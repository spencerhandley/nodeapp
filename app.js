var sys = require("sys"),  
my_http = require("http"),
fs = require('fs');
my_http.createServer(function(request,response){   
   console.log("Recieved request:" + request.url);
   var route = router[request.url]
   if(route) {
    route(request,response);}
  else {
      response.writeHead(202,{"Content-type":"text/html"});
      response.end(data);
    }
}).listen(8080);   
sys.puts("Server Running on 8080");  

var router = {
  "/": function (req, res) {
    res.render("/index.html");
  }
}