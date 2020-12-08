import { Link } from 'react-router-dom'
import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

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
  const {httpRequest, get, put, post} = props
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const [displayedProfiles, setProfiles] = useState([])
  const [searchValue, setSearchField] = useState("")
  const useEffect = () => {
    // console.log("useEffect reached")
    // setProfiles(httpRequest("ReadAllProfiles"))

    // const getProfiles = async () => {
    //   if (!pageIsLoaded) {
    //     changeLoadedBoolean(true)
    //   }
    }

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}> Menu </Button>
            <Menu id="simple-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose} >
              <Link to="/signup">
              <MenuItem onClick={handleClose}> Login </MenuItem>
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
            <Link to="/signInUp">
              <Button color="#fce4ec">Login</Button>
            </Link>
          </Toolbar>
        </AppBar>
      </div>
      <div className={classes.textGreeting}>
        <h3 className={classes.textGreeting.welcome}>Welcome to Dev Ports</h3>
        <h4 className={classes.textGreeting.subHeader}>Your site to easy share your portfolio and make new connection with other developers.</h4>
      </div>
      <Link className={classes.loginButton} to="/signInUp">
        <Button variant="outlined" color="primary">Login</Button>
      </Link>
      <div className={classes.httpTest}>
        <input className={classes.httpTest.textfield} onChange={(e)=>setSearchField(e.target.value)}></input>
        <button className={classes.httpTest.submitTestButton} onClick={()=>httpRequest("createProfile", {body:{}} )}>Submit httpRequest</button>
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
