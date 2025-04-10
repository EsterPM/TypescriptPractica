//null = és fa servir quan vols deixar algo buit a proposit. 
let title: string | null = null;
//undefined = quan el valor encara no ha estat asignat. 
let title2: string; 

console.log("Title = " + title);
if (!title) {
    console.log("The value of title is not known yet.");
}



//EVITAR ERRORS amb valors nulls
//Definició del tipus. 
type Course = {
    textFields?: {
        title?: string;
    }
}
let course: Course = {};

//?? si el valor es null o undefined torna el valor de la dreta.
const title3 = course?.textFields?.title ?? "No title found";
console.log(title3);

//operador de "encadenament opcional" (?.)
// Si 'course' o 'course.textFields' és null o undefined, no donarà error.
//equival a: if (course && course.textFields && course.textFields.title)
if (course?.textFields?.title) {
    console.log(`The title is ${course.textFields.title}`);
} 