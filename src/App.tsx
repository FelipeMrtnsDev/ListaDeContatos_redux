import AddButton from './components/AddButton';
import Header from './containers/Header';
import EstiloGlobal, { Container } from './styles';
import { Provider } from 'react-redux';
import store from './store';
import ListaDeContatos from './containers/ListaDeContatos';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home';
import path from 'path';
import NovoContato from './pages/NovoContato';

const rotas = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/novo',
    element: <NovoContato />
  }
])

function App() {
  return (
    <Provider store={store}>
      <EstiloGlobal />
      <Container>
        <RouterProvider router={rotas} />
      </Container>
    </Provider>
  );
}

export default App;
