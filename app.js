var sys = require("sys"),  
my_http = require("http");  
my_http.createServer(function(request,response){   
   console.log("Recieved request:" + request.url);
   fs.readFile("index.html",function(error,data){
       if(error){
           response.writeHead(404,{"Content-type":"text/plain"});
           response.end("Sorry the page was not found");
       }else{
           response.writeHead(202,{"Content-type":"text/html"});
           response.end(data);
       }
   	});
}).listen(8080);  
sys.puts("Server Running on 8080");  