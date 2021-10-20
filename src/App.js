import NavBar from "./components/NavBar"
import React,{useState} from "react"
import ItemListContainer from "./components/ItemListContainer";
import './index.css';
import { BrowserRouter as Router,
  Switch,
  Route,
  Link} from 'react-router-dom';
import ItemDescrib from "./components/ItemDescrib";
import ItemaDetail from "./components/ItemaDetail";
import CartContext from "./components/CartContext";
import { DatoContext } from "./components/conText/DataContext";


function App() {

  return (
  
    
    <Router>
    <DatoContext>
      <div>
      <header>
        <NavBar />
        

      </header>

      <main>
        
        <Switch>
          <Route exact path="/">
              <ItemListContainer  />
          </Route>
          
          

          <Route exact path="/ItemDescribs/:id">
            <ItemaDetail/>
          </Route>

          <Route exact path="/Carrtito">
            <CartContext/>
          </Route>
        </Switch>
      </main>
    </div>
    </DatoContext> 
    </Router>
    
    
  );
}

export default App;
