import {Course} from "./course-model";
import {loadAllCourses} from "./feature-1";
import {saveCourse} from "./feature-2";

//Reexportem per poder utilitzar tot
export {
    Course,
    loadAllCourses,
    saveCourse
};

//Fer servir el nom index.ts per no afegir tota la ruta de carpetas al importar. 