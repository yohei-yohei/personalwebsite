import logo from './yoheisato.png';
import logo2 from './iclelandfall2540.jpg';
import logo3 from './b080.jpg';
import './App.css';
import { Grid } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import Icon from '@material-ui/core/Icon';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { makeStyles } from '@material-ui/core/styles';
import React from "react";
import Container from '@material-ui/core/Container';


const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #33a8ff 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 13,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 30,
    padding: '0 0px',
  },
});

function App() {
    const classes = useStyles();
    const styleObj1 = {
      fontSize: 40,
      color: "#992d22",
      textAlign: "center",
      paddingTop: "0px",
  }

    const styleObj2 = {
      fontSize: 15,
      color: "#13344c",
      textAlign: "center",
      fontWeight: "bold",
      paddingTop: "0px",
  }

  

  return (
    
    <div className="App" style={{ backgroundImage: `url(${logo3})` }}>

      
      
      <header>
      <Container maxWidth="sm">
      <img src={logo} className="App-logo" alt="logo" />
      </Container>
      <Container maxWidth="sm">
      <p style={styleObj1}>
      About Yohei Sato 
      </p> 
  <p style={styleObj2}>
  I have a degree in Mathematics and Computer Science.<br/>
I've been working in the AWS technical support team for a year and half.<br/>
I have a strong passion for the S3 and IAM AWS services.<br/>

You can check my resume in the following link. <br/>
(Using AWS S3 Static Website Hosting.)<br/>
<a target="_blank" href="http://s3.main.bucket.corssaccount2.s3-website-ap-northeast-1.amazonaws.com/">My resume</a>


    </p> 
    </Container>
        </header>

    <footer className="Appfooter">


     <Grid className={classes.root}>

 <Container maxWidth="sm">
        <a href="https://www.linkedin.com/in/yoheisato/">
        <LinkedInIcon  />
        </a>

        <a href="https://github.com/yohei-yohei">
        <GitHubIcon />
        </a>
        </Container>

      
    </Grid>
    </footer>
    </div>

  );
}

export default App;
