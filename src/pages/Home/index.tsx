import AddButton from "../../components/AddButton"
import Header from "../../containers/Header"
import ListaDeContatos from "../../containers/ListaDeContatos"

const Home = () => {
    return (
        <>
            <Header text="Lista de Contatos" />
            <ListaDeContatos />
            <AddButton />
        </>
    )
}

export default Home 