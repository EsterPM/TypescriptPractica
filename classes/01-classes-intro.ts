class Course {

    //Es poden definir les propietats directament dins el constructor.
    constructor(
        public id:string,
        private title:string,
        private price:number,
        private subtitle = "",
        private creationDt = new Date(2000,1,1)
    ) {
        //Al definir-les al constructor no és necesari this.id
        //Les inicialitza amb el valor que rep com a parametre. 
    }

    get age() {
        const ageInMs = new Date().getTime() - this.creationDt.getTime();

        return Math.round(ageInMs / 1000 / 60 / 24);
    }
}