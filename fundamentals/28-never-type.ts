//Es fa servir per detectar casos que no haurien de passar mai.

let anyValue:any;

//let neverValue : never = undefined;

//neverValue["property"] = 10;

type CourseStatus = "draft" | "published" | "unpublished";

let courseStatus : CourseStatus = "draft";

if (courseStatus == "draft") {

}
else if (courseStatus == "published") {

}
else if (courseStatus == "unpublished") {

}
//Aquest else teòricament no hauria d'executar-se mai, perquè ja s'han cobert tots els valors possibles.
//Si en un futur s'afegeix un valor, es pot controlar perque ts t'avisa que falta un else if. 
else {
    unexpectedError(courseStatus);
}

//El value: never li diu a TypeScript:
//Si estàs passant un valor aquí, és un error perquè aquest valor mai hauria d'existir
function unexpectedError(value:never) {
    throw new Error(`Unexpected value: ${value}`);
}

//es fa servir am enum i switch/case 