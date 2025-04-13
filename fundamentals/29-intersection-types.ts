interface HasId {
    id:string;
}
interface HasTitle {
    title:string;
    description:string;
}

//Per fusionar tipus
type Course = HasId & HasTitle;


//et permet reutilitzar tipus petits i crear-ne de més complexos