import {NextFunction, Request, Response} from "express";
import {logger} from "../logger";
const JWT_SECRET = process.env.JWT_SECRET;
const jwt = require("jsonwebtoken");

export function checkIfAuthenticated(
    request: Request, response: Response, next:NextFunction) {

    //obtenir el token del header de la petició
    const authJwtToken = request.headers.authorization;

    //Si no hi ha token
    if (!authJwtToken) {
        logger.info(`The authentication JWT is not present, access denied.`);
        response.sendStatus(403);
        return;
    }

    //Si el token és vàlid, es desen les dades de l'usuari al request i es permet l'accés. Si no, s'envia un error 403.
    checkJwtValidity(authJwtToken)
        .then(user => {

            logger.info(`Authentication JWT successfully decoded:`, user);
            request["user"] = user;

            next();
        })
        .catch(err => {
            logger.error(`Could not validate the authentication JWT, access denied.`, err);
            response.sendStatus(403);
        });
}


//comprova el token utilitzant la clau secreta (JWT_SECRET) i retorna l'objecte usuari que hi ha dins del token.
async function checkJwtValidity(authJwtToken:string) {

    const user = await jwt.verify(authJwtToken, JWT_SECRET);

    logger.info("Found user details in JWT:", user);

    return user;
}