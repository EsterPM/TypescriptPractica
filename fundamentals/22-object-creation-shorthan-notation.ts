
interface Course {
    title:string,
    subtitle:string,
    lessonsCount:number
};


//Quan tens variables amb els mateixos noms que les propietats de l'objecte, pots estalviar-te repetir "clave: valor" i només posar el nom una vegada.
const title = "Hello",
    subtitle = "Sub...",
    lessonsCount = 10;

//Forma curta (shorthand notation)
const course: Course = {
    title,
    subtitle,
    lessonsCount
};


//Forma llarga:
const courseL: Course = {
    title: title,
    subtitle: subtitle,
    lessonsCount: lessonsCount
};