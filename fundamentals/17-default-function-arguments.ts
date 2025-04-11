//Pasar valors per defecte.
function printCourse(title = "TITLE", subtitle = "SUBTITLE", lessonsCount = 0) {
    console.log(`Title: ${title}, Subtitle: ${subtitle}, Lessons count: ${lessonsCount}`);
}

//Podem pasar tots els valors.
printCourse("Titulo", "Sub...", 10);

//Podem pasar només els que ens interesin. Els altres sortiran per defecte
printCourse("Titulo", "Sub...");

//No pasem valors sortiran per defecte. 
printCourse();