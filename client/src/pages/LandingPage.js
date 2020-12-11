import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { CreateUser, LogInUser, ReadUser, UpdateUser, DeleteUser, CheckSessionService } from '../Services/UserService'
import { CreateProfile, ReadProfile, ReadAllProfiles, UpdateProfile } from '../Services/ProfileService'
import { CreateProject, ReadProject, UpdateProject, DeleteProject } from '../Services/ProjectsService'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton';
import LoadingScreen from '../pages/subcomponents/LoadingScreen'
import NavBar from './subcomponents/NavBar'
import Footer from './subcomponents/Footer'


const LandingPage = (props) => {
  console.log("Landing page props: ", props)
  {/* Variables */ }


  {/* Hooks */ }
  const [anchorEl, setAnchorEl] = useState(null);
  const [pageLoaded, setLoaded] = useState(false);


  {/* <-------------- updates text in search bar */ }
  const [searchValue, setSearchField] = useState("")



  {/* useEffect() for loading screen */ }
  useEffect(() => {
    console.log("LOG --> FILE: PortfolioPage.js, Function: useEffect --> function reached.")
    if (!pageLoaded) {
      setLoaded(true)
    }
  }
  )

  const mainStyles = {
    wrapper: {
      backgroundImage: "url('https://images.pexels.com/photos/169573/pexels-photo-169573.jpeg?cs=srgb&dl=pexels-negative-space-169573.jpg&fm=jpg')",
      backgroundSize: "cover", minHeight: "91vh", paddingTop: "5vh",
      backgroundColor: "0 100% 90% 0.4",
      paddingTop: "0",
    },
    textGreeting: {
      display: "block",
      textAlign: "center",
    },

    welcome: {
      fontSize: "70px",
      fontFamily: "Roboto",
      paddingTop: "4px",
    },
    subHeader: {
      fontSize: "40px",
      fontWeight: "700px",
      fontFamily: "Roboto",
      textAlign: "center",
      marginTop: "0",
    },

    httpTest: {
      margin: "0 auto",
      marginTop: "70px",
      width: "300px",
      height: "50px",
      display: "flex",
      justifyContent: "spaceBetween",
    },

    textfield: {
      width: "60%",
      height: "80px",
      backgroundColor: "white",
      border: "1px solid propsck"
    },

    buttonWrapper: {
      margin: "0 auto",
      width: "40vw",
      // backgroundColor: "green",
      display: "flex",
      justifyContent: "space-evenly"
    },

    loginButton: {
      minWidth: "200x",
      height: "40px",
      fontSize: "14px",
      marginRight: "15px"
    },

    portButton: {
      minWidth: "200x",
      height: "40px",
      fontSize: "14px",
      marginLeft: "15px"
    },




  }


  return (!pageLoaded ? <LoadingScreen /> :
    <div style={mainStyles.wrapper}>
      <NavBar props={props} />
      <div style={mainStyles.textGreeting}>
        <h3 style={mainStyles.welcome}>Dev Portal</h3>
        <h4 style={mainStyles.subHeader}>A window into great works</h4>
      </div>
      <div style={mainStyles.buttonWrapper}>
        <Button style={mainStyles.loginButton} onClick={() => props.history.push("/signin")} variant="contained" color="primary">Login</Button>
        <Button style={mainStyles.portButton} onClick={() => props.history.push("/main")} variant="contained" color="primary">View Portfolios</Button>
      </div>
      <div style={mainStyles.httpTest}>

      </div>
      <Footer />
    </div>
  );
}

export default LandingPage
