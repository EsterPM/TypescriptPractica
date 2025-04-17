import {NextFunction, Request, Response} from "express";
import {logger} from "../logger";
import {AppDataSource} from "../data-source";
import {User} from "../models/user";
import {calculatePasswordHash} from "../utils";
const crypto = require("crypto");

/**
 *
 * curl -X POST http://localhost:9000/api/users -H "Content-Type:application/json" -d '{"email": "new-user@angular-university.io", "pictureUrl":"https://avatars.githubusercontent.com/u/5454709", "password": "test123", "isAdmin": false}'
 *
 */
export async function createUser(
    request: Request, response: Response, next:NextFunction) {

    try {

        logger.debug(`Called createUser()`);
        const {email, pictureUrl, password, isAdmin} = request.body;

        //Comprova que hi hagi un correu i una contrasenya
        if (!email) {
            throw "Could not extract the email from the request, aborting.";
        }

        if (!password) {
            throw  "Could not extract the plain text password from the request, aborting."
        }

        const repository = AppDataSource.getRepository(User);


        //Comprova si ja existeix un usuari amb aquest email
        const user = await repository.createQueryBuilder("users")
            .where("email = :email", {email})
            .getOne();

        if (user) {
            const message = `User with email ${email} already exists, aborting.`;
            logger.error(message);
            response.status(500).json({message});
            return;
        }

        //Crea cadena aleatòria per fer més segura la contrasenya
        const passwordSalt = crypto.randomBytes(64).toString('hex'); 

        //Es calcula el passwordHash (hash de la contrasenya + salt)
        const passwordHash = await calculatePasswordHash(password, passwordSalt);

        //Crea i desa el nou usuari a la base de dades
        const newUser = repository.create({
            email,
            pictureUrl,
            isAdmin,
            passwordHash,
            passwordSalt
        });

        await AppDataSource.manager.save(newUser);

        logger.info(`User ${email} has been created.`);

        //Retorna resposta sense password
        response.status(200).json({
            email,
            pictureUrl,
            isAdmin
        });

    }
    catch (error) {
        logger.error(`Error calling createUser()`);
        return next(error);
    }
}