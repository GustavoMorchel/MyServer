// Import the HTTP module
const http = require("http");

const fs = require('fs');

const host = 'localhost';
const port = 8000;

const Index = fs.readFileSync('./html/index.html');
const Anfibios = fs.readFileSync('./html/Anfibios.html');
const mamiferos = fs.readFileSync('./html/Mamiferos.html');
const peixes = fs.readFileSync('./html/Peixes.html');
const repteis = fs.readFileSync('./html/Repteis.html');
const aves = fs.readFileSync('./html/Aves.html');

const requestListener = function (req, res) {    
    const reqUrl = req.url
    if(reqUrl == "/") {
        res.writeHead(200);
        res.write(Index);
        res.end();
    }
    else if(reqUrl == "/Anfibios") {
        res.writeHead(200);
        res.write(Anfibios);
    } 
    else if(reqUrl == "/Mamiferos"){
        res.writeHead(200);
        res.write(mamiferos);
    }
    else if(reqUrl == "/Peixes"){
        res.writeHead(200);
        res.write(peixes);
    }
    else if(reqUrl == '/Repteis'){
        res.writeHead(200);
        res.write(repteis);
    }
    else if(reqUrl == '/Aves'){
        res.writeHead(200);
        res.write(aves)
    }
    else {
        res.writeHead(404);        
    }
    res.end()
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {   
    console.log(`Server is running on http://${host}:${port}`);
});
