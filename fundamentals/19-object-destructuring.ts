interface Course {
    title:string,
    subtitle:string,
    lessonsCount:number
};

let course: Course = {
    title: "Hello",
    subtitle: "sub...",
    lessonsCount: 10

};


//
function printCourse(course:Course) {

    //Agafa title i subtitle del course (en variables amb el valor que tenen a course), i la resta de propietats les dins un nou objecte (other)
    const {title, subtitle, ...other} = course;

    console.log(title, subtitle, other.lessonsCount);
}


//Vols fer servir dos o tres dades per mostrar i les altres per guardarles o el que sigui (other)
//mes clar perque no has de posar course.title... a tots els camps. 