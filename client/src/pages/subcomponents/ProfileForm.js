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

const logs = [
"User Payload upon submit form click: ", 
"LOG: At form submit Profile Form identifies first time user as: ",
"LOG:-->  FILE: PorfileForm.js  FUNCTION: submitForm() --> API response: ",
"LOG --> FILE: PortfolioPage.js, Function: submitForm() --> function reached."
]

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '25ch',
  },
}));

const styles = {
  profileFormWrapper: {
    width: "70vw",
    minWidth: "600px",
    maxWidth: "1200px"
  }
}

// still needs cloudinary widget and event handler for string url of pic

const ProfileForm = (props) => {
  console.log("PROPS RECEIVED AT PROFILE FORM: ", props)
    const {profile, user} = props.userInfo
    // const {id: profileId, profilePicUrl, professionalTitle, organization, skills, locale, bio} = profile
    // const {id: userId, name} = user
    const classes = useStyles()
    {/* Hooks */}
    // const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState(null);
    const [profilePicUrl, setProfilePicUrl] = useState((profile.profilePicUrl !== null ? profile.profilePicUrl : ""))
    const [professionalTitle, setProfessionalTitle] = useState(profile.professionalTitle !== null ? profile.professionalTitle : "")
    const [organization, setOrganization] = useState(profile.organization !== null ? profile.organization : "")
    const [skills, setSkills] = useState(profile.skills !== null ? profile.skills : "")
    const [locale, setLocale] = useState(profile.locale !== null ? profile.locale : "")
    const [bio, setBio]       = useState(profile.bio !== null ? profile.bio : "")

    {/* Event Handlers */}
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
      setAnchorEl(null);
    };

    const submitForm = async (e) => {
      e.preventDefault()
        
        let payload = {
            id: profile.id,
            profilePicUrl : props.picUrl, 
            professionalTitle : professionalTitle, 
            organization : organization, 
            skills : skills, 
            locale : locale, 
            bio : bio, 
        }
        console.log(logs[0], payload)
        const profileResponse = await UpdateProfile(payload)
        console.log(logs[2], profileResponse)
        console.log(logs[3])
        props.history.push('/portfolio')
        return
    }

    const updateTextField = (e, updateFunction) => {
      e.preventDefault()
      let value = e.target.value 
      console.log("Text value: ", value)
      updateFunction(value)
    }
    const styles = {
      submitButton: {
        minWidth: "200x",
        height: "40px",
        fontSize: "14px",
        
        justifyContent: "center",
        justifySelf: "center",
        alignContent: "center"
        
    },
    submitButtonWrapper: {
        marginTop: "20px"
    }
    }

  return (
    <div>
        <div style={styles.profileFormWrapper}>
                            {/* Professional Title */}
          <TextField  onChange={(e)=>updateTextField(e, setProfessionalTitle)}   label="professional title" style={{ margin: 8 }} placeholder={profile.professionalTitle} fullWidth margin="normal" InputLabelProps={{ shrink: true, }} />

                            {/* Organization */}
          <TextField  onChange={(e)=>updateTextField(e, setOrganization)}        label="Organization" style={{ margin: 8 }} placeholder={profile.organization} fullWidth margin="normal" InputLabelProps={{ shrink: true, }} />

                            {/* Locale */}
          <TextField  onChange={(e)=>updateTextField(e, setLocale)}              label="Locale" style={{ margin: 8 }} placeholder={profile.locale} fullWidth margin="normal" InputLabelProps={{ shrink: true, }} />

                            {/* Skills */}
          <TextField onChange={(e)=>updateTextField(e, setSkills)}              label="Skills" style={{ margin: 8 }} placeholder={profile.skills} fullWidth margin="normal" InputLabelProps={{ shrink: true, }} />

                            {/* Biography */}
          <TextField  onChange={(e)=>updateTextField(e, setBio)}                 label="Biography" style={{ margin: 8 }} placeholder={profile.bio} fullWidth margin="normal" InputLabelProps={{ shrink: true, }} />
      </div>

      <div style={styles.submitButtonWrapper}>
          <Button styles={styles.submitButton} variant="contained" color="primary" onClick={(e)=>submitForm(e)}>Submit</Button>
      </div>

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