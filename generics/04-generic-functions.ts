interface Course {
    title:string;
    subtitle:string;
    lessonsCount: number;
}

//En vez de fer aquestes dos funcions. Fas una generica
export function freezeCourse(course:Course): Readonly<Course> {
    return Object.freeze(course);
}

function freezeLesson(lesson:Lesson): Readonly<Lesson> {
    return Object.freeze(lesson);
}
//--

//Funció generica
//T extends object -> restringeix que només pots passar-hi objectes
function freeze<T extends object>(input: T): Readonly<T> {
    return Object.freeze(input);
}


//Si has de reutilitzar l'objecte fer-ho així
//Defineixes el objecte
const course: Course = {
    title: "Typescript Bootcamp",
    subtitle: "Learn the language, build practical projects",
    lessonsCount: 100
}

//El pases a la funció generica
const frozenCourse = freeze(course);

// const frozenNumber = freeze("10");
//frozenCourse.title = "";

interface Lesson {
    title:string;
    seqNo:number;
}

//Si no l'has de fer servir més.
//També el pots pasar directament així. 
const frozenLesson = freeze({
    title: "Lesson Title",
    seqNo: 10
})