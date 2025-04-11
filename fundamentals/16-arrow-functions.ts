function saveCourse(course, callback: Function) {

    this.course = course;

    // Amb una FUNCIÓ FLETXA, el 'this' es manté igual al de l'entorn exterior
    //el this pot canviar si uses una funció normal i no donar el resultat que esperas. 
    setTimeout(() => {
        callback(this.course?.title ?? "unknown course");
    }, 1000);
}


//Guarda la funció a una constant 
const cb = (title:string) => console.log("Save successful", title);


saveCourse({title:"Hello"}, cb);


/* Funcio flecha:
* 
* Per passar una callback ràpida com a 
* parametres de setTimeout, map, filter...
* 
* Funcions anonimes.
* 
* Funció que només imprimeix una resposta.
* */

//Una callback és una funció que es passa com a paràmetre a una altra funció.