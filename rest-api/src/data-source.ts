import {DataSource} from "typeorm";
import { Course } from "./models/course";
import { Lesson } from "./models/lesson";
import { User } from "./models/user";


//nova instància de connexió de TypeORM amb PostgreSQL
export const AppDataSource = new DataSource({
    type: "postgres",
    host: process.env.DB_HOST,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    port: parseInt(process.env.DB_PORT),
    database: process.env.DB_NAME,
    ssl: true,
    extra: {
        ssl : {
            rejectUnauthorized:false //No estàs verificant el certificat SSL del servidor
        }
      },
    entities: [
        Course,
        Lesson,
        User
    ],
    synchronize: true, //Això fa que TypeORM creï o actualitzi automàticament les taules en base a les entitats.
    logging:true //Mostra els logs de les operacions a consola
})