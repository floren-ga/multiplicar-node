const options = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', options)
    .command('crear', 'Crea una tabla de mulitiplicar y la guarda en un fichero de texto', options)
    .help()
    .argv;

module.exports = {
    argv
}