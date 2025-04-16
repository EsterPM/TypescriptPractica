import {
    Column, CreateDateColumn, Entity, OneToMany,
    PrimaryGeneratedColumn, UpdateDateColumn
} from "typeorm";
import {Lesson} from "./lesson";


//Declara que aquesta classe representa una taula a la base de dades.
@Entity({
    name: "COURSES"  //nom de la taula
})
export class Course {

    //Clau primària autoincrementada
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    seqNo:number;

    @Column()
    url:string;

    @Column()
    title:string;

    @Column()
    iconUrl:string;

    @Column()
    longDescription:string;

    @Column()
    category: string;

    //un curs té moltes lliçons
    @OneToMany(() => Lesson, lesson => lesson.course)
    lessons: Lesson[];

    //guarda automàticament la data de creació de la fila
    @CreateDateColumn()
    createdAt: Date;

    //guarda automàticament la data de l'última actualització (cada cop que es fa un update).
    @UpdateDateColumn()
    lastUpdatedAt: Date;
}