const crypto = require("crypto");
const util = require("util");

const hashPassword = util.promisify(crypto.pbkdf2);

//comprova si una cadena de text (string) conté només números enters positius (sense signes ni decimals).
export function isInteger(input:string) {
    return input?.match(/^\d+$/) ?? false;
}

//per guardar contrasenyes de forma segura (mai en text pla).
export async function calculatePasswordHash(
    plainTextPassword:string,
    passwordSalt:string) {

     const passwordHash = await hashPassword(
        plainTextPassword,
        passwordSalt,
        1000,
        64,
        "sha512");

     return passwordHash.toString("hex");
}