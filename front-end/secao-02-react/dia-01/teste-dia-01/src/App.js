import logo from './logo.svg';
import './App.css';

function App() {
  const nome = 'World';
  const classe = 'hello-class';
  const element = <h1 className={classe}>Hello, {nome}</h1>;
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {element}
      </header>
    </div>
  );
}

export default App;
