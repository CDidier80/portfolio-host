import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Link } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import {CreateProfile, ReadProfile, ReadAllProfiles, UpdateProfile} from '../../Services/ProfileService'
import NavBar from './NavBar'

// still needs cloudinary widget and event handler for string url of pic

const ProfileForm = (props) => {

    {/* Hooks */}
    // const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState(null);
    const [profilePicUrl, setProfilePicUrl] = useState("")
    const [professionalTitle, setProfessionalTitle] = useState("")
    const [organization, setOrganization] = useState("")
    const [skills, setSkills] = useState("")
    const [locale, setLocale] = useState("")
    const [bio, setBio]       = useState("")

    {/* Event Handlers */}
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
      setAnchorEl(null);
    };

    const submitForm = async () => {
        let payload = {
            profilePicUrl : profilePicUrl, 
            professionalTitle : professionalTitle, 
            organization : organization, 
            skills : skills, 
            locale : locale, 
            bio : bio, 
        }
        console.log("User Payload upon submit form click: ", payload)
        const profileFunction = props.firstTimeUser ? CreateProfile : UpdateProfile
        console.log("LOG: At form submit Profile Form identifies first time user as: ", props.firstTimeUser)

        const profileSubmissionResult = await profileFunction(payload)

        console.log("LOG:-->  FILE: PorfileForm.js  FUNCTION: submitForm() --> API response:", profileSubmissionResult)
        // do something with profileSubmissionResult if needed
        console.log("LOG --> FILE: PortfolioPage.js, Function: submitForm() --> function reached.")
        props.history.push({pathname: "/portfolio", state:  {profile: profileSubmissionResult, usersOwnProfile: true}})
    }

    const updateTextField = (e, updateFunction) => {
      e.preventDefault()
      let value = e.target.value 
      console.log("Text value: ", value)
      updateFunction(value)
    }

  return (
    <div>
        <NavBar />
                  <div>
                                      {/* Professional Title */}
                    <TextField id="standard-full-width" onChange={(e)=>updateTextField(e, setProfessionalTitle)}   label="professional title" style={{ margin: 8 }} placeholder="professional title" fullWidth margin="normal" InputLabelProps={{ shrink: true, }} />

                                      {/* Organization */}
                    <TextField id="standard-full-width" onChange={(e)=>updateTextField(e, setOrganization)}        label="Organization" style={{ margin: 8 }} placeholder="organization" fullWidth margin="normal" InputLabelProps={{ shrink: true, }} />

                                      {/* Locale */}
                    <TextField id="standard-full-width" onChange={(e)=>updateTextField(e, setLocale)}              label="Locale" style={{ margin: 8 }} placeholder="locale" fullWidth margin="normal" InputLabelProps={{ shrink: true, }} />

                                      {/* Skills */}
                    <TextField id="standard-full-width" onChange={(e)=>updateTextField(e, setSkills)}              label="Skills" style={{ margin: 8 }} placeholder="skills" fullWidth margin="normal" InputLabelProps={{ shrink: true, }} />

                                      {/* Biography */}
                    <TextField id="standard-full-width" onChange={(e)=>updateTextField(e, setBio)}                 label="Biography" style={{ margin: 8 }} placeholder="Bio" fullWidth margin="normal" InputLabelProps={{ shrink: true, }} />
                </div>
        <button onClick={()=>submitForm()}> Submit </button>
    </div>
  );
}


export default ProfileForm

  // < div className = "portfolio-page-wrapper" >
  //   <div className={classes.root}>
  //     <AppBar position="static">
  //       <Toolbar>
  //         <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}> Menu </Button>
  //         <Menu id="simple-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose} >

  //           {/* There should be 2 links -- one for sign in and one for sign up. They should conditionally render the SignInSignUpPage*/}
  //           <Link to="/signin">
  //             <MenuItem onClick={handleClose}>Login</MenuItem>
  //           </Link>
  //           <Link to="/portfolio">
  //             <MenuItem onClick={handleClose}>Portfolio</MenuItem>
  //           </Link>
  //           <Link to="/main">
  //             <MenuItem onClick={handleClose}>Home</MenuItem>
  //           </Link>
  //           <Link to="/settings">
  //             <MenuItem onClick={handleClose}>Account</MenuItem>
  //           </Link>
  //         </Menu>
  //         <Typography variant="h6" className={classes.title}>DevPortal</Typography>
  //         {/** LINK TO SignInSignUp page. <Link /> can accept props to send if need be**/}
  //       </Toolbar>
  //     </AppBar>
  //   </div>