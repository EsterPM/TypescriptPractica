interface Course {
    readonly title:string,
    subtitle:string,
    lessonsCount?:number
}

//objecte del qual no sabem el tipus (unknown), però sospitem que podria ser un Course.
const course: unknown = {
    title: "Typescript Bootcamp",
    subtitle: "Learn the language fundamentals, build practical projects",
    lessonsCount: 10
};

if (isCourse(course)) {
    console.log(course.title); //Ara TS sap que és un Course
}


//Un type predicate és una funció que comprova si un valor és d'un tipus determinat i li diu a TypeScript que, si retorna true, pot considerar que aquest valor és d'aquell tipus.
function isCourse(value: unknown): value is Course {

    const course = value as Course;

    return course?.title != null && course?.subtitle != null;
}


//Es fan servir per afegir seguretat de tipus quan estàs treballant amb valors de tipus desconegut