//Number
const lessonsCount = 10;
const total = lessonsCount + 10;
console.log("total = ", total);

//String 
let title = "Typescript Bootcamp";
let subtitle = "Learn....";
const fullTitle = `Full title: ${title}: ${subtitle}`;
console.log(`Full title: ${fullTitle}`);

//Boolean
const published = true;
if (published) {
    console.log("OK");
}

//Anotacions de tipus
printCourse(title, subtitle, lessonsCount);
//Utilitzar on Typescriot no te ninguna informació del tipus de la variable (any)
function printCourse(title:string, subtitle:string, lesssonsCount:number) {
    let fullTitle = title + subtitle;
}