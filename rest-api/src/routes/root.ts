import {Response, Request} from "express";

export function root(request: Request, response: Response) {

    //la resposta és OK (codi HTTP 200).
    //envia al navegador un tros de HTML com a resposta.
    response.status(200).send("<h1>Express server is up and running.</h1>");

}