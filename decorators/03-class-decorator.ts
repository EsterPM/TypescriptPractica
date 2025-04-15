//Ningú podrà afegir mètodes a la classe ni modificar la seva estructura després de declarar-la.
export function SealClass(constructor: Function) {
    Object.seal(constructor); // Sella el constructor de la classe
    Object.seal(constructor.prototype); // Sella el prototipus de la classe
}


//Si es poden modificar.