//Els Generics permeten que les funcions, classes o estructures de dades siguin flexibles però tipades.

const numbers = new Array<number>();

numbers.push(10);
//numbers.push("hola"); 


const promise = new Promise<string>((resolve, reject) => {

    resolve("Hello World"); //Només pot ser string

});

promise.then(val => {
    // val és automàticament de tipus string
})