import * as express from 'express';

//Aquesta constant app representa el nostre servidor web.
const app = express();

//configurar les rutes del servidor
function setupExpress() {

    //pàgina principal
    app.route("/").get(root);
}

//iniciar el servidor i escoltar peticions.
function startServer() {

}