import express from 'express';

import routerNote from './notes/routers/notas.route.js'

export class Server{
  constructor(hostName, port, nameApp){
    this._hostName = hostName;
    this._port = port;
    this._nameApp = nameApp;
    this._app = express();
    this.initMiddleware();
    this.initRoutes();

  }
  initMiddleware(){
      this._app.use(express.json());
      this._app.use(express.urlencoded({extended: true}));
      
  }
  initRoutes(){
    this._app.use("/api/v1/note",routerNote);
    this._app.use("/api/v1/home", (req,res)=>{
        res.json({
            message:"Este es el home"
        })
    });
  }
  initServer(){
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