// pot treballar amb qualsevol tipus de dades
//K és el tipus de la clau, i V el tipus del valor
class KeyValue<K, V> {

    constructor(
        public readonly key: K,
        public readonly value: V) {
    }

    print() {
        console.log(`key = ${this.key} value = ${this.value}`);
    }
}


//Pots pasar qualsevol tipus de dades

const p1 = new KeyValue("1", 10); 
const val1 = p1.value; //number

const p2 = new KeyValue(2, "Hello World");
const val2 = p2.value; //string

const course: Course = {
    title: "Typescript Bootcamp",
    subtitle: "Learn the language, build practical projects",
    lessonsCount: 100
}

const p3 = new KeyValue("3", course);
const val3 = p3.value; //course