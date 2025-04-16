import * as dotenv from "dotenv";

const result = dotenv.config();

import "reflect-metadata";

//dades de prova
import {COURSES} from "./db-data";
import {AppDataSource} from "../data-source";
import { Course } from "./course";
//permet crear un objecte amb totes les propietats opcionals d'una entitat.
import {DeepPartial} from "typeorm";
import {Lesson} from "./lesson";


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