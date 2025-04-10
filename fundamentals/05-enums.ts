enum CourseType {
    FREE = "FREE",  //Si no es posa = "free".. es mostren numeros en ordre a la consola
    PREMIUM = "PREMIUM", //Si es posa = 10 es mostren en ordre desde aquest num.
    PRIVATE = "PRIVATE",
    HIDDEN = "HIDDEN"
}

const course = {
    title: "Typescript Bootcamp",
    type: CourseType.HIDDEN
};

console.log(course);
// La consola mostra: { title: "Typescript Bootcamp", type: "HIDDEN" }