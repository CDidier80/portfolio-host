import React, { useState, useEffect } from 'react'
import { CreateUser, LogInUser, ReadUser, UpdateUser, DeleteUser, CheckSessionService} from '../Services/UserService'
import { CreateProfile, ReadProfile, ReadAllProfiles, UpdateProfile} from '../Services/ProfileService'
import { CreateProject, ReadProject, UpdateProject, DeleteProject} from '../Services/ProjectsService'
import LoadingScreen from '../pages/subcomponents/LoadingScreen'
import NavBar from '../pages/subcomponents/NavBar'
import ProfileForm from '../pages/subcomponents/ProfileForm'
import CloudinaryWidget from '../pages/subcomponents/CloudinaryWidget'
import { StylesProvider } from '@material-ui/core'

const SettingsPage = (props) => { 
    const [pageLoaded, setLoaded] = useState(false);
    const [widgetDisplayed, toggleWidget] = useState(false)

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
        }
    }
{/* <blockquote class="imgur-embed-pub" lang="en" data-id="iySHWfo"><a href="https://imgur.com/iySHWfo">View post on imgur.com</a></blockquote><script async src="//s.imgur.com/min/embed.js" charset="utf-8"></script> */}
    return ( !pageLoaded ? <LoadingScreen /> :
        <div>
            <NavBar {...props} />  
            <div style={styles.settingsPageWrapper}>
                {widgetDisplayed ? <CloudinaryWidget {...props} /> : null}
                <img onClick={()=>toggleWidget(!widgetDisplayed)} style={styles.profilePic} src={"https://i.imgur.com/iySHWfo.png"}></img>
                <h1 style={styles.nameTag}>Collin Didier</h1>
                <ProfileForm {...props}  />
            </div>
        </div>
    )
}

export default SettingsPage


{/* // firstTimeUser={firstTimeUser} */}


// {name}