

import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Navbar from './components/NavBar/NavBar';



function App() {
  return (
    <div className="App">
      <Navbar/>
      <ItemListContainer greeting={'Pitt'}/>
    </div>
  );
}

export default App;
