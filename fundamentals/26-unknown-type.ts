//Tots dos permeten assignar qualsevol valor, però unknown és més segur.

let anyValue: any;
anyValue = true;
anyValue = 10;
anyValue = "Hello World";
anyValue = [];
anyValue = {};
anyValue = null;
anyValue = undefined;

let value1: unknown = anyValue;
let value2: any = anyValue;
let value3: boolean = anyValue;
let value4: number = anyValue;
let value5: string = anyValue;
let value6: object = anyValue;
let value7: any[] = anyValue;
let value8: Function = anyValue;


let unknownValue: unknown;
unknownValue = true;
unknownValue = 10;
unknownValue = "Hello World";
unknownValue = [];
unknownValue = {};
unknownValue = null;
unknownValue = undefined;

//no pots assignar-lo directament a variables d'altres tipus
let value10: unknown = unknownValue;
let value11: any = unknownValue;
//let value12: boolean = unknownValue;
//let value13: number = unknownValue;

//Només pots fer-ho després de comprovar el tipus
if (typeof unknownValue == "string") {

    let value14: string = unknownValue;
}

// let value14: string = unknownValue;
// let value15: object = unknownValue;
// let value16: any[] = unknownValue;
// let value17: Function = unknownValue;


//ANY: Quan no vols o no pots definir el tipus
/*
* Estàs afegint TypeScript en un projecte gran i no vols encara tipar-ho tot.
* Quan reps dades d'un JSON o una API on no tens control del tipus.
* Estàs desenvolupant ràpid, i vols provar coses abans de posar tipatges més estrictes.
*/


//UNKNOWN: Quan no saps el tipus, però vols control
/*
* Si una funció pot rebre qualsevol valor.
* Treballar amb JSON
* Evites errors al forçar la comprovació del tipus abans d'utilitzar-lo.
*/