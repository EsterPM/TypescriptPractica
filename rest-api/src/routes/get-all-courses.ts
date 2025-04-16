import { Response, Request, NextFunction } from "express";
import { logger } from "../logger";
import { AppDataSource } from "../data-source";
import { Course } from "../models/course";

//Next serveix per continuar amb el següent middleware si tot va bé
export async function getAllCourses(
    request: Request, response: Response, next: NextFunction) {

    try {
        logger.debug(`Called getAllCourses()`, request["user"]); //imprimeix qui fa la petició (request["user"])

        //Consulta a la base de dades
        const courses = await AppDataSource
            .getRepository(Course)
            .createQueryBuilder("courses")
            //.leftJoinAndSelect("courses.lessons","LESSONS")  //Perque aparegui la llista de leccions també
            .orderBy("courses.seqNo")
            .getMany();

        //Envia un JSON amb tots els cursos obtinguts i codi de resposta 200 OK.    
        response.status(200).json({ courses });
    }
    catch (error) {
        logger.error(`Error calling getAllCourses()`);
        return next(error);
    }
}


//Un middleware és: Una funció que s'executa quan arriba una petició i pot fer coses abans d'enviar la resposta.