import './App.css';
import Main from './components/Main' 
import EconomicHistory from './components/EconomicHistory';
import Nav from './components/NavComponents/Nav';
import Img from './components/Img';

// import  SlideNav  from './components/NavComponents/SlideNav';
// for common hosts
import { Switch, Route} from 'react-router-dom';    
// for github pages
import { HashRouter } from "react-router-dom";  

function App() {

  return (
    <div className="App">
      
      <Img />
    
<HashRouter>

      <Nav />

       <div className="img"></div>
       
       
      {/* <SlideNav /> */}
        <Switch>
            <Route exact path="/" exact component={Main}/>
            <Route path="/components/Main" exact component={Main}/>
            <Route path="/components/EconomicHistory" exact component={EconomicHistory}/>
        </Switch>  
       
</HashRouter>   

    
    </div>
  );
}

export default App;
