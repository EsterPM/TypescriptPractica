interface Course {
    title:string,
    lessonsCount:number
};

const course1: Course = {
    title: "Hello",
    lessonsCount: 10

};

const course2: Course = {
    title: "Bye",
    lessonsCount: 20

};


//pots passar quants cursos vulguis a la funció, com a arguments individuals, i dins la funció es converteixen en un array automàticament.
function printCourses(message:string, ...courses: Course[]) {
    console.log(message);
    for (let course of courses) {
        console.log(course.title);
    }
}


//printCourses("Holi", [course1, course2]);

//Millor llegibilitat a la crida de la funció
//Pots pasar tots els cursos que vulguis.
//No tens array dins array.
printCourses("Holi", course1, course2);