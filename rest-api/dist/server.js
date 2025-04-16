"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//serveix per llegir variables d'entorn des d'un fitxer .env
var dotenv = require("dotenv");
//Amb dotenv.config() pots accedir a aquestes variables a través de process.env.PORT
var result = dotenv.config();
if (result.error) {
    console.log("Error loading environment variables, aborting.");
    //para l'execució del programa
    process.exit(1);
}
console.log(process.env.PORT);
var express = require("express");
var root_1 = require("./routes/root");
var utils_1 = require("./utils");
var logger_1 = require("./logger");
var data_source_1 = require("./data-source");
//Aquesta constant app representa el nostre servidor web.
var app = express();
//configurar les rutes del servidor
function setupExpress() {
    //pàgina principal
    app.route("/").get(root_1.root);
}
//iniciar el servidor i escoltar peticions.
function startServer() {
    var port;
    //Port desde l'arxiu .env
    var portEnv = process.env.PORT, 
    //conté els arguments passats des de la línia de comandes quan s'executa el script.
    portArg = process.argv[2];
    //inInteger funció de utils.ts
    if ((0, utils_1.isInteger)(portEnv)) {
        port = parseInt(portEnv);
    }
    if (!port && (0, utils_1.isInteger)(portArg)) {
        port = parseInt(portArg);
    }
    //Si port no s'ha definit, es farà servir el port per defecte
    if (!port) {
        port = 9000;
    }
    app.listen(port, function () {
        logger_1.logger.info("HTTP REST API Server is now running at http://localhost:".concat(port));
    });
}
//iniciar la connexió amb la base de dades
data_source_1.AppDataSource.initialize()
    //Si la connexió s'estableix correctament
    .then(function () {
    logger_1.logger.info("The datasource has been initialized successfully.");
    setupExpress();
    startServer();
})
    //Si hi ha algun error amb la connexió
    .catch(function (err) {
    logger_1.logger.error("Error during datasource initialization.", err);
    process.exit(1);
});
