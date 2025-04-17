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

import "reflect-metadata";
import * as express from 'express';
import {root} from "./routes/root";
import {isInteger} from "./utils";
import {logger} from "./logger";
import {AppDataSource} from "./data-source";
import {getAllCourses} from "./routes/get-all-courses";
import {defaultErrorHandler} from "./middlewares/default-error-handler";

//permet que el teu frontend pugui fer peticions HTTP (com GET, POST, etc.) al teu backend sense que el navegador bloquegi la sol·licitud.
const cors = require("cors");

//Aquesta constant app representa el nostre servidor web.
const app = express();

//configurar les rutes del servidor
function setupExpress() {

    app.use(cors({origin:true})); // <- posar abans de definir rutes

    //pàgina principal
    app.route("/").get(root);

    //recuperar tots els cursos de la base de dades.
    app.route("/api/courses").get(getAllCourses);



    app.use(defaultErrorHandler); // <- molt important que estigui al final!
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
        logger.info(`HTTP REST API Server is now running at http://localhost:${port}`);
    });
}

//iniciar la connexió amb la base de dades
AppDataSource.initialize()
    //Si la connexió s'estableix correctament
    .then(() => {
        logger.info(`The datasource has been initialized successfully.`);
        setupExpress();
        startServer();
    })
    //Si hi ha algun error amb la connexió
    .catch(err => {
        logger.error(`Error during datasource initialization.`, err);
        process.exit(1);
    })