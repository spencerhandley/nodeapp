var sys = require("sys"),
my_http = require("http"),
fs = require('fs');
my_http.createServer(function(request,response){   
   console.log("Recieved request:" + request.url);
   var route = router[request.url];
   var my_404 = router["/404"]
   if(route) {
    route(request,response);
  }
  else {
    my_404(request, response);
    }
}).listen(8080);   
sys.puts("Server Running on 8080");  

var router = {
  "/": function (request, response) {
    fs.readFile("views/index.html",function(error,data){
      if(error){
          route("/404", response);
      }else{
          response.writeHead(202,{"Content-type":"text/html"});
          response.end(data);
      }
    });
  },
  "/404": function(request, response) {
    fs.readFile("views/404.html", function (error, data) {
      response.writeHead(202,{"Content-type":"text/html"});
      response.end(data);
    });
  }
};