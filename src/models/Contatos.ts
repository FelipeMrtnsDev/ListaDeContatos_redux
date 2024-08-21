
class Contato {
    id: number
    nome: string
    email: string
    numero: number

    constructor(
        id: number,
        nome: string,
        email: string,
        numero: number
    ) {
        this.id = id
        this.nome = nome
        this.email = email
        this.numero = numero
    }
}

export default Contato