class Course {

    //variables compartida entre totes les instàncies.
    private static TOTAL_COURSES = 0;
    //Constant
    static readonly TYPESCRIPT_TITLE = "Typescript Bootcamp"; //No es pot modificar

    //Es poden definir les propietats directament dins el constructor.
    constructor(
        public id:string,
        //Al constructor no pots fer servir title perquè entraria en conflicte amb el set.
        private _title:string,
        private price:number,
        //Al assignar un valor pots crear un nou objete sense pasar aquest paramentres
        //Es com si tinguesis mes d'un constructor en 1 (en ts no es pot tenir + 1)
        private subtitle = "",
        private creationDt = new Date(2000,1,1)
        // private readonly title:string ---> no es pot modificar ni dins ni fora de la class. 
    ) {
        //Al definir-les al constructor no és necesari this.id
        //Les inicialitza amb el valor que rep com a parametre. 

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
}


//const typescript = new Course(Course.TYPESCRIPT_TITLE, 100);

//console.log(typescript.title);

