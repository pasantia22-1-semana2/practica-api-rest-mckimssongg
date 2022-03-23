// Crear una desde 0
const http = require('http'); //Lammamos a http, esto lo tiene nodejs
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    
    if( req.metho === 'GET' ){
        res.statusCode = 200; // Exito 200 a 299
        res.setHeader('Content-Type', 'text/plain');
        res.end('Una respuesta GET');
    }
    if (req.method === 'POST'){
        res.statusCode = 200; // Exito 200 a 299
        res.setHeader('Content-Type', 'text/plain');
        res.end('Una respuesta POST');
    }

})

server.address(hostname);
server.listen(port, () => {
    console.log(`Server esta corriendo => http://${hostname}:${port}`);
})