import './App.css';
import Main from './components/Main' 
import EconomicHistory from './components/EconomicHistory';
import Partidas from './components/Partidas';
import Social from './components/Social';

function App() {
  return (
    <div className="App">

    <Main />
    <EconomicHistory />
    <Partidas />
    <Social />

    </div>
  );
}

export default App;
