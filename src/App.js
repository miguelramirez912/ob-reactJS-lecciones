import logo from './logo.svg';
import './App.css';
import Greeting from './components/pure/greeting';
import Greetingf from './components/pure/greetingF';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Greeting name="Pedro"/>
        {/* <Greetingf name="Miguel"/> */}
      </header>
    </div>
  );
}

export default App;
