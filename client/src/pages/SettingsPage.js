import React, { useState, useEffect } from 'react'
import { CreateUser, LogInUser, ReadUser, UpdateUser, DeleteUser, CheckSessionService} from '../Services/UserService'
import { CreateProfile, ReadProfile, ReadAllProfiles, UpdateProfile} from '../Services/ProfileService'
import { CreateProject, ReadProject, UpdateProject, DeleteProject} from '../Services/ProjectsService'
import LoadingScreen from '../pages/subcomponents/LoadingScreen'


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

    return ( !pageLoaded ? <LoadingScreen /> :
        <div>
            
        </div>
    )
}

export default SettingsPage