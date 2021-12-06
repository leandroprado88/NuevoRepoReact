import NavBar from './components/NavBar/NavBar';
import ItemList from './components/ItemListContainer/ItemList';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/Detalle/ItemDetailContainer';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import CartContextProvider from './components/Context/CartContext';
import Cart from './components/Cart/Cart';


function App() {

    return (
        <CartContextProvider value={{}}>
        <BrowserRouter>
        
           <NavBar />
            <ItemList />
            <Routes>
                <Route exact path="/" element={<ItemListContainer />} />
                <Route path="categoria/:catIdParams" element={<ItemListContainer />} />
                <Route path="detalle/:itemIdParams" element={<ItemDetailContainer />} />
                <Route path="/cart" element={<Cart />} />
            </Routes>

        </BrowserRouter>
        </CartContextProvider>
    );
    }



export default App;


