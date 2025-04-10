var _a, _b, _c;
//null = és fa servir quan vols deixar algo buit a proposit. 
var title = null;
//undefined = quan el valor encara no ha estat asignat. 
var title2;
console.log("Title = " + title);
if (!title) {
    console.log("The value of title is not known yet.");
}
var course = {};
//?? si el valor es null o undefined torna el valor de la dreta.
var title3 = (_b = (_a = course === null || course === void 0 ? void 0 : course.textFields) === null || _a === void 0 ? void 0 : _a.title) !== null && _b !== void 0 ? _b : "No title found";
console.log(title3);
//operador de "encadenament opcional" (?.)
// Si 'course' o 'course.textFields' és null o undefined, no donarà error.
//equival a: if (course && course.textFields && course.textFields.title)
if ((_c = course === null || course === void 0 ? void 0 : course.textFields) === null || _c === void 0 ? void 0 : _c.title) {
    console.log("The title is " + course.textFields.title);
}
