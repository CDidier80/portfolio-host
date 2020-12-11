import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { CreateUser, LogInUser, ReadUser, UpdateUser, DeleteUser, CheckSessionService} from '../Services/UserService'
import { CreateProfile, ReadProfile, ReadAllProfiles, UpdateProfile} from '../Services/ProfileService'
import { CreateProject, ReadProject, UpdateProject, DeleteProject} from '../Services/ProjectsService'
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
    console.log("Landing page props: ",props)
    {/* Variables */}


    {/* Hooks */}
    const [anchorEl, setAnchorEl] = useState(null);
    const [pageLoaded, setLoaded] = useState(false);
    

    {/* <-------------- updates text in search bar */}
    const [searchValue, setSearchField] = useState("")



    {/* useEffect() for loading screen */}
    useEffect(() => {
      console.log("LOG --> FILE: PortfolioPage.js, Function: useEffect --> function reached.")
          if (!pageLoaded) {
            setLoaded(true)
          }
        }
    ) 

    const mainStyles = {

    textGreeting: {
      display: "block",
      textAlign: "center",
    },

    welcome: {
      fontSize: "70px",
      fontFamily: "Roboto"
    },

    subHeader: {
      fontSize: "20px", 
      fontFamily: "Roboto", 
      textAlign: "center",
      marginTop: "0"
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
    

    return ( !pageLoaded ? <LoadingScreen /> :
        <div>
            <NavBar props={props}/>
            <div style={mainStyles.textGreeting}>
                <h3 style={mainStyles.welcome}>Dev Portal</h3>
                <h4 style={mainStyles.subHeader}>A window into great works</h4>
            </div>
            <div style={mainStyles.buttonWrapper}>
                <Button style={mainStyles.loginButton} onClick={()=>props.history.push("/signin")} variant="outlined" color="primary">Login</Button>
                <Button style={mainStyles.portButton} onClick={()=>props.history.push("/main")} variant="outlined" color="primary">View Portfolios</Button>
            </div>
            <div style={mainStyles.httpTest}>
                {/* <input className={classes.httpTest.textfield} onChange={(e) => setSearchField(e.target.value)}></input> */}
                {/* <button className={classes.httpTest.submitTestButton} onClick={()=>httpRequest("createProfile", {body:{}} )}>Submit httpRequest</button> */}
            </div>
            <Footer />
        </div>
    );
}

export default LandingPage
