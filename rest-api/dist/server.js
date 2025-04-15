"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var root_1 = require("./routes/root");
//Aquesta constant app representa el nostre servidor web.
var app = express();
//configurar les rutes del servidor
function setupExpress() {
    //pàgina principal
    app.route("/").get(root_1.root);
}
//iniciar el servidor i escoltar peticions.
function startServer() {
    app.listen(9000, function () {
        console.log("HTTP REST API Server is now running at http://localhost:9000");
    });
}
setupExpress();
startServer();
