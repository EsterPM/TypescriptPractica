//Number
var lessonsCount = 10;
var total = lessonsCount + 10;
console.log("total = ", total);
//String 
var title = "Typescript Bootcamp";
var subtitle = "Learn....";
var fullTitle = "Full title: " + title + ": " + subtitle;
console.log("Full title: " + fullTitle);
//Boolean
var published = true;
if (published) {
    console.log("OK");
}
//Anotacions de tipus
printCourse(title, subtitle, lessonsCount);
//Utilitzar on Typescriot no te ninguna informació del tipus de la variable (any)
function printCourse(title, subtitle, lesssonsCount) {
    var fullTitle = title + subtitle;
}
