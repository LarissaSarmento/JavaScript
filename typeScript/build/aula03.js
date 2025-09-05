class Curso {
    constructor(canal, curso) {
        this.canal = null;
        this.curso = null;
        this.canal = canal;
        this.curso = curso;
    }
}
let c1 = new Curso('CFBCursos', 'TypeScript');
console.log(c1.canal);
console.log(c1.curso);
// Para criar o tsconfig, usei o comando no cmd daqui: tsc --init, isso é feito para não precisar ficar compilando o ts para JS manualmente
