import NavBar from './components/NavBar/NavBar';
import ItemList from './components/ItemListContainer/ItemList';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";


function AppEcommerce() {

    return (
        <BrowserRouter>
        <div className="App">
           <NavBar />
            <ItemList />
        <Routes>
            <Route exact path="/" element = {<ItemListContainer />} />
            <Route path="categoria/:catNombreParams" element = {<ItemListContainer />} />
            <Route path="categoria/:catNombreParams" element = {<ItemListContainer />} />
        </Routes>
        </div>

        </BrowserRouter>
    );
    }

    
    


export default AppEcommerce;


