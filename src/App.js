import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <code>佐藤洋平</code> 
        </p>
        <a
          className="App-link"
          href="https://www.linkedin.com/in/yoheisato/"
          target="_blank"
          rel="noopener noreferrer"
        >
          About yohei sato
        </a>
      </header>
    </div>
  );
}

export default App;
