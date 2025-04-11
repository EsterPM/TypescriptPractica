//La variable pot tenir dos tipus. No es fa servir amb aquests dos tipus. 
let uniqueId: number | string = 1000;
uniqueId = "201e72bb";
const keys: (number | string) [] = [1000, "Hello"];


//Es fa servir amb null per si el valor que arriba de la bd pot ser null. 
let courseId: number | null = 1000;
courseId = null;