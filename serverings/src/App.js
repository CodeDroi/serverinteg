import logo from './logo.svg';
import './App.css';
import { ServerInteg, ServerInteg1, ServerInteg2 } from './components/ExampleDB/ExampleUser';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello World</h1>
        <h1>Hello Everyone</h1>
        <ServerInteg2/>
      </header>
    </div>
  );
}

export default App;
