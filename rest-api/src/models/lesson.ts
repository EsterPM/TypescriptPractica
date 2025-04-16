import {Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";
import { Course } from "./course";
import {JoinColumn} from "typeorm";

@Entity({
    name: "LESSONS"
})
export class Lesson {

    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    title:string;

    @Column()
    duration:string;

    @Column()
    seqNo: number;

    //moltes lliçons (Lesson) poden pertànyer a un mateix curs (Course)
    @ManyToOne(() => Course, course => course.lessons)  //busca una propietat lessons dins de la classe Course
    //tindrà una columna courseId, que serà la clau forana que apunta a Course.id
    @JoinColumn({
        name: "courseId"
    })
    course: Course;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    lastUpdatedAt: Date;
}