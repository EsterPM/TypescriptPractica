{
    "compilerOptions": {
        //es5 ya no se usa. 
        "target": "es5"  //Compatible con..
        
        //On estan els arxius font
        "rootDir": "src",
        
        //On posa els arxius compilats, perque no estiguin tots barrejats
        "outDir": "dist",
        
        //cómo importas/exportas cosas entre archivos (tiene diferentes valores)
        "module": "CommonJS",
        
        //para evitar los caminos largos como ../../../
        "baseUrl": "src", //le dices que empiece desde esta carpeta

        //le dice a TypeScript que ignore la comprobación de tipos de los archivos .d.ts (archivos de declaración de tipos).
        //Los archivos .d.ts son los que describen los tipos de librerías externas (como las de node_modules).
        "skipLibCheck": true,

        //genera archivos .map que sirven para que las herramientas como el navegador o el depurador puedan:
            -Relacionar el código JavaScript compilado con el TypeScript original.
            -Hacer debugging directamente en el .ts, aunque lo que se esté ejecutando sea .js.
        "sourceMap": true,

        //Si hay errores, no generes ningún archivo .js
        "noEmitOnError": true,

        //Las variables no pueden tener null o undefined a menos que tú lo especifiques.
        "strictNullChecks": true,

        //Borra todos los comentarios del código generado js
        "removeComments": true


        //Opcional:
        //Si no poses res les agafa totes segons la versió target
        "lib": ["dom", "es5", "scripthost"]
    },

    //Arxius per compliar.
    //Pots fer servir include o exclude
    //"include": ["src/**/*.ts"]
    //"exclude": ["src/**/02*"]
    "files": [
        "src/01-why-typescript.ts"
    ]
}