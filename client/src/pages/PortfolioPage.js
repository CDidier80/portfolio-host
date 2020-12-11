import React, { useState, useEffect } from 'react';
import { CreateUser, LogInUser, ReadUser, UpdateUser, DeleteUser, CheckSessionService } from '../Services/UserService'
import { CreateProfile, ReadProfile, ReadAllProfiles, UpdateProfile } from '../Services/ProfileService'
import { CreateProject, ReadProject, UpdateProject, DeleteProject, GetUsersProjects } from '../Services/ProjectsService'
import { makeStyles, StylesProvider } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'
import TextForm from './subcomponents/TextForm'
import ProjectForm from './subcomponents/ProjectForm'
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
  addProjBtn: {
    marginBottom: "12px"
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
  updateBioBtn: {
    marginLeft: "400px"
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
    imageColumn: {
      display: "block",

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
    name: {
      textAlign: "center"
    },
    subtext: {
      marginLeft: "10px"
    }
  }
}));


const ProjectCard = (props) => {
  console.log("A project card was made")
  const { project } = props
  const classes = useStyles();

  {/* <--------------add-project widget needs to know if we are creating or modifying a project */ }
  // const [showProfileCloudinary, toggleProfileCloudinary] = useState(false)

  // const [displayedProfiles, setProfiles] = useState([])
  // const [searchValue, setSearchField] = useState("")
  const styles = {
    image: {
      maxWidth: "300px",

    }
  }

  return (
    <div className="project1">
      {/* <h3> Project title: {props.projectTitle}</h3>
          <p>Description: {props.description} </p>
          <p>Technologies: {props.technologies}</p> */}
      {/* <p>{propsWidgetOpenmage} </p> */}
      {/* <p>Link: {props.link} </p> */}
      <div className={classes.root}>
        <Paper className={classes.paper}>
          <Grid container spacing={2}>
            <Grid item>

              <img style={styles.image} src={project.projectPicture}></img>

            </Grid>
            <Grid item xs={6} sm container>
              <Grid item xs container direction="column" spacing={4}>
                <Grid item xs>
                  {/* <Typography className={classes.namePerson} gutterBottom variant="subtitle1">
                        Name: {project.location}
                      </Typography> */}
                  <Typography gutterBottom variant="subtitle1"> Title project: {project.title} </Typography>
                  <Typography variant="body2" gutterBottom> Description: {project.description} </Typography>
                  <Typography variant="body2" > Technologies: {project.technologies} </Typography>
                </Grid>
                <Grid item>
                  <Link to="portfolio">
                    <Typography variant="body2" style={{ cursor: 'pointer' }} className={classes.linkPort}>Link to project: {project.deployLink}</Typography>
                  </Link>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          {/* <Button className={classes.updateBtn} variant="outlined" color="primary" size="small" onClick={(e) => openPopUp(e, "UpdateProject")}> update </Button>
              {showPopUp && <ProjectForm {...props} togglePopup={setShowPopUp} updateOrCreate={"update"} />} */}
        </Paper>
      </div>
    </div>

  )
}



const PortfolioPage = (props) => {
  console.log("PROPS INSIDE PORTFOLIO PAGE", props)
  const { profile, user } = props.userInfo

  {/* Variables */ }
  const classes = useStyles();
  {/* Hooks */ }
  {/* <--------------profile allows editing priveledges when user views their own profile */ }
  // const [usersOwnProfile, setUserOwnProfile] = useState(props.location.state.usersOwnProfile ? true : false);  // boolean
  const [showPopUp, setShowPopUp] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [pageLoaded, setLoaded] = useState(false);
  {/* <--------------add-project widget needs to know if we are creating or modifying a project */ }
  // const [showProfileCloudinary, toggleProfileCloudinary] = useState(false)
  const [showProjectPicWidget, toggleProjectPicWidget] = useState(false)
  const [showAddProject, setAddProject] = useState(false)
  const [picUrl, setPicUrl] = useState("")
  const [projects, setProjects] = useState([])
  // const [displayedProfiles, setProfiles] = useState([])
  // const [searchValue, setSearchField] = useState("")


  {/* Event Handlers */ }
  const openPopUp = (e, formType) => {
    e.preventDefault()
    setShowPopUp(!showPopUp)
  }

  // useEffect(() => {
  //   console.log("LOG --> FILE: PortolioPage.js ProjectForm.js, Function: useEffect --> function reached.")
  //   const populatePortfolioPage = async () => {
  //     // console.log(user.id)
  //     // const projectsResponse = await GetUsersProjects(user.id) //  // needs to have a limit sent in payload {limit: num}, return many with user_id & name attached to profiles


  //     // console.log("Projects response: ", projectsResponse)
  //     // setProjects(projectsResponse)

  //   }
  //   populatePortfolioPage()
  //   console.log("LOG --> FILE: PortolioPage.js FUNCTION: useEffect() => populatePortfolioPage() MESSAGE: portfolio page loaded: ", pageLoaded)
  //   if (!pageLoaded) {
  //     setLoaded(true)
  //   }
  // },
  //   [pageLoaded]
  // )
  // console.log(showProjectPicWidget)

  useEffect(() => {
    console.log("LOG --> FILE: PortolioPage.js ProjectForm.js, Function: useEffect --> function reached.")
    const populatePortfolioPage = async () => {
      console.log(user.id)
      const projectsResponse = await GetUsersProjects(user.id) //  // needs to have a limit sent in payload {limit: num}, return many with user_id & name attached to profiles


      console.log("Projects response: ", projectsResponse)
      setProjects(projectsResponse)

    }
    populatePortfolioPage()
    console.log("LOG --> FILE: PortolioPage.js FUNCTION: useEffect() => populatePortfolioPage() MESSAGE: portfolio page loaded: ", pageLoaded)
    if (!pageLoaded) {
      setLoaded(true)
    }
  },
    [pageLoaded]
  )
  console.log(showProjectPicWidget)

  return (!pageLoaded ? <LoadingScreen /> :
    <div className="portfolio-page-wrapper">
      <NavBar {...props} />

      {showProjectPicWidget ? <CloudinaryWidget widgetOpen={true} {...props} setPicUrl={setPicUrl} /> : null}
      <div className={classes.cardProfile}>
        <div className={classes.imageColumn}>
          <img className={classes.profImage} src={profile.profilePicture} placeholder="upload image" alt="default profile image" />
          <h2 style={classes.subtext}> {user.name}</h2>
          <h3 style={classes.subtext} > {profile.professionalTitle}</h3>
          <h3 style={classes.subtext} > {profile.organization}</h3>
          <h3 style={classes.subtext} > {profile.locale}</h3>
        </div>
        {/* <p>{profile.skills}</p>
        <h4>{profile.bio}</h4> */}
      </div>


      {/* projects */}
      <div className={classes.projectWrapper}>
        <h3> Projects: </h3>
        <div className={classes.addProject}>
          <Button className={classes.addProjBtn} variant="outlined" color="primary" size="small" onClick={(e) => setAddProject(true)}> add project </Button>
          {showAddProject && <ProjectForm {...props} updateOrCreate={"create"} togglePopup={setAddProject} />}
        </div>

        <div className="projectsWrapper">
          {projects.map((project, index) => {

            return (
              <ProjectCard {...props} project={project} />
            )
          })}
        </div>
      </div>
    </div>
  )
}


export default PortfolioPage