const someData = {
    title: "Typescript Bootcamp",
    subtitle: "Learn the language, build practical projects",
    lessonsCount: 100
}

const moreData = {
    seqNo: 10,
    price: 100
}

//Combina els objectes en un de nou. 
export function merge<T, U>(obj1: T, obj2: U) {
    return Object.assign(obj1, obj2) as (T & U); //copia les propietats d'obj2 dins obj1 (assign)
}

const merged = merge(someData, moreData);

console.log(merged.title); 
console.log(merged.price); 