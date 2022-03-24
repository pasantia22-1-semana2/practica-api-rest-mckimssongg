// import { chalkStderr } from 'chalk'; // No se par que la puse
import express from 'express';

import routerNote from './notes/routers/notas.route.js' // rutas de la seccion de notas para hacer el crud


// """"
// Tomamos el server como un objeto y construimos como tal en una chalkStderr, para luego pasarlo al index y que cree el objeto server y que lo inicie con con el metodo initServer
// """"


export class Server{ //constructor del server del appi
  constructor(hostName, port, nameApp){
    this._hostName = hostName;
    this._port = port;
    this._nameApp = nameApp;
    this._app = express();
    this.initMiddleware();
    this.initRoutes();

  }
  initMiddleware(){ // Configurar para saber que datos dejar pasar
      this._app.use(express.json());
      this._app.use(express.urlencoded({extended: true}));
      
  }
  initRoutes(){ //Para crear las rutas 

    this._app.use('/api/v1/user/', (req,res)=>{
        res.json({
            message:"Aca estaran las rutas de users"
        })
    } )

    this._app.use("/api/v1/note", routerNote);  

    this._app.use("/api/v1/home", (req,res)=>{
        res.json({
            message:"Este es el home"
        })
    });
    
  }
  initServer(){ //Para iniciar el server
    try{
        this._app.set('trust proxy', this._hostName);
        this._app.listen(this._port, ()=>{
            console.log(`El server ${this._nameApp} esta corriendo en http://${this._hostName}:${this._port}`);
        })
    } catch(e){
        console.log('Ocurrio un error')
    }
}
}