interface Course {
    title:string;
    subtitle: string;
    lessonsCount:number;
}

//definir el tipus de funció que esperes per evitar errors, ja que ts t'avisa.
type CreateCourse = (title:string, subtitle:string, lessonsCount:number) => Course;

type OnCourseCreated = (course: Course) => void;


//Millora la llegibilitat del codi (reutilitzar tipus de funció en diferents llocs).
const createCourse = (title:string, subtitle:string,
                      lessonsCount:number, callback: OnCourseCreated) => {

    console.log(` Creating course with Title: ${title}, 
    Subtitle: ${subtitle} lessons count: ${lessonsCount}`);

    const course = {
        title,
        subtitle,
        lessonsCount
    };

    callback(course);

    return course;
}