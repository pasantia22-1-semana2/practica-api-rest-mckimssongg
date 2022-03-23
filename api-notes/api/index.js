import {Server} from './Server.js';
import {config} from '../config/default.js';


function main (hostName, port, nameApp){
    const srv = new Server(hostName, port, nameApp);
    srv.initServer()
}

main(config.api.host, config.api.port, config.api.app)