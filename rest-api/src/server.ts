//serveix per llegir variables d'entorn des d'un fitxer .env
import * as dotenv from "dotenv";

//Amb dotenv.config() pots accedir a aquestes variables a través de process.env.PORT
const result = dotenv.config();

if (result.error) {
    console.log(`Error loading environment variables, aborting.`);
    //para l'execució del programa
    process.exit(1);
}

console.log(process.env.PORT)

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

    //Port desde l'arxiu .env
    const portEnv = process.env.PORT,
    //conté els arguments passats des de la línia de comandes quan s'executa el script.
            portArg = process.argv[2];

    
    //inInteger funció de utils.ts
    if (isInteger(portEnv)) {
        port = parseInt(portEnv);
    }
    

    if (!port && isInteger(portArg)) {
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