export class Animal {
    private nome: string
    private idade: number
    private cor: string

    constructor(nome: string, idade: number, cor: string) {
        this.nome = nome
        this.idade = idade
        this.cor = cor
    }

    public print () {
        console.log(`animal, nome é  ${this.nome}, sua idade é  ${this.idade} sua cor é ${this.cor} `)
    }
}
