"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.root = root;
function root(request, response) {
    //la resposta és OK (codi HTTP 200).
    //envia al navegador un tros de HTML com a resposta.
    response.status(200).send("<h1>Express server is up and running.</h1>");
}
