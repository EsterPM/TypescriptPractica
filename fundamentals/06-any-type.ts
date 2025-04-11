/*Fer servir any:
* importes dades externes i encara no tens clar el tipus
* proves ràpides
*/
let lessonsCount :any = 10;

let numbers : any[] = [10, 20, "hello", true];

//No és recomanable fer servir any perque perds la seguretat de ts
function printcourse(title:string, lessonsCount:number) {
    console.log(`title: ${title}, lessons count: ${lessonsCount}`);
}