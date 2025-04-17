import {NextFunction, Request, Response} from "express";
import {logger} from "../logger";


//s'activa quan alguna cosa peta dins la teva app
export function defaultErrorHandler(
    err, request: Request, response: Response, next:NextFunction) {

    logger.error(`Default error handler triggered; reason: `, err);

    //Comprova si ja s'ha començat a enviar una resposta al client
    if (response.headersSent) {
        logger.error(`Response was already being written, delegating to built-in Express error handler.`);
        return next(err);
    }

    //Si no s'havia enviat resposta encara
    response.status(500).json({
       status: "error",
       message: "Default error handling triggered, check logs."
    });

}