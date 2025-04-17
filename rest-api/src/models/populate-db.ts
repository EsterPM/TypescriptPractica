import * as dotenv from "dotenv";

const result = dotenv.config();

import "reflect-metadata";

//dades de prova
import { COURSES, USERS } from "./db-data";
import { AppDataSource } from "../data-source";
import { Course } from "./course";
//permet crear un objecte amb totes les propietats opcionals d'una entitat.
import { DeepPartial } from "typeorm";
import { Lesson } from "./lesson";
import { User } from "./user";
import { calculatePasswordHash } from "../utils";


async function populateDb() {

    await AppDataSource.initialize();

    console.log(`Database connection ready.`);

    //llista de cursos extrets de les dades d'exemple (COURSES)
    const courses = Object.values(COURSES) as DeepPartial<Course>[];

    //repositoris creats per gestionar les entitats
    const courseRepository = AppDataSource.getRepository(Course);
    const lessonsRepository = AppDataSource.getRepository(Lesson);

    //Inserció de cursos i lliçons
    for (let courseData of courses) {
        //Per cada curs, es crea un nou objecte
        console.log(`Inserting course ${courseData.title}`);
        const course = courseRepository.create(courseData);

        //s'inserta a la base de dades
        await courseRepository.save(course);

        for (let lessonData of courseData.lessons) {

            console.log(`Inserting lesson ${lessonData.title}`);

            const lesson = lessonsRepository.create(lessonData);

            lesson.course = course;

            await lessonsRepository.save(lesson);
        }

    }

    //Agafo tots els valors de l'objecte i els converteixo en un array.
    const users = Object.values(USERS) as any[];

    for (let userData of users) {

        console.log(`Inserting user: ${userData}`);

        const { email, pictureUrl, isAdmin, passwordSalt, plainTextPassword } = userData;

        //Crea un nou usuari
        const user = AppDataSource
            .getRepository(User)
            .create({
                email,
                pictureUrl,
                isAdmin,
                passwordSalt,
                passwordHash: await calculatePasswordHash(
                    plainTextPassword, passwordSalt)
            });

        //Guarda usuari a la base de dades.
        await AppDataSource.manager.save(user);

    }


    //es compta el nombre total de cursos i lliçons a la base de dades
    const totalCourses = await courseRepository
        .createQueryBuilder()
        .getCount();

    const totalLessons = await lessonsRepository
        .createQueryBuilder()
        .getCount();

    console.log(` Data Inserted - courses ${totalCourses}, lessons ${totalLessons}`);

}

populateDb()
    .then(() => {
        console.log(`Finished populating database, exiting!`);
        process.exit(0);
    })
    .catch(err => {
        console.error(`Error populating database.`, err);
    });