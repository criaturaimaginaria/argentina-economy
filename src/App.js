import './App.css';
import Main from './components/Main' 
import EconomicHistory from './components/EconomicHistory';
import Partidas from './components/Partidas';
import Social from './components/Social';
import Nav from './components/NavComponents/Nav';


// import  SlideNav  from './components/NavComponents/SlideNav';
// for common hosts
import { Switch, Route} from 'react-router-dom';    
// for github pages
import { HashRouter } from "react-router-dom";  

function App() {

  return (
    <div className="App">
      
    
<HashRouter>

      <Nav />

      <div className="img"> </div>
       
      {/* <SlideNav /> */}
        <Switch>
            <Route exact path="/" exact component={Main}/>
            <Route path="/components/Main" exact component={Main}/>
            <Route path="/components/EconomicHistory" exact component={EconomicHistory}/>
            <Route path="/components/Partidas" exact component={Partidas}/>
            <Route path="/components/Social" exact component={Social}/>
            <Social />
        </Switch>  
        
</HashRouter>   

    </div>
  );
}

export default App;
