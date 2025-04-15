import * as express from 'express';
import {root} from "./routes/root";

//Aquesta constant app representa el nostre servidor web.
const app = express();

//configurar les rutes del servidor
function setupExpress() {

    //pàgina principal
    app.route("/").get(root);
}

//iniciar el servidor i escoltar peticions.
function startServer() {
    app.listen(9000, () => {

        console.log(`HTTP REST API Server is now running at http://localhost:9000`);

    });
}

setupExpress();
startServer();