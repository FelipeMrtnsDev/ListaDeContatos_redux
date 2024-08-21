import * as S from './styles'
import ContatosClass from '../../models/Contatos'
import { useDispatch } from 'react-redux'
import { remover, editar } from '../../store/reducer/contatos'
import { useState, useEffect } from 'react'



type Props = ContatosClass

const Contato = ({id, nome: nomeOriginal, email: emailOriginal, numero: numeroOriginal}: Props) => {
    const dispatch = useDispatch()
    const [estaEditando, setEstaEditando] = useState(false)

    const [ nome, setNome ] = useState(nomeOriginal) 
    const [ email, setEmail ] = useState(emailOriginal)
    const [ numero, setNumero ] = useState(numeroOriginal)

    useEffect(() => {
        if (nomeOriginal.length > 0) {
            setNome(nomeOriginal)
        }
    }, [nomeOriginal])

    function cancelarEdicao() {
        setEstaEditando(false)
        setNome(nomeOriginal)
        setEmail(emailOriginal)
        setNumero(numeroOriginal)
    }

    return(
        <S.Container>
            <div>
                <S.Nome value={nome} disabled={!estaEditando} onChange={(evento) => setNome(evento.target.value)}/>
                <S.Lista>
                    <S.ListItem>Email: <S.Email value={email} disabled={!estaEditando} onChange={(e) => setEmail((e.target.value))} /></S.ListItem>
                    <S.ListItem>Telefone:<S.Numero value={numero} disabled={!estaEditando} onChange={(e) => setNumero(Number(e.target.value))}/></S.ListItem>
                </S.Lista>
                <div>
                    {estaEditando ? (
                        <>
                            <S.CancelButton onClick={cancelarEdicao}>Cancelar</S.CancelButton>
                            <S.SaveButton onClick={() => {
                                dispatch(editar({nome, numero, email, id}))
                                setEstaEditando(false)
                            }}>Salvar</S.SaveButton>
                        </>
                    ) : (
                        <>
                            <S.EditButton onClick={() => setEstaEditando(true)}>Editar</S.EditButton>
                            <S.RemoveButton onClick={() => dispatch(remover(id))} >Remover</S.RemoveButton>
                        </>
                    )}
                </div>
            </div>
        </S.Container>
    ) 
}

export default Contato