import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import Contato from "../../models/Contatos";

type ContatosState = {
    itens: Contato[]
}

const initialState: ContatosState = {
    itens: [
        {
            id: 1,
            nome: 'Jõao Souza',
            email: 'joaosouza@gmail.com',
            numero: 92985105408
        },
        {
            id: 2,
            nome: 'Felipe Martins de Souza',
            email: 'felipejdijd@gmail.com',
            numero: 92985405104
        },
        {
            id: 3,
            nome: 'Wellington Martins',
            email: 'wellington@gmail.com',
            numero: 92985103255
        }
    ]
}

const contatosSlice = createSlice({
    name: 'contatos',
    initialState,
    reducers: {
        remover: (state, action: PayloadAction<number>) => {
            state.itens = state.itens.filter((contato) => contato.id !== action.payload)
        },
        editar: (state, action: PayloadAction<Contato>) => {
                const indexDoContato = state.itens.findIndex((c) => (c.id = action.payload.id))

                if (indexDoContato >= 0) {
                    state.itens[indexDoContato] = action.payload
                }
        },
        adicionarContato: (state, action: PayloadAction<Contato>) => {
            const ContatoJaExiste = state.itens.find((contato) => contato.nome === action.payload.nome)
            const idJaExiste = state.itens.find((contato) => contato.id === action.payload.id) 

            if (idJaExiste) {
                state.itens.find((contato) => contato.id === action.payload.id++)
            }

            if (ContatoJaExiste) {
                alert("Já existe contato com esse nome")
            } else {
                state.itens.push(action.payload)
            }
        }
    }
})

export const { remover, editar, adicionarContato } = contatosSlice.actions

export default contatosSlice.reducer



