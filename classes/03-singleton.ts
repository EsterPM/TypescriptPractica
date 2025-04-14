//per evitar duplicar recursos, com connexions, gestors o configuracions.
//Exemple: accés a BD, logging, etc.

export class CoursesService {

    //Aquesta variable estàtica és compartida per totes les crides.
    private static INSTANCE: CoursesService;

    //impedeix fer new CoursesService() des de fora de la classe.
    private constructor() {
        console.log(`The CoursesService was initialized.`);
    }

    static instance() {
        if (!CoursesService.INSTANCE) {
            CoursesService.INSTANCE = new CoursesService();
        }
        return CoursesService.INSTANCE;
    }

}



/*Un Singleton és un únic objecte que es crea una sola vegada, 
però pot tenir diferents propietats en funció de les accions que faci 
o de les dades que emmagatzemi durant l'execució del programa.*/

/*totes les referències a aquest objecte apunten al mateix lloc de memòria (aquesta "instància"), 
així que sempre que utilitzis aquest objecte, tindrà les mateixes dades (o les dades actualitzades si algú les ha modificat).*/