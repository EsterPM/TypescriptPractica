interface Course {
    title:string;
    subtitle:string;
    lessonsCount: number;
}


//converteix totes les propietats d'un objecte en només de lectura
function freezeCourse(course:Course): Readonly<Course> {
    return Object.freeze(course); //congela l'objecte en temps d'execució
}

const frozen = freezeCourse({
    title: "Typescript Bootcamp",
    subtitle: "Learn the language, build practical projects",
    lessonsCount: 100
});

//no es poden modificar un cop assignades.
//frozen.title = "";


//Quan vols retornar configuracions o constants que ningú hauria de modificar.