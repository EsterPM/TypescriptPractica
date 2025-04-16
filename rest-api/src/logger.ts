import * as winston from "winston";

//Creació del logger
export const logger = winston.createLogger({
    //Defineix el nivell mínim de logs que es registraran (per ex: "info", "error", "debug"...). Ve de l'arxiu .env.
    level: process.env.LOGGER_LEVEL,

    //Indica que el log s'escriurà en format JSON, amb 4 espais d'identació
    format: winston.format.json({
        space: 4
    }),

    //llocs on Winston envia els logs
    transports: [
        new winston.transports.File({
            filename: "logs/all.log"
        }),
        new winston.transports.File({
            filename: "logs/error.log",
            level: "error"
        })
    ]
});

//Si no estàs en production, també mostra els logs a la consola
if (process.env.NODE_ENV != "production") {
    logger.add(new winston.transports.Console({
        format: winston.format.simple()
    }));
}