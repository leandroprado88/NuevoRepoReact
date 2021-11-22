import NavBar from './components/NavBar/NavBar';
import ItemList from './components/ItemListContainer/ItemList';
import 'bootstrap/dist/css/bootstrap.min.css';


function AppEcommerce() {

    return (
        <div className="App">
           <NavBar />
            <ItemList />
          
        </div>
    );
    }
    
    


export default AppEcommerce;


