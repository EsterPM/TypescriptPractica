//especifica quines propietats i mètodes ha de tenir un objecte, però no conté la implementació

export interface HasId {
    id:string;
    printId();
}

//Iclou tot lo de HasId
export interface HasTitle extends HasId {
    title:string;
}