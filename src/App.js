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


function App() {

  return (
  
        <Router>
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
        </Switch>
      </main>
    </div>
    </Router>
    
    
  );
}

export default App;
