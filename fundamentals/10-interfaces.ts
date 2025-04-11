interface Course {
    readonly title:string, //No es pot modificar el valor
    subtitle:string,
    lessonsCount?:number //No es obligatori
};

const course: Course = {
    title: "Hello",
    subtitle: "sub",
    lessonsCount: 10
};
//course.title = "Bye";


//La diferencia entre type e interface:
//es pot afegir noves propietats al objecte
interface Course {
    nou?: number
};

const otherCourse: Course = {
    title: "Hello",
    subtitle: "sub",
    nou: 0
};