class Course {

    //Es poden definir les propietats directament dins el constructor.
    constructor(
        public id:string,
        //Al constructor no pots fer servir title perquè entraria en conflicte amb el set.
        private _title:string,
        private price:number,
        private subtitle = "",
        private creationDt = new Date(2000,1,1)
        // private readonly title:string ---> no es pot modificar ni dins ni fora de la class. 
    ) {
        //Al definir-les al constructor no és necesari this.id
        //Les inicialitza amb el valor que rep com a parametre. 
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
}