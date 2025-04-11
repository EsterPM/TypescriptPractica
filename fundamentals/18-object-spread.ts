let course = {
    title: "Hello",
    subtitle: "sub...",
    stats: {
        lessonsCount: 10
    }
};


//Copiar l'objecte i els seus futurs canvis. (Com una sombra)
const newCourse = {...course};

console.log(newCourse);

//Modifiquem en l'objecte original i es modifica també en el nou. 
course.stats.lessonsCount = 100;
console.log(newCourse);