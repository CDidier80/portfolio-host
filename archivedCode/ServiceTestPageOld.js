import React, {Component, useState} from 'react'
import { httpRequest } from '../httpRequest'
const path = "./subcomponents/ServiceTestComps"
// import DbTableCom from `${path}/DbTableCom`



const ServiceTest = (props) => {

    /* Hooks/State for User */
    const [userController, selectUserController] = useState(null)
    const [userPayload, setUserPayload] = useState({body:[], params: ""})
    const [userDataRequest, setUserDataReq] = useState([])

    /* Hooks/State for Project */
    const [projectController, selectProjectController] = useState(null)
    const [projectPayload, setProjectPayload] = useState({body:[], params: ""})
    const [projectDataRequest,setProjectDataReq] = useState([])

    /* Hooks/State for Profile */
    const [profileController, selectProfileController] = useState(null)
    const [profilePayload, setProfilePayload] = useState({body:[], params: ""})
    const [profileDataRequest, setProfileDataReq] = useState([])

    /* Database Table Column Arrays */
    const userFields = ["name", "email", "password"]
    const profileFields = [ "userId", "profilePicture", "professionalTittle", "organization", "profilePicture", "professionalTittle", "skills", "locale", "bio" ]
    const projectsFields = [ /**"userId",**/ "title", "description", "technologies", "projectPicture", "deployLink" ]


    const database = {
        User: {
            requests :  {
                LogInUser           :  {body : ["name", "email"], params: ""},
                CreateUser          :  {body :  userFields, params: ""},
                ReadUser            :  {body : [], params:"userId"},
                UpdateUser          :  {body : ["name", "email", "password"], params: ""},
                DeleteUser          :  {body : [], params: "userId"},
            },
            state : {
                selectController    :  selectUserController, 
                selectedController  :  userController,
                setPayload          :  setUserPayload, 
                setProjectData      :  setUserDataReq,
                payload             :  userPayload,
                data                :  userDataRequest
            }  
        }, 
        Profile: { 
            requests :  { 
                CreateProfile       :  {body: profileFields, params: ""},
                ReadProfile         :  {body:[], params: "profileId"},
                ReadAllProfiles     :  {body:[], params: ""},
                UpdateProfile       :  {body:["name", "email"], params: "profileId"},
            }, 
            state : { 
                selectController    :  selectProfileController, 
                selectedController  :  profileController,
                setPayload          :  setProfilePayload, 
                setData             :  setProfileDataReq,
                payload             :  profilePayload,
                data                :  profileDataRequest
            }  
        }, 
        Projects: { 
            requests :  { 
                CreateProject       :  {body: projectsFields, params: "userId"},
                ReadProject         :  {body: [], params: "projectId"},
                GetAllProjects      :  {body: [], params: "userId"},
                UpdateProject       :  {body: projectsFields, params: "userId"}
            }, 
            state : { 
                selectController    :  selectProjectController, 
                selectedController  :  projectController,
                setPayload          :  setProjectPayload, 
                setData             :  setProjectDataReq,
                payload             :  projectPayload,
                data                :  projectDataRequest
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

    // rename "styles" to "s" for component readability
    let s = styles 
    return (
        <div style={s.pageWrapper}>
            <h1 style={s.pageTitle}>Full Stack Route Testing</h1>
            <main style={s.mainWrapper}>

            {/* CARD/WRAPPER FOR EACH DATABASE TABLE */}
                {models.map((model) => {
                    const modelObject = database[model]
                    const requests = modelObject["requests"]
                    const requestsKeys = Object.keys(requests)
                    const state = modelObject["state"]
                    const {selectController, selectedController, payload, setPayload, data, /**setData,**/ } = state
                    const {body, params} = selectedController
                    return (
                        <div key={model} style={s.DatabaseModelWrapper}>
                            <h1>{model}</h1>

                        {/* SCROLL PANEL FOR EACH TABLE'S CONTROLLER FUNCTIONS */}
                            <div style={s.requestScrollPanel}>
                            
                            {/*SCROLL ITEMS FOR EACH OF THE DB TABLE'S CONTROLLER FUNCTIONS POPULATE THE SCROLL PANEL*/}
                                {requestsKeys.map((requestKey) => {
                                    const controllerIfChosen = requests[requestKey]
                                    return (
                                        <div key={requestKey} style={s.controllerScrollItem} onClick={() => selectController(controllerIfChosen)}>{requestKey}</div>
                                    )
                                })}
                            </div>
                            {/* SCROLL ITEMS END */}
                        {/* SCROLL PANEL ENDS */}

                        {/* FORM PANEL BEGINS */} 
                        { //A Form With Input Fields Will Render If User Selects A Controller Function 
                        // No Form Fields Will Appear Until A Controller Is Clicked
                        }
                            {selectedController === null ? null :
                            <form>
                                {/* INPUT FIELDS */}  
                                    {/* -- input textfields corresponding to fields in payload body for selected controller */}  
                                    {requestsKeys.map((requestKey) => {
                                        const payloadContent = requests[requestKey]
                                        const payloadBody = payloadContent.body        // array of fields to send to db
                                        const payloadParams = payloadContent.params    // an empty string if no params, or a string whose value is params appendation 

                                        return <input onChange={(e) => setPayload("hello")}>FIELD</input>
                                    })}
                                    {/* -- one input field for params string renders if selected controller uses it */} 
                                    { params && <input>PARAMS FIELD HAS RENDERED</input> } 
                                </form>
                            }
                            <button style={s.sendRequestButton}onClick={()=>httpRequest(selectedController, payload, data)}>Send Request</button>
                        </div>
                    )
                })}
            </main>
        </div>
    )
}

// export default ServiceTest

{/*</form>onChange={(e) => value={e.target.value}*/}
//  Tables need scroll items

// Each scroll items need to be able to be clicked
// On click, they need to set the focus of the form to the selected function
// If no function is focused on, there are no fields to add body/params
// When the focus is set in state, the page will rerender
// There needs to be conditionally rendered text fields corresponding to the body and params of the selected 
// fields must check if a function is focused on
// They will activate when function focus is set by scroll item button click



// next up => create text fields for 1) body, 2) params below the scroll panel