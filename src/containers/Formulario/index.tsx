import { FormEvent, useState } from "react"
import * as S from './styles'
import Contato from "../../models/Contatos"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { adicionarContato } from "../../store/reducer/contatos"

function Formulario() {
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [numero, setNumero] = useState(0)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    let id = 4

    const cadastrarContato = (evento: FormEvent) => {
        evento.preventDefault()
        const novoContato = new Contato(
            id++,
            nome,
            email,
            numero
        )
        dispatch(adicionarContato(novoContato))
        navigate('/')

    }

    return(
        <S.MainContainer onSubmit={cadastrarContato}>
            <h2>Crie um novo contato</h2>
            <label htmlFor="nome">Nome</label>
            <S.Informacoes onChange={(evento) => setNome(evento.target.value)} required name="nome" type="text" />
            <label htmlFor="email">Email</label>
            <S.Informacoes onChange={(evento) => setEmail(evento.target.value)} required name="email" type="email" />
            <label htmlFor="numero">Numero</label>
            <S.Informacoes onChange={(evento) => setNumero(parseInt(evento.target.value))} required name="numero" type="tel" />
            <S.AdicionarContato type="submit">Cadastrar</S.AdicionarContato>
        </S.MainContainer>
    )
}

export default Formulario