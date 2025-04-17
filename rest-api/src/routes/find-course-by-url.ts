import {NextFunction, Request, Response} from "express";
import {logger} from "../logger";
import {AppDataSource} from "../data-source";
import {Course} from "../models/course";
import {Lesson} from "../models/lesson";


export async function findCourseByUrl(
    request: Request, response: Response, next:NextFunction) {

    try {

        logger.debug(`Called findCourseByUrl()`);

        const courseUrl = request.params.courseUrl;

        //Comprovem que existeixi la url
        if (!courseUrl) {
            throw `Could not extract the course url from the request.`;
        }

        //Busquem el curs a la base de dades
        const course = await AppDataSource
            .getRepository(Course)
            .findOneBy({
                url: courseUrl
            });

        //Si no trobem cap curs
        if (!course) {
            const message = `Could not find a course with url ${courseUrl}`;
            logger.error(message);
            response.status(404).json({message});
            return;
        }

        //Comptem les lliçons que té el curs
        const totalLessons = await AppDataSource
            .getRepository(Lesson)
            .createQueryBuilder("lessons")
            .where("lessons.courseId = :courseId", {
                courseId: course.id
            })
            .getCount()

        //Retornem la resposta
        response.status(200).json({
           course,
           totalLessons
        });


    }
    catch (error) {
        logger.error(`Error calling findCourseByUrl()`);
        return next(error);
    }

}