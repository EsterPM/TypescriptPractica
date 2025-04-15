import * as express from 'express';
import {root} from "./routes/root";
import {isInteger} from "./utils";

//Aquesta constant app representa el nostre servidor web.
const app = express();

//configurar les rutes del servidor
function setupExpress() {

    //pàgina principal
    app.route("/").get(root);
}

//iniciar el servidor i escoltar peticions.
function startServer() {

    let port: number;

    //conté els arguments passats des de la línia de comandes quan s'executa el script.
    const portArg = process.argv[2];

    //Funció de utils.ts
    if (isInteger(portArg)) {
        port = parseInt(portArg);
    }

    //Si port no s'ha definit, es farà servir el port per defecte
    if (!port) {
        port = 9000;
    }

    app.listen(port, () => {
        console.log(`HTTP REST API Server is now running at http://localhost:${port}`);
    });
}

setupExpress();
startServer();