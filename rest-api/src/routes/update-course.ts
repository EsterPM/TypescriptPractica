import {NextFunction, Request, Response} from "express";
import {logger} from "../logger";
import {isInteger} from "../utils";
import {AppDataSource} from "../data-source";
import {Course} from "../models/course";

/*
*
* curl -X PATCH http://localhost:9000/api/courses/76 -H "Content-Type:application/json" -d '{"title":"Typescript Bootcamp v2"}'
*
**/

export async function updateCourse(
    request: Request, response: Response, next:NextFunction) {

    try {

        logger.debug(`Called updateCourse()`);

        const courseId = request.params.courseId,
              changes = request.body; //Es recuperen les dades que es volen actualitzar (en format JSON) des del cos de la petició

        if (!isInteger(courseId)) {
            throw `Invalid course id ${courseId}`;
        }

        await AppDataSource
            .createQueryBuilder() //Crea una consulta SQL dinàmica.
            .update(Course)
            .set(changes) //Estableix els canvis a aplicar
            .where("id = :courseId", {courseId})
            .execute(); //Executa la consulta a la base de dades.

        response.status(200).json({
            message: `Course ${courseId} was updated successfully.`
        });

    }
    catch (error) {
        logger.error(`Error calling updateCourse()`);
        return next(error);
    }

}