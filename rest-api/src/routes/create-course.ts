import { NextFunction, Request, Response } from "express";
import { logger } from "../logger";
import { AppDataSource } from "../data-source";
import { Course } from "../models/course";

/*
*
* curl -X POST http://localhost:9000/api/courses -H "Content-Type:application/json" -d '{"url": "firebase-bootcamp", "title": "Firebase Bootcamp", "iconUrl": "https://angular-university.s3-us-west-1.amazonaws.com/course-images/firebase-course-1.jpg","longDescription": "Complete guided tour to the Firebase ecosystem.", "category": "BEGINNER"}'
*
* {"url": "firebase-bootcamp", "title": "Firebase Bootcamp", "iconUrl": "https://angular-university.s3-us-west-1.amazonaws.com/course-images/firebase-course-1.jpg","longDescription": "Complete guided tour to the Firebase ecosystem.", "category": "BEGINNER"}
*
* */

export async function createCourse(
    request: Request, response: Response, next: NextFunction) {

    try {

        logger.debug(`Called createCourse()`);

        //Comprova que hi hagi dades rebudes.
        const data = request.body;
        if (!data) {
            throw `No data available, cannot save course.`;
        }

        //S'utilitza una transacció per assegurar-se que tot el que es fa dins d'aquest bloc es fa de cop, o no es fa res si hi ha error
        const course = await AppDataSource.manager.transaction(
            "REPEATABLE READ", //evita que altres operacions canviïn dades llegides durant la transacció
            async (transactionalEntityManager) => {

                const repository = transactionalEntityManager.getRepository(Course);

                //busca quin és el número més alt de seqNo per posar el següent.
                const result = await repository
                    .createQueryBuilder("courses")
                    .select("MAX(courses.seqNo)", "max")
                    .getRawOne();

                //Crear i guardar el nou curs
                const course = repository
                    .create({
                        ...data,
                        seqNo: (result?.max ?? 0) + 1
                    });

                await repository.save(course);

                return course;
            }
        );

        response.status(200).json({ course });

    }
    catch (error) {
        logger.error(`Error calling createCourse()`);
        return next(error);
    }
}