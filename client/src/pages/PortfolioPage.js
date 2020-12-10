import React, { useState, useEffect } from 'react';
import { CreateUser, LogInUser, ReadUser, UpdateUser, DeleteUser, CheckSessionService } from '../Services/UserService'
import { CreateProfile, ReadProfile, ReadAllProfiles, UpdateProfile } from '../Services/ProfileService'
import { CreateProject, ReadProject, UpdateProject, DeleteProject } from '../Services/ProjectsService'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'
import TextForm from './subcomponents/TextForm'
import ProjectForm from '../pages/subcomponents/ProjectForm'
import PopUpModalProject from '../pages/subcomponents/PopUpModalProject'
import LoadingScreen from '../pages/subcomponents/LoadingScreen'
import Grid from '@material-ui/core/Grid';
import ButtonBase from '@material-ui/core/ButtonBase';
import Paper from '@material-ui/core/Paper';
import NavBar from './subcomponents/NavBar'
import CloudinaryWidget from './subcomponents/CloudinaryWidget'

const useStyles = makeStyles((theme) => ({
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
  console.log("props", props)
  console.log("props.history: ", props.history)
  console.log("props.history.location: ", props.history.location)
  // const {bio, id, name, locale, organization, professionalTitle, profilePicture, skills, userId} = props.location.state


  {/* Variables */ }
  const classes = useStyles();

  {/* Hooks */ }
  {/* <--------------profile allows editing priveledges when user views their own profile */ }
  // const [usersOwnProfile, setUserOwnProfile] = useState(props.location.state.usersOwnProfile ? true : false);  // boolean
  const [showPopUp, setShowPopUp] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [pageLoaded, setLoaded] = useState(false);
  {/* <--------------add-project widget needs to know if we are creating or modifying a project */ }
  const [updateOrCreate, setUpdateOrCreate] = useState(null)
  const [isWidgetOpen, toggleWidgetVisibility] = useState(false)
  // const [displayedProfiles, setProfiles] = useState([])
  // const [searchValue, setSearchField] = useState("")

  {/* useEffect() for loading screen */ }
  useEffect(() => {
    console.log("LOG --> FILE: PortfolioPage.js, Function: useEffect --> function reached.")
    if (!pageLoaded) {
      setLoaded(true)
    }
  },
    [pageLoaded]
  )

  {/* Event Handlers */ }

  const openPopUp = (e, formType) => {
    setShowPopUp((!showPopUp))
    setUpdateOrCreate(formType)
  }

  const goCloudinary = (e) => {
    console.log("functionreach")
    toggleWidgetVisibility(!isWidgetOpen)
  }
  // the existence of something on a page is always a conditional rendering question
  //show this = true or false? - everything single time
  //decide what has to be true for the component to show
  // create a hook representing the truth or falsy of that condition
  //other parts of the page can change whether your condition is true or false
  // use curly boys with a ternary operation to tell a component to render or not



  return (!pageLoaded ? <LoadingScreen /> :
    <div className="portfolio-page-wrapper">
      <NavBar />
      {/* profile page below */}
      {isWidgetOpen ? <CloudinaryWidget /> : null}
      <div className={classes.cardProfile}>
        <div className={classes.imageColumn}>
          <img className={classes.profImage} onClick={(e) => goCloudinary()} sWidgetOpenmage button Luis
            src="https://media-exp1.licdn.com/dsWidgetOpenmage/C4E03AQGUsbLOaj6-8A/profile-displayphoto-shrink_800_800/0/1594259451378?e=1613001600&v=beta&t=QeZtzDqZd4_ONzoRmBvE3v-O47fKZbqzyXrOxPTzhwk" alt="" />
          {/* // src={profilePicture} alt="" /> */}
          <div className={classes.portfolioDetails}>
            <div>
              {/* <h2>{name}</h2>
                <h3>{locale}</h3>
                <h3>{professionalTitle}</h3>
                <h3>{organization}</h3>
                <h4>{bio}</h4>
                <p>{skills}</p> */}
            </div>
            <Button className="submit-Bio" variant="outlined" color="primary"> update </Button>
          </div>
        </div>
      </div>

      {/* projects */}
      <div className={classes.projectWrapper}>
        <h3>
          Projects:
          <div className={classes.addProject}>
            <button className={classes.addProjBtn} onClick={(e) => openPopUp(e, "CreateProject")}> add project </button>
            {showPopUp && <PopUpModalProject setShowPopUp={setShowPopUp} />}
          </div>
        </h3>
        <div className="project1">
          {/* <h3> Project title: {props.projectTitle}</h3>
          <p>Description: {props.description} </p>
          <p>Technologies: {props.technologies}</p>
          sWidgetOpenmage: {prosWidgetOpenmage} </p>
          <p>Link: {props.link} </p> */}
          <div className={classes.root}>
            <Paper style={{ Width: "50%" }} className={classes.paper}>
              <Grid container spacing={2}>
                <Grid item>
                  <ButtonBase className={classes.image}>
                    <CloudinaryWidget />
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
// src = " https://media-exp1.licdn.com/dsWidgetOpenmage/C4E03AQGUsbLOaj6-8A/profile-displayphoto-shrink_800_800/0/1594259451378?e=1613001600&v=beta&t=QeZtzDqZd4_ONzoRmBvE3v-O47fKZbqzyXrOxPTzhwk"
// alt = "profisWidgetOpenmage" />
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