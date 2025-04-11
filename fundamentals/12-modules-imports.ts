import {PAGE_SIZE, COURSE} from "./12-modules-exports";

const pageSize = PAGE_SIZE;


//Part 14
//Si importem desde index no fa falta posar tot el path
import {Course, loadAllCourses, saveCourse} from "./14-module-reexports";


//Part15
//Importa el export per defecte (default).
//Es pot posar cualsevol nom, però millor el mateix. 
import printCourse from "./15-default-exports";
printCourse({});

//S'importa tot el que no sigui default en un objecte anomenat constants.
import * as constants from "./15-default-exports";
constants.COURSE_TOTAL;