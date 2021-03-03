import logo from './yoheisato.jpg';
import logo2 from './GitHub-Mark-64px.png';
import logo3 from './iconfinder_1_Linkedin_unofficial_colored_svg_5296501.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <code>佐藤洋平</code> 
        </p>

        <a href="https://www.linkedin.com/in/yoheisato/">
        <img  src={logo3} className="LinkedInIcon" />
        </a>

        <a href="https://github.com/yohei-yohei">
        <img  src={logo2} className="githubIcon" />
        </a>


      </header>
    </div>
  );
}

export default App;
