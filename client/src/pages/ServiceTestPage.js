import React, {Component, useState} from 'react'
import { httpRequest } from '../httpRequest'
const path = "./subcomponents/ServiceTestComps"
// import DbTableCom from `${path}/DbTableCom`



const ServiceTest = (props) => {

    /* Hooks/State for User */
    const [userFunction, setUserFunction] = useState(null)
    const [userPayload, setUserPayload] = useState({})
    const [userDataRequest, setUserDataReq] = useState([])

    /* Hooks/State for Project */
    const [projectFunction, setProjectFunction] = useState(null)
    const [projectPayload, setProjectPayload] = useState(null)
    const [projectDataRequest,setProjectDataReq] = useState([])

    /* Hooks/State for Profile */
    const [profileFunction, setProfileFunction] = useState(null)
    const [profilePayload, setProfilePayload] = useState({})
    const [profileDataRequest, setProfileDataReq] = useState([])

    const userFields = ["name", "email", "password"]
    const profileFields = [ "userId", "profilePicture", "professionalTittle", "organization", "profilePicture", "professionalTittle", "skills", "locale", "bio" ]
    const projectsFields = [ /**"userId",**/ "title", "description", "technologies", "projectPicture", "deployLink" ]


    
    const database = {
        User: {
            requests :  {
                LogInUser   :  {body : ["name", "email"], params: ""},
                CreateUser  :  {body :  userFields, params: ""},
                ReadUser    :  {body : [], params:"userId"},
                UpdateUser  :  {body : ["name", "email", "password"], params: ""},
                DeleteUser  :  {body : [], params: "userId"},
            },
            stateSetters : {
                setRequest      :  setUserFunction, 
                setPayload      :  setUserPayload, 
                setProjectData  :  setUserDataReq,
                request         :  userFunction,
                payload         :  userPayload,
                data            :  userDataRequest
            } 
        },
        Profile: {
            requests :  {
                CreateProfile   :  {body: profileFields, params: ""},
                ReadProfile     :  {body:[], params: "profileId"},
                ReadAllProfiles :  {body:[], params: ""},
                UpdateProfile   :  {body:["name", "email"], params: "profileId"},
            },
            stateSetters : {
                setRequest      :  setProfileFunction, 
                setPayload      :  setProfilePayload, 
                setData         :  setProfileDataReq,
                request         :  profileFunction,
                payload         :  profilePayload,
                data            :  profileDataRequest
            } 
        },
        Projects: {
            requests :  {
                CreateProject   :  {body: projectsFields, params: "userId"},
                ReadProject     :  {body: [], params: "projectId"},
                GetAllProjects  :  {body: [], params: "userId"},
                UpdateProject   :  {body: projectsFields, params: "userId"}
            },
            state : {
                setRequest      :  setProjectFunction, 
                setPayload      :  setProjectPayload, 
                setData         :  setProjectDataReq,
                request         :  projectFunction,
                payload         :  projectPayload,
                data            :  projectDataRequest
            } 
        },
    }

    const pageFontFamily = "Roboto, sans-serif"
    const primaryTextColor = "#90caf9"
    const secondaryTextColor = "white"
    const styles = {
        pageWrapper: {
            position: "relative",
            top: "0",
            bottom: "0",
            left: "0",
            right: "0",
            minHeight: "100vw",
            minWidth: "100vw",
            padding: "0px 15px 0px 15px", 
            backgroundColor: "#121212"
        },
        pageTitle: {
            marginTop: "0px",
            paddingTop: "3vh",
            fontSize: "44px", 
            textAlign: "center",
            color: primaryTextColor,
            fontFamily: pageFontFamily,
            fontWeight: "900"
        },
        mainWrapper: {
            width: "85%",
            display: "grid", 
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            "gridGap": "1.8rem",
            margin: "0 auto",
            padding: "20px",
            borderRadius: "10px", 
            backgroundColor: "#121212", 
            color: secondaryTextColor

        },
        DatabaseModelWrapper: {
            position: "relative",
            minWidth: "300px", 
            maxWidth: "400px",
            minHeight: "400px",
            maxHeight: "70vh",
            backgroundColor: '#424242',
            textAlign: "center",
            fontFamily: pageFontFamily,
            borderRadius: "10px", 
            boxShadow: "0 0 3px white"
        },
        requestScrollPanel: {
            width: "85%",
            margin: "0 auto",
            padding: "7px",
            paddingBottom: "3px",
            color: secondaryTextColor,
            backgroundColor: "#bdbdbd",
            fontFamily: pageFontFamily, 
            borderRadius: "7px",
            overflow: "auto", 
            maxHeight: ''
        },
        controllerScrollItem: {
            width: "95%",
            padding: "6px",
            margin: "0 auto 4px auto",
            fontSize: "20px",
            textAlign: "left",
            fontFamily: pageFontFamily,
            color: secondaryTextColor,
            backgroundColor: "#2e2e2e",
            boxShadow: "0 0 2px black",
            borderRadius: "4px",
            fontWeight: "800",
            cursor: "pointer"
        },

        sendRequestButton: {
            width: "85%",
            position: "absolute",
            bottom: "10px",
            left: "0px", 
            right: "0px",
            padding: "6px",
            margin: "0 auto 4px auto",
            fontSize: "20px",
            textAlign: "center",
            fontFamily: pageFontFamily,
            color: primaryTextColor,
            backgroundColor: "#2e2e2e",
            boxShadow: "0 0 0 1px black",
            borderRadius: "4px",
            fontWeight: "800"
        },
    }
    

    const models = Object.keys(database) // ["User", "Profile", "Projects"]

    /* rename "styles" to "s" for component readability */
    let s = styles 
    return (
        <div style={s.pageWrapper}>
            <h1 style={s.pageTitle}>Full Stack Route Testing</h1>
            <main style={s.mainWrapper}>
                {models.map((model) => {
                    const modelObject = database[model]
                    const requests = modelObject["requests"] 
                    const state = modelObject["state"]
                    const {request, setRequest, payload, setPayload, data, setData, } = state
                    return (
                        <div key={model} style={s.DatabaseModelWrapper}>
                            <h1>{model}</h1>
                            <div style={s.requestScrollPanel}>
                                {requests.map((request) => {
                                    return (
                                        <div key={request}style={s.controllerScrollItem} onClick={() => setRequest(request)}>{request}</div>
                                    )
                                })}
                            </div>
                            <form>
                                {requests.body.map((field)=>{

                                    return (
                                    <input onChange={(e) => setPayload()}></input>
                                    )
                                })}
                                {/* {request.params !== "" ? <input onChange={(e) => value={e.target.value}></input> : null} */}
                            </form>
                            <button style={s.sendRequestButton}onClick={()=>httpRequest(request, payload, data)}>Send Request</button>
                        </div>
                    )
                })}
            </main>
        </div>
    )
}

export default ServiceTest


// next up => create text fields for 1) body, 2) params below the scroll panel