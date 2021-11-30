import NavBar from './components/NavBar/NavBar';
import ItemList from './components/ItemListContainer/ItemList';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Detalle/ItemDetailContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";


function App() {

    return (
        <BrowserRouter>
        
           <NavBar />
            <ItemList />
            <Routes>
                <Route exact path="/" element={<ItemListContainer />} />
                <Route path="categoria/:catIdParams" element={<ItemListContainer />} />
                <Route path="item/:itemIdParams" element={<ItemDetailContainer />} />
            </Routes>

        </BrowserRouter>
    );
    }

    
    


export default App;


