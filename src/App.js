import './App.css';
import Main from './components/Main' 
import EconomicHistory from './components/EconomicHistory';
import Nav from './components/NavComponents/Nav';
import Footer from './components/Footer/Footer.jsx';




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

       <div className="img"></div>
       
       
      {/* <SlideNav /> */}
        <Switch>
            <Route exact path="/" exact component={Main}/>
            <Route path="/components/Main" exact component={Main}/>
            <Route path="/components/EconomicHistory" exact component={EconomicHistory}/>
        </Switch>  
       
</HashRouter>   

    <Footer />
    
    </div>
  );
}

export default App;
