import React, { useState, useEffect } from 'react';
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
// import Grid from '@material-ui/core/Grid';
// import Paper from '@material-ui/core/Paper';
// import ProfileCard from '../pages/subcomponents/ProfileCard'
import { Link } from 'react-router-dom'
import TextForm from './subcomponents/TextForm'
import ProjectForm from '../pages/subcomponents/ProjectForm'
import PopUpModalProject from '../pages/subcomponents/PopUpModalProject'
import LoadingScreen from '../pages/subcomponents/LoadingScreen'
import Grid from '@material-ui/core/Grid';
import ButtonBase from '@material-ui/core/ButtonBase';
import Paper from '@material-ui/core/Paper';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  // card profile not material
  cardProfile: {
    display: "grid",
    gridTemplateColumns: "1fr 2fr",
    color: "black"
  },
  profImage: {
    border: "1px solid black",
    borderRadius: "325px",
    width: "230px",
    height: "230px",
    marginTop: "22px",
    marginLeft: "35px"
  },
  projectWrapper: {
    display: "grid",
    gridTemplateColumns: "repeat(minmax(350px, 1fr 1fr 1fr))",
    gap: "10px",
    gridAutoRows: "100px",
    color: "black",
    marginTop: "55px",
    marginLeft: "25px",
    marginRight: "25px",
    border: "2px solid black",
    borderRadius: "10px",
    backgroundColor: "F3F2EF"
  },
  projectWrapper: {
    margin: "0 auto",
    paddingLeft: "30px"
  },
  title: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 1200,
    borderRadius: "5px",
    boxShadow: "0 0 2px black"
  },
  image: {
    width: 200,
    height: 170,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
    borderRadius: "5px",
    boxShadow: "0 0 2px black"
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
    addProject: {
      textAlign: "center",
      paddingTop: "2rem"
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

const PortfolioPage = (props) => {

  {/* Variables */}
  const classes = useStyles();

  {/* Hooks */}
  const [usersOwnProfile, setUserOwnProfile] = useState(props.usersOwnProfile);  // boolean
  const [showPopUp, setShowPopUp] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [pageLoaded, setLoaded] = useState(false);
  const [updateOrCreate, setUpdateOrCreate] = useState(null)
  // const [displayedProfiles, setProfiles] = useState([])
  // const [searchValue, setSearchField] = useState("")


  {/* useEffect() for loading screen */}
  useEffect(() => {
    console.log("LOG --> FILE: PortfolioPage.js, Function: useEffect --> function reached.")
        if (!pageLoaded) {
          setLoaded(true)
        }
      },
  [pageLoaded]
) 

  {/* Event Handlers */}
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  }

  const openPopUp = (e, formType) => {
    setShowPopUp((!showPopUp))
    setUpdateOrCreate(formType)
  }

  return ( !pageLoaded ? <LoadingScreen /> :
      <div className="portfolio-page-wrapper">
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}> Menu </Button>
                    <Menu id="simple-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose} >

                      {/* There should be 2 links -- one for sign in and one for sign up. They should conditionally render the SignInSignUpPage*/}
                      <Link to="/signin">
                        <MenuItem onClick={handleClose}>Login</MenuItem>
                      </Link>
                      <Link to="/portfolio">
                        <MenuItem onClick={handleClose}>Portfolio</MenuItem>
                      </Link>
                      <Link to="/main">
                        <MenuItem onClick={handleClose}>Home</MenuItem>
                      </Link>
                      <Link to="/settings">
                        <MenuItem onClick={handleClose}>Account</MenuItem>
                      </Link>
                    </Menu>
                    <Typography variant="h6" className={classes.title}>DevPortal</Typography>
                    {/** LINK TO SignInSignUp page. <Link /> can accept props to send if need be**/}
                    <Link to="/signin"></Link>
                </Toolbar>
            </AppBar>
        </div>
      {/* profile page below */}

      <div className={classes.cardProfile}>
        <div className={classes.imageColumn}>
          <img className={classes.profImage}  ///image button Luis
            src="https://media-exp1.licdn.com/dms/image/C4E03AQGUsbLOaj6-8A/profile-displayphoto-shrink_800_800/0/1594259451378?e=1613001600&v=beta&t=QeZtzDqZd4_ONzoRmBvE3v-O47fKZbqzyXrOxPTzhwk" alt="" />
        </div>
        <div className={classes.portfolioDetails}>
          <form>
            <h2> name:  </h2>
            <h3> Location:</h3>
            <h3> professional title: </h3>
            <h3> Organization: </h3>
            <h4> Bio: </h4>
            <p> Skills: </p>
          </form>
          <Link to="/profileform">
          <Button className="submit-Bio" variant="outlined" color="primary"> update </Button>
          </Link>
        </div>
      </div>

      {/* projects */}
      <div className={classes.projectWrapper}>
        <h3>
          Projects:
          <div className={classes.addProject}>
          <button className={classes.addProjBtn} onClick={(e) => openPopUp(e, "CreateProject")}> add project </button>
          { showPopUp && <PopUpModalProject setShowPopUp={setShowPopUp} />}
          </div>
        </h3>
        <div className="project1"> 
        {/* <h3> Project title: {props.projectTitle}</h3>
          <p>Description: {props.description} </p>
          <p>Technologies: {props.technologies}</p>
          <p>Image: {props.image} </p>
          <p>Link: {props.link} </p> */}
          <div className={classes.root}>
            <Paper style={{ Width: "50%" }} className={classes.paper}>
              <Grid container spacing={2}>
                <Grid item>
                  <ButtonBase className={classes.image}>
                    <img className={classes.img} alt="complex"
                      src="https://dg.imgix.net/do-you-think-you-re-happy-jgdbfiey-en/landscape/do-you-think-you-re-happy-jgdbfiey-9bb0198eeccd0a3c3c13aed064e2e2b3.jpg?ts=1520525855&ixlib=rails-4.1.0&auto=format%2Ccompress&fit=min&w=700&h=394&dpr=2&ch=Width%2CDPR" />
                  </ButtonBase>
                </Grid>
                <Grid item xs={6} sm container>
                  <Grid item xs container direction="column" spacing={4}>
                    <Grid item xs>
                      <Typography className={classes.namePerson} gutterBottom variant="subtitle1">
                        Compliment your day
                      </Typography>
                      <Typography gutterBottom variant="subtitle1">
                        Times are rough, so check out my simple compliment app, built in my 15 minute challenge
                      </Typography>
                      <Typography variant="body2" gutterBottom>
                        React 
                      </Typography>
                      <Typography variant="body2" >
                        Technologies: React, Javascript, Phyton, MongoDb
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Link to="portfolio">
                        <Typography variant="body2" style={{ cursor: 'pointer' }} className={classes.linkPort}>
                          https://www.linkedin.com/in/collin-didier/detail/recent-activity/shares/
                        </Typography>
                      </Link>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <button className={classes.updateBtn} onClick={(e) => openPopUp(e, "UpdateProject")}> update </button>
              {showPopUp && <PopUpModalProject setShowPopUp={setShowPopUp} updateOrCreate={updateOrCreate} />}
            </Paper>
          </div>
        </div>
        <br></br>
      </div>
    </div>
  )
}

export default PortfolioPage

  // < div className = { classes.portfolioDetails } >
  //         <form>
  //       <h2> name: </h2>
  //       <h3> Chicago, Il.</h3>
  //       <h3> FullStack Developer</h3>
  //       <h3> Organization: Collin and Co. Ltd. </h3>
  //       <h4> Highly motivated and skilled developer, with a great eye for detail and finding bugs</h4>
  //       <p> Skills: React, Javascript, HTML, CSS, MongoDB, Express, Phyton </p>
  //         </form>
  //         <Button className="submit-Bio" variant="outlined" color="primary"> submit </Button>

  //       </div >

//make each section a min. of 100vh page sections
//make link to 

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