
//comprova si una cadena de text (string) conté només números enters positius (sense signes ni decimals).
export function isInteger(input:string) {
    return input?.match(/^\d+$/) ?? false;
}