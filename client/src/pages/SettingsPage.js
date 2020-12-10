import React, { useState, useEffect } from 'react'
import { CreateUser, LogInUser, ReadUser, UpdateUser, DeleteUser, CheckSessionService} from '../Services/UserService'
import { CreateProfile, ReadProfile, ReadAllProfiles, UpdateProfile} from '../Services/ProfileService'
import { CreateProject, ReadProject, UpdateProject, DeleteProject} from '../Services/ProjectsService'
import LoadingScreen from '../pages/subcomponents/LoadingScreen'
import NavBar from '../pages/subcomponents/NavBar'
import ProfileForm from '../pages/subcomponents/ProfileForm'
import { StylesProvider } from '@material-ui/core'

const SettingsPage = (props) => { 
    const [pageLoaded, setLoaded] = useState(false);


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
        }
    }

    return ( !pageLoaded ? <LoadingScreen /> :
        <div>
            <NavBar {...props} />  
            <div style={styles.settingsPageWrapper}>
                <ProfileForm {...props}  />
                
            </div>
        </div>
    )
}

export default SettingsPage


// firstTimeUser={firstTimeUser}