var http = require('http');

var server = http.createServer(function(request, response) {

    //response.writeHead(200, {"Content-Type": "text/plain"});
    //response.end("Hello World!");
    //response.sendfile('yourhtmlpagename.html');
    var http = require('http');
    var fs = require('fs');

    fs.readFile('./index.html', function (err, html) {

    if (err) throw err;    

    
    response.writeHeader(200, {"Content-Type": "text/html"});  
    response.write(html);  
    response.end();  
    
});

});
//const PORT=8080; 
var port = process.env.PORT || 8080;
server.listen(port);

console.log("Server running at http://localhost:%d", port);
