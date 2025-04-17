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
import {findCourseByUrl} from "./routes/find-course-by-url";
import {findLessonsForCourse} from "./routes/find-lessons-for-course";
import {updateCourse} from "./routes/update-course";
import {createCourse} from "./routes/create-course";
import {deleteCourseAndLessons} from "./routes/delete-course";
import {createUser} from "./routes/create-user";

//permet que el teu frontend pugui fer peticions HTTP (com GET, POST, etc.) al teu backend sense que el navegador bloquegi la sol·licitud.
const cors = require("cors");

//s'utilitza per analitzar el cos de les peticions HTTP i convertir-lo en un format que sigui fàcil de treballar per l'aplicació.
//Ara ja ve integrat amb express
const bodyParser = require("body-parser");

//Aquesta constant app representa el nostre servidor web.
const app = express();

//configurar les rutes del servidor
function setupExpress() {

    app.use(cors({origin:true})); // <- posar abans de definir rutes

    //Analitza el cos de les peticions en format JSON
    app.use(bodyParser.json()); 

    //pàgina principal
    app.route("/").get(root);

    //recuperar tots els cursos de la base de dades.
    app.route("/api/courses").get(getAllCourses);

    //buscar un curs concret a la base de dades segons la seva URL.
    app.route("/api/courses/:courseUrl").get(findCourseByUrl);

    //obtenir les lliçons d'un curs
    app.route("/api/courses/:courseId/lessons").get(findLessonsForCourse);

    app.route("/api/courses/:courseId").patch(updateCourse);

    app.route("/api/courses").post(createCourse);

    app.route("/api/courses/:courseId").delete(deleteCourseAndLessons);

    app.route("/api/users").post(createUser);

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