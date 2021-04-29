import logo from './yoheisato.jpg';
import logo2 from './GitHub-Mark-64px.png';
import logo3 from './iconfinder_1_Linkedin_unofficial_colored_svg_5296501.png';
import './App.css';
import { Grid } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import Icon from '@material-ui/core/Icon';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { makeStyles } from '@material-ui/core/styles';






const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 200,
    padding: '0 30px',
  },
});

function App() {
    const classes = useStyles();


  return (
    <div className="App">
      <header>
      <img src={logo} className="App-logo" alt="logo" />

<p>
  <code>Yohei Sato</code> 
</p>
        </header>

    <footer className="Appfooter">


     <Grid className={classes.root}>


        <a href="https://www.linkedin.com/in/yoheisato/">
        {/* <img  src={logo3} className="LinkedInIcon" /> */}
        <LinkedInIcon  />
        </a>

        <a href="https://github.com/yohei-yohei">
        {/* <img  src={logo2} className="githubIcon" /> */}
        <GitHubIcon />
        </a>


      
    </Grid>
    </footer>
    </div>

  );
}

export default App;
