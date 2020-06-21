//File System
const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite = 10) => {
    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base * i }`.blue);
    }
}



let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`La base '${base}' no es un número. Corríjalo, por favor.`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += (`${base} * ${i} = ${base * i } \n`);
        }

        //Escribir de forma persistente en un fichero con WriteFile

        fs.writeFile(`tablas/tabla-del-${base}-al-${limite}.txt`.green, data, (err) => {
            if (err) reject(err)
            else
                resolve(`tablas/tabla-del-${base}-al-${limite}.txt`)
        });

    })
}

module.exports = {
    crearArchivo,
    listarTabla
}