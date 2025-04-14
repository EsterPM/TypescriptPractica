import {HasId, HasTitle} from "./02-interfaces";

//No pots crear objectes de la classe abstracta per si sola

abstract class Course implements HasTitle {

    //variables compartida entre totes les instàncies.
    private static TOTAL_COURSES = 0;
    
    //Constant
    static readonly TYPESCRIPT_TITLE = "Typescript Bootcamp"; //No es pot modificar

    //Es poden definir les propietats directament dins el constructor.
    protected constructor(
        //Al venir de la interface ha de ser public
        public id:string,
        
        //Al constructor no pots fer servir title perquè entraria en conflicte amb el set.
        //No dona error amb protected perque no es title sino _title i tens el get i set que ja te title
        protected _title:string,
        
        //protected només poden ser accedides dins de la mateixa classe o en les subclasses.
        //Amb private el fill no pot accedir.
        protected price:number,
        
        //Al assignar un valor pots crear un nou objete sense pasar aquest paramentres
        //Es com si tinguesis mes d'un constructor en 1 (en ts no es pot tenir + 1)
        protected subtitle = "",
        protected creationDt = new Date(2000,1,1)
        
        // private readonly title:string ---> no es pot modificar ni dins ni fora de la class. 
    ) {
        //Al definir-les al constructor no és necesari this.id
        //Les inicialitza amb el valor que rep com a parametre. 

        this.validate();
        Course.TOTAL_COURSES++;
    }

    /* No pots fer this.title = ... dins del set title(...), 
    * perquè això cridaria el mateix setter de manera recursiva infinita
    * necessites una propietat diferent per emmagatzemar el valor. 
    * Normalment es posa amb _ davant
    */
    set title(newTitle:string) {
        if (!newTitle) {
            throw "Title cannot be empty";
        }

        this._title = newTitle;
    }

    get title() {
        return this._title;
    }

    get age() {
        const ageInMs = new Date().getTime() - this.creationDt.getTime();

        return Math.round(ageInMs / 1000 / 60 / 24);
    }


    /*
    * No cal crear un objecte de la classe per cridar la funcio: Classe.metode()
    * No pot accedir a this de l'objecte
    * Per tenir funcions de utilitat dins la classe
    */
    static printTitle(course: Course) {
        console.log(`The title of the course ${course.title}`)
    }

    //Amb protected pots cridar la funció des de la mateixa classe o des dels fills, però no des de fora.
    /*protected validate() {
        console.log(`Called Course validate()`);
    }*/

    //mètode sense implementació (abstract) que han de ser implementats per les subclasses
    protected abstract validate();

    
    //Obligatori perque ve de la interface. Ha de ser public
    printId() {
        console.log(`The course id is ${this.id}`);
    }
}


//Classe fill (o subclasse) hereta les propietats i mètodes de classe pare. 
//Això permet reutilitzar codi i afegir més funcionalitats a la classe fill sense haver de duplicar tot el codi de la classe pare.
class FreeCourse extends Course {

    constructor( id:string,
                 title:string,
                 subtitle = "",
                 creationDt = new Date(2000,1,1)) {

        //Cridem al constructor de la classe pare
        super(id, title, 0, subtitle, creationDt);

    }

    //Nou mètode de la classe fill que sobre posa al de la classe pare.
    protected validate() {
        console.log(`Called FreeCourse validate()`);
    }

}

//---No es pot instanciar una classe abstracta---
//const typescript = new Course(Course.TYPESCRIPT_TITLE, 100);
//console.log(typescript.title);


const angular = new FreeCourse("1", "Angular For Beginners");
console.log(angular);
