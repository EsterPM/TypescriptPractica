/*El mètode getElementById pot retornar un HTMLElement o null,
* però nosaltres sabem que aquest element és un <input>.
* Per això fem servir "as HTMLInputElement" per forçar el tipus.
*/
const input = document.getElementById("input") as HTMLInputElement;


/* Ara podem accedir a la propietat .value pròpia dels inputs.
* Sense l'assertion, TypeScript donaria error perquè no sap
* si l'element realment és un input.
*/
input.value;

//Només si estem 100% segurs del tipus