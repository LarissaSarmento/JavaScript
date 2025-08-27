class Curso{
    canal = null
    curso = null
    constructor(canal:any, curso:any){
        this.canal = canal;
        this.curso = curso;
    }
}
let c1 = new Curso('CFBCursos', 'TypeScript');
console.log(c1.canal);
console.log(c1.curso);

// Para criar o tsconfig, usei o comando no cmd daqui: tsc --init, isso é feito para não precisar ficar compilando o ts para JS manualmente