import {NextFunction, Request, Response} from "express";
import {logger} from "../logger";
import {isInteger} from "../utils";
import {AppDataSource} from "../data-source";
import {Lesson} from "../models/lesson";


//serveix per agafar les lliçons del curs amb ID courseId, paginades.
export async function findLessonsForCourse(
    request: Request, response: Response, next:NextFunction) {

    try {

        logger.debug(`Called findLessonsForCourse()`);

        const  courseId = request.params.courseId,
                query = request.query as any, // tots els valors després del ? de la url en forma d'objecte
                pageNumber = query?.pageNumber ?? "0", //si no l'envia el client, per defecte és "0"
                pageSize = query?.pageSize ?? "3";

        //Validacions        
        if (!isInteger(courseId)) {
            throw `Invalid course id ${courseId}`;
        }

        if (!isInteger(pageNumber)) {
            throw `Invalid pageNumber ${pageNumber}`;
        }

        if (!isInteger(pageSize)) {
            throw `Invalid pageSize ${pageSize}`;
        }


        const lessons = await AppDataSource
            .getRepository(Lesson)
            .createQueryBuilder("lessons")
            .where("lessons.courseId = :courseId", {courseId})
            .orderBy("lessons.seqNo")
            .skip(pageNumber * pageSize) //Apliquem la paginació
            .take(pageSize)
            .getMany();

        response.status(200).json({lessons});

    }
    catch(error) {
        logger.error(`Error calling findLessonsForCourse()`);
        return next(error);
    }

}