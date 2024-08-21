import { useSelector } from "react-redux"
import { RootReducer } from "../../store"
import Contato from "../../components/Contato"
import { Container } from "./styles"
import * as S from './styles'

const ListaDeContatos = () => {
    const { itens } = useSelector((state: RootReducer) => state.contatos)
    
    return(
        <Container>
            <S.ListaDeTarefas>
                {itens.map((c) => (
                    <li key={c.nome}>
                        <Contato email={c.email} nome={c.nome} numero={c.numero} id={c.id}/>
                    </li>
                ))}
            </S.ListaDeTarefas>
        </Container>
    )
}

export default ListaDeContatos