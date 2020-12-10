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
// import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import LoadingScreen from '../pages/subcomponents/LoadingScreen'


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  textGreeting: {
    display: "block",
    marginLeft: "5vw",
    alignText: "left",
    welcome: {
      fontSize: "35px"
    },
    subHeader: {
      fontSize: "20px"
    }
  },
  httpTest: {
    margin: "0 auto",
    marginTop: "70px",
    width: "300px",
    height: "50px",
    display: "flex",
    justifyContent: "spaceBetween",
    textfield: {
      width: "60%",
      height: "80px",
      backgroundColor: "white",
      border: "1px solid black"
    },
    loginButton: {
      display: "block",
      margin: "0 auto",
      width: "80px",
      height: "40px",
      fontSize: "18px"
    },
    submitTestButton: {
      height: "80px",
      width: "80px",
      color: "black",
      backgroundColor: "white"
    }
  }
}));

const LandingPage = (props) => {

    {/* Variables */}
    const classes = useStyles();


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
        },[pageLoaded]
    ) 


    {/* Event Handlers */}
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
      setAnchorEl(null);
    };



    const mainStyles = {

    textGreeting: {
      display: "block",
      textAlign: "center",
    },

    welcome: {
      fontSize: "50px",
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
      border: "1px solid black"
    },

    buttonWrapper: {
        margin: "0 auto",
        width: "40vw",
        // backgroundColor: "green",
        display: "flex", 
        justifyContent: "space-evenly"
    },

    buttons: {
      width: "80px",
      height: "40px",
      fontSize: "18px"
    },

    submitTestButton: {
      height: "80px",
      width: "80px",
      color: "black",
      backgroundColor: "white"
    }
  }
    





    return ( !pageLoaded ? <LoadingScreen /> :
        <div>
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar>
                        <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}> Menu </Button>
                        <Menu id="simple-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose} >
                            <Link to="/signin">
                              <MenuItem onClick={handleClose}>Login</MenuItem>
                            </Link>
                            <Link to="/portfolio">
                                <MenuItem onClick={handleClose}>My account</MenuItem>
                            </Link>
                            <Link to="/main">
                              <MenuItem onClick={handleClose}>Home</MenuItem>
                            </Link>
                        </Menu>
                        <Typography variant="h6" className={classes.title}>DevPortal</Typography>
                            {/** LINK TO SignInSignUp page. <Link /> can accept props to send if need be**/}
                        <Link to="/signin">
                            <Button color="#fce4ec">Login</Button>
                        </Link>
                    </Toolbar>
                </AppBar>
            </div>


            <div style={mainStyles.textGreeting}>
                <h3 style={mainStyles.welcome}>Welcome to Dev Portal</h3>
                <h4 style={mainStyles.subHeader}>A window into great works</h4>
            </div>

            <div style={mainStyles.buttonWrapper}>
                <Button style={mainStyles.buttons} onClick={()=>props.history.push("/signin")} variant="outlined" color="primary">Login</Button>
                <Button style={mainStyles.buttons} onClick={()=>props.history.push("/signin")} variant="outlined" color="primary">View Portfolios</Button>
            </div>
            <div style={mainStyles.httpTest}>
                {/* <input className={classes.httpTest.textfield} onChange={(e) => setSearchField(e.target.value)}></input> */}
                {/* <button className={classes.httpTest.submitTestButton} onClick={()=>httpRequest("createProfile", {body:{}} )}>Submit httpRequest</button> */}
            </div>
        </div>
    );
}

export default LandingPage

// const HomePage = ()  => {
//   return(
// <div>
// <h3>
//   Welcome to Dev Ports
// </h3>
// <h4>
//   Your site to easy share your portfolio and make new connection with other developers.
// </h4>
// <Link to="/login">
//   <Button variant="outlined" color="primary">
//     Login
// </Button>
// </Link>
//   <Link to="/signup">
//     <Button variant="outlined" color="primary">
//       Sign up
// </Button>
//   </Link>
// </div>
//   )
// }

// export default HomePage
