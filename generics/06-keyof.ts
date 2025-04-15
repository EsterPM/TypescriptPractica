const course: Course = {
    title: "Typescript Bootcamp",
    subtitle: "Learn the language, build practical projects",
    lessonsCount: 100
}

//Equivalent a fer: type CourseKeys = "title" | "subtitle" | "lessonsCount";
//limita el segon paràmetre (K) perquè només pugui ser una propietat vàlida de l'objecte.
type CourseKeys = keyof Course;

//K és una propietat d'aquest objecte (T)
export function extractProperty<T, K extends keyof T>(data: T, property:K) {
    return data[property];
}

//Ts sap exactament quin tipus tindrà el valor retornat
const val = extractProperty(course, "lessonsCount"); //number
const val2 = extractProperty(course, "title"); //string

//const error = extractProperty(course, "patata"); 