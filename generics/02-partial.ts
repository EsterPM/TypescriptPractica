export interface Course {
    title:string;
    subtitle:string;
    lessonsCount: number;
}

//converteix totes les propietats de l'objecte Course en opcionals
export function updateCourse(
    courseId:string, update: Partial<Course>) {

}


//llavors pots modificar només algunes coses del objecte, però quan creas el objecte et demana tot. 
updateCourse("1", {
    title: "New version of title"
});

updateCourse("1", {
    subtitle: "New version of subtitle"
});

updateCourse("1", {
    title: "New version of title",
    lessonsCount: 100
});