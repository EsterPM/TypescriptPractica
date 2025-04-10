const courseName = "Typescript Bootcamp";

if (courseName) {
    const subtitle = "Learn...";
    printCourseName(courseName);
}

//Es fan servir :string com anotacions per saber quin tipus es. 
function printCourseName(name :string) {
    console.log("The name is " + name.toUpperCase());
}