import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import ProfileCard from '../pages/subcomponents/ProfileCard'
import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  // card proile not material
  cardProfile: {
    display: "grid",
    gridTemplateColumns: "1fr 2fr",
    color: "red"
  },
  profImage: {
    border: "1px solid black",
    borderRadius: "325px",
    width: "230px",
    height: "230px",
    marginTop: "22px",
    marginLeft: "35px"
  },
  projectWrapper:{
    display: "grid",
    gridTemplateColumns: ("1fr 1fr 1fr"),
    gap: "10px",
    gridAutoRows: "100px",
    color: "red",
    marginTop: "55px",
    marginLeft: "25px",
    marginRight: "25px",
    border: "5px solid red"
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
    },
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
    },
  }
}));

// const stylesheet = {
// cardProfile: {
//   display: "grid",
//     gridTemplateColumns: "1fr 1fr",
//       color: "red"
// }
// }

const PortfolioPage = (props) => {
  const { httpRequest, get, put, post } = props
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const [displayedProfiles, setProfiles] = useState([])
  const [searchValue, setSearchField] = useState("")


  
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  }

  return (
    <div className="portfolio-page-wrapper">
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}> Menu </Button>
            <Menu id="simple-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose} >
              <Link to="/signInUp">
                <MenuItem onClick={handleClose}> Login </MenuItem>
              </Link>
              <Link to="/portfolio">
                <MenuItem onClick={handleClose}>My account</MenuItem>
              </Link>
              <Link to="/mainPage">
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
      {/* profile page below */}

      <div className={classes.cardProfile}>
        <div className={classes.imageColumn}> 
          <img className={classes.profImage}
          src="https://media-exp1.licdn.com/dms/image/C4E03AQGUsbLOaj6-8A/profile-displayphoto-shrink_800_800/0/1594259451378?e=1613001600&v=beta&t=QeZtzDqZd4_ONzoRmBvE3v-O47fKZbqzyXrOxPTzhwk" />
        </div>
        <div className={classes.portfolioDetails}>
        <h2> Collin Didier </h2>
        <h3> Chicago, Il.</h3>
        <h3> FullStack Developer</h3>
        <h3> Organization: Collin and Co. Ltd. </h3>
        <h4> Highly motivated and skilled developer, with a great eye for detail and finding bugs</h4>
        <p> Skills: React, Javascript, HTML, CSS, MongoDB, Express, Phyton </p>
        </div>
      </div>

      {/* projects */}
      <div className={classes.projectWrapper}>
        <div> test 1</div>
            <div> test 2</div>
        <div> test 3</div>
      </div>
    </div>
  )
}

export default PortfolioPage

//   < img className = { classes.profilePict }
// src = " https://media-exp1.licdn.com/dms/image/C4E03AQGUsbLOaj6-8A/profile-displayphoto-shrink_800_800/0/1594259451378?e=1613001600&v=beta&t=QeZtzDqZd4_ONzoRmBvE3v-O47fKZbqzyXrOxPTzhwk"
// alt = "profile-image" />
//           <h1>Collien Didier</h1>
//           <p className="title"> CEO and Founder of Collin and Co. </p>
//           <p>General Assembly</p>
//           <a href="#"> GitHub </a>
//           <p><button>Contact</button></p>

//page will show:
// PROFILES
// profilePicture: 
// professionalTitle: 
// organization: 
// skills
// locale
// bio

// PROJECT:
// title: 
// description: 
// technologies: 
// projectPicture: 
// deployLink: 