import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Greeting from './components/pure/greeting';
import Greetingf from './components/pure/greetingF';
import TaskListComponent from './components/container/task_list';
import Ejemplo1 from './hooks/Ejemplo1';
import MiComponenteConContexto from './hooks/Ejemplo3';
import Ejemplo4 from './hooks/Ejemplo4';
import GreetingStyled from './components/pure/greetingStyled';
import Parent from './components/container/parent';


function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <Greeting name="Pedro"/> */}
        {/* <Greetingf name="Miguel"/> */}
        <TaskListComponent/>
        {/* <Ejemplo1/> */}
        {/* <MiComponenteConContexto/> */}
        {/* <Ejemplo4 nombre="Miguel">
          <h3>Contenido del props.children</h3>
        </Ejemplo4> */}
        {/* <GreetingStyled name="Miguel"/> */}
        {/* <Parent/> */}
      {/* </header> */}
    </div>
  );
}

export default App;
