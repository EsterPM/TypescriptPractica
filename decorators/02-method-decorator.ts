export enum LoggingLevel {
    ERROR,
    INFO,
    WARN,
    DEBUG,
    TRACE
}

//només els logs amb nivell ERROR o INFO s'imprimiran.
const appMaxLoggingLevel = LoggingLevel.INFO;


//Només fa log si el nivell que li passes és inferior o igual a appMaxLoggingLevel
export function Log(level: LoggingLevel): MethodDecorator {

    console.log(`Applying @Log Decorator`);

    return (target: any, propertyKey: string,
            descriptor: PropertyDescriptor) => {

        const originalFunction = descriptor.value;

        descriptor.value = function(...args: any[])  {

            if (level <= appMaxLoggingLevel) {
                console.log(`>> Log: ${propertyKey}, ${JSON.stringify(args)}`);
            }

            originalFunction.apply(this, args);
        }

    }
}

//Imprimeix el moment d'inici i final de la funció.
export function Perf():MethodDecorator {

    return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {

        const originalFunction:Function = descriptor.value;

        descriptor.value = function(...args:any[]) {

            console.log(`started at ${new Date().getTime()}`);

            originalFunction.apply(this,args);

            console.log(`ended at ${new Date().getTime()}`);
        };

    }

}