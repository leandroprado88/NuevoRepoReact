import NavBar from './components/NavBar/NavBar';
import ItemList from './components/ItemListContainer/ItemList';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/Detalle/ItemDetailContainer';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import { CartContext} from './components/Context/CartContext';


function App() {

    return (
        <CartContext.Provider value={{}}>
        <BrowserRouter>
        
           <NavBar />
            <ItemList />
            <Routes>
                <Route exact path="/" element={<ItemListContainer />} />
                <Route path="categoria/:catIdParams" element={<ItemListContainer />} />
                <Route path="item/:itemIdParams" element={<ItemDetailContainer />} />
            </Routes>

        </BrowserRouter>
        </CartContext.Provider>
    );
    }



export default App;


