//En aquest cas seria millor utilitzar l'objecte.
interface Course {
    title:string;
    subtitle: string;
    lessonsCount:number;
}

//Tuple: com un array però amb posicions amb tipus concrets i fixes
type CourseRecord = [string, string, number];

const courseRecord: CourseRecord =
    ["Typescript Bootcamp","Learn the language fundamentals", 100];

function createCourse(title:string, subtitle:string): CourseRecord {

    console.log(` Creating course with Title: ${title}, Subtitle: ${subtitle} `);

    return [title, subtitle, 100];
}


//Tuples són útils per retornar dades en funcions on no cal semàntica (com fer destructuring ràpid) o per optimitzar espai/memòria.
//Si vols accés per índex: [0], [1], [2]