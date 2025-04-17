import {NextFunction, Request, Response} from "express";
import {logger} from "../logger";
import {isInteger} from "../utils";
import {AppDataSource} from "../data-source";
import {Lesson} from "../models/lesson";
import {Course} from "../models/course";

//curl -X DELETE http://localhost:9000/api/courses/3

export async function deleteCourseAndLessons(
    request: Request, response: Response, next:NextFunction) {

    try {

        logger.debug(`Called deleteCourseAndLessons()`);

        const courseId = request.params.courseId;

        if (!isInteger(courseId)) {
            throw `Invalid courseId ${courseId}`;
        }

        //Si falla l'esborrat de les lliçons o del curs, no es fa res.
        await AppDataSource.manager.transaction(
            async (transactionalEntityManager) => {

                //Esborrar lliçons primer
                await transactionalEntityManager
                    .createQueryBuilder()
                    .delete()
                    .from(Lesson)
                    .where("courseId = :courseId", {courseId})
                    .execute();

                //Després esborrem el curs
                await transactionalEntityManager
                    .createQueryBuilder()
                    .delete()
                    .from(Course)
                    .where("id = :courseId",{courseId})
                    .execute();
            }
        );

        response.status(200).json({
            message: `Course deleted successfully ${courseId}`
        });

    }
    catch(error) {
        logger.error(`Error calling deleteCourseAndLessons()`);
        return next(error);
    }

}