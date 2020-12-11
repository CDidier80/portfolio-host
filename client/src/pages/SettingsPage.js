import React, { useState, useEffect } from 'react'
import { CreateUser, LogInUser, ReadUser, UpdateUser, DeleteUser, CheckSessionService} from '../Services/UserService'
import { CreateProfile, ReadProfile, ReadAllProfiles, UpdateProfile} from '../Services/ProfileService'
import { CreateProject, ReadProject, UpdateProject, DeleteProject} from '../Services/ProjectsService'
import LoadingScreen from '../pages/subcomponents/LoadingScreen'
import NavBar from '../pages/subcomponents/NavBar'
import ProfileForm from '../pages/subcomponents/ProfileForm'
import CloudinaryWidget from '../pages/subcomponents/CloudinaryWidget'
import { StylesProvider } from '@material-ui/core'
import Button from '@material-ui/core/Button';

const SettingsPage = (props) => { 
    const {profile, user} = props.userInfo
    const [pageLoaded, setLoaded] = useState(false);
    const [widgetDisplayed, toggleWidget] = useState(false)
    const [picUrl, setPicUrl] = useState("")

    // const {name} = props.name
    {/* useEffect() for loading screen */}
    useEffect(() => {
        console.log("LOG --> FILE: SettingsPage.js, Function: useEffect --> function reached.")
            if (!pageLoaded) {
            setLoaded(true)
            }
        },
    [pageLoaded]
    ) 

    const styles = {
        settingsPageWrapper: {
            marginTop: "40px",
            margin: "0 auto",
            width: "70vw",
            minWidth: "600px", 
            maxWidth: "1200px"
        },

        profilePic: {
            display: "block",
            maxWidth: "200px", 
            borderRadius: "50%",
            border: "3px solid black",
            margin: "45px auto",
        },

        nameTag: {
            fontFamily: "Roboto",
            fontSize: "38px",
            textAlign: "center",
            fontWeight: "bold"
        },
        deleteButton: {
            minWidth: "200x",
            height: "40px",
            fontSize: "14px",
            
            justifyContent: "center",
            justifySelf: "center",
            alignContent: "center"
            
        },
        deleteButtonWrapper: {
            display: "block",
            margin: "0 auto",
            marginTop: "20vh",
            width: "300px",
            paddingLeft: "70px"
        }
    }

    const deleteAccount = async (e) => {
        e.preventDefault()
        let response = await DeleteUser(user.id)
        console.log("DEATH REPORT =======> D:  : ", response)
        props.setAuth(false)
        localStorage.clear()
        props.history.push("/")
    }

{/* <blockquote class="imgur-embed-pub" lang="en" data-id="iySHWfo"><a href="https://imgur.com/iySHWfo">View post on imgur.com</a></blockquote><script async src="//s.imgur.com/min/embed.js" charset="utf-8"></script> */}
    return ( !pageLoaded ? <LoadingScreen /> :
        <div>
            <NavBar {...props} />  
            <div style={styles.settingsPageWrapper}>
                {widgetDisplayed ? <CloudinaryWidget widgetOpen={true} {...props} setPicUrl={setPicUrl} /> : null}
                <img onClick={()=>toggleWidget(!widgetDisplayed)} style={styles.profilePic} src={profile.profilePicture}></img>
                <h1 style={styles.nameTag}>{user.name}</h1>
                <ProfileForm {...props}  picUrl={picUrl}/>
                <div style={styles.deleteButtonWrapper}>
                    <Button styles={styles.deleteButton} variant="contained" color="primary" onClick={(e)=>deleteAccount(e)}>Delete Account</Button>
                </div>
            </div>
        </div>
    )
}



export default SettingsPage

{/* // firstTimeUser={firstTimeUser} */}


// {name}