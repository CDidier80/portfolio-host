import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { CreateUser, LogInUser, ReadUser, UpdateUser, DeleteUser, CheckSessionService } from '../Services/UserService'
import { CreateProfile, ReadProfile, ReadAllProfiles, UpdateProfile } from '../Services/ProfileService'
import { CreateProject, ReadProject, UpdateProject, DeleteProject, GetAllProjects } from '../Services/ProjectsService'
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
import LoadingScreen from '../pages/subcomponents/LoadingScreen'
import NavBar from './subcomponents/NavBar'

const useStyles = makeStyles((theme) => ({
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
    }
  },
  profileCardWrapper: {
    display: "grid",
    gridTemplateColumns: "50% 50%",
    paddingTop: "13px",
    backgroundColor: "white",
    borderRadius: "10px",
    boxShadow: "0 0 4px white"
  }
}));

const MainPage = (props) => {

  {/* Variables */ }
  const classes = useStyles();

  {/* Hooks */ }
  const [pageLoaded, setLoaded] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  {/* --------> projects & profiles fetched for display */ }
  const [displayedProfiles, setProfiles] = useState([])
  const [displayedProjects, setProjects] = useState([])
  const [profileLimit, setProfileLimit] = useState(15)
  const [projectLimit, setProjectLimit] = useState(15)

  const [searchValue, setSearchField] = useState("")

  function FormRow() {
    return (
      <React.Fragment>
        <Grid item xs={6}>
          <Paper className={classes.paper}></Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}></Paper>
        </Grid>
      </React.Fragment>
    );
  }

  {/* useEffect() for fetching Profiles & Projects to display on the main page on rendering */ }
  useEffect(() => {
    console.log("LOG --> FILE: MainPage.js, Function: useEffect --> function reached.")
    const populateMainPage = async () => {
      const profilesResponse = await ReadAllProfiles({ limit: profileLimit }) // // needs to have a limit sent in payload {limit: num}, return many with user_id & name attached to profiles
      const projectsResponse = await GetAllProjects({ limit: profileLimit }) //  // needs to have a limit sent in payload {limit: num}, return many with user_id & name attached to profiles
      const profilesToAdd = profilesResponse

      console.log("Profiles response: ", profilesToAdd)

      const projectsToAdd = projectsResponse
      console.log("Projects response: ", projectsToAdd)
      setProfiles(profilesToAdd)
      setProjects(projectsToAdd)


      //   try {
      //     console.log(`LOG --> FILE: MainPage.js, FUNCTION: populateMainPage() nested in useEffect() --> fetching ${profileLimit} profiles`)
      //     const profilesResponse = await ReadAllProfiles( {limit : profileLimit} ) // // needs to have a limit sent in payload {limit: num}, return many with user_id & name attached to profiles
      //     console.log("LOG --> FILE: MainPage.js, FUNCTION: populateMainPage() nested in useEffect() --> profilesResponse: ", profilesResponse)
      //   } catch (error) {
      //     console.log("TRY{}CATCH{} ERROR -->  FILE: MainPage.js  FUNCTION: useEffect() => populateMainPage()  MESSAGE: ", error)
      //   }

      //   try {
      //   console.log(`LOG --> FILE: MainPage.js, FUNCTION: populateMainPage() nested in useEffect() --> fetching ${projectLimit} profiles`)
      //   const projectsResponse = await GetAllProjects({limit : profileLimit}) //  // needs to have a limit sent in payload {limit: num}, return many with user_id & name attached to profiles
      //   console.log("LOG --> FILE: MainPage.js, FUNCTION: populateMainPage() nested in useEffect() --> projectsResponse: ", projectsResponse)

      // } catch (error) {
      //   console.log("TRY{}CATCH{} ERROR --> FILE: MainPage.js  FUNCTION: useEffect() => populateMainPage()  MESSAGE: ", error)
      //   }

      //   const profilesToAdd = profilesResponse.data
      //   const projectsToAdd = projectsResponse.data
      //   setProfiles(profilesToAdd)
      //   setProjects(projectsToAdd)
      //   console.log("LOG --> FILE: MainPage.js FUNCTION: useEffect() => populateMainPage() MESSAGE: Projects & Profiles added to state.")

    }
    populateMainPage()
    // console.log("LOG --> FILE: MainPage.js FUNCTION: useEffect() => populateMainPage() MESSAGE: main page loaded: ", pageLoaded)
    if (!pageLoaded) {
      setLoaded(true)
    }
  },
    [pageLoaded]
  )


  const handleClick = (event) => setAnchorEl(event.currentTarget)
  const handleClose = () => setAnchorEl(null)

//  return ( !pageLoaded ? <LoadingScreen /> :

  return ( !pageLoaded ? <LoadingScreen /> :
      <div>
          <NavBar {...props} />
          {/* start of profile box */}
          {displayedProfiles ? (
          <div className={classes.profileCardWrapper} >
              {displayedProfiles.map((profile, index)=>(
                <ProfileCard {...props} profile={profile}/>
              ))}
        </div >
            ) : 
                (
                <h3> no profiles yet </h3>
                )}
      </div>

  )
}


export default MainPage





// const styles = {
//   customCardWrapper: {
//     maxHeight: "280px",
//     postition: "relative",
//     overflow: "auto",
//     display: "flex",
//     flexDirection: "column",
//     backgroundColor: "white",
//     borderRadius: "10px",
//     boxShadow: "0 0 4px white"
//   },
//   topHalf: {
//     width: "100%",
//     height: "140px",
//     padding: "4px",
//     postion: "relative",
//     fontFamily: "Roboto"
//   },
//   imageWrapper: {
//     width: "50%",
//   },
//   image: {
//     borderRadius: "5px",
//     boxShadow: "0 0 2px black"
//   },
//   textBox: {
//     width: "50%",
//     padding: "5px",
//     fontFamily: "Roboto"
//   },
//   bottomHalf: {
//     height: "140px",
//     padding: "5px",
//     fontFamily: "Roboto"
//   },
// }

  // < div style = { styles.profileCardWrapper } >
  //         <div style={styles.topHalf}>
  //           <div style={styles.imageWrapper}>
  //             <img style={styles.image} src={"https://media-exp1.licdn.com/dms/image/C4E03AQGUsbLOaj6-8A/profile-displayphoto-shrink_800_800/0/1594259451378?e=1613001600&v=beta&t=QeZtzDqZd4_ONzoRmBvE3v-O47fKZbqzyXrOxPTzhwk"} />
  //           </div>
  //           <div style={styles.textBox}>
  //             <h3>Collin Didier</h3>
  //             <h4>Software Engineer</h4>
  //           </div>
  //         </div>
  //         <div style={styles.bottomHalf}>
  //           <h3>slogan</h3>
  //           <h4>technologies</h4>
  //           <p>link</p>
  //         </div>
  //       </div >