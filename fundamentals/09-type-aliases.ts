//Definir els valors posibles amb type, per no repetir codi. 
type CourseStatus = "draft" | "published" | "archived";

let courseStatus: CourseStatus = "draft";
let newStatus: CourseStatus = "published";


//Amb objecte perque no hi pugui haber error de tipus. 
type Course = {
    title:string,
    subtitle:string,
    lessonsCount:number
};

let course: Course = {
    title: "Hello",
    subtitle: "sub",
    lessonsCount: 10
};