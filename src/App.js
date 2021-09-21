import ItemListContainer from "./components/ItemListContainer";
import Navbar from "./components/NavBar";


function App() {
  return (
    <div className="App">
          <Navbar/>
          <ItemListContainer
            mensaje="La lista se encuentra vacia"
          />
    </div>
  );
}

export default App;
