import React, { useState } from 'react';
import ReactDOM from 'react-dom';

// import  makeclasses from '@material-ui/core/classes';
import FilledInput from '@material-ui/core/FilledInput';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import { CreateProject, UpdateProject } from '../../Services/ProjectsService'

// const useclasses = makeclasses((theme) => ({
//   root: {
//     '& > *': {
//       margin: theme.spacing(1),
//     },
//   },
// }));


const ProjectForm = (props) => {
  {/* Variables */ }
  console.log("LOG: ProjectForm.js --> PROPS RECEIVED, ", props)
  const {profile, user} = props.userInfo
  const projectServiceFunction = props.updateOrCreate === "create" ? CreateProject : UpdateProject
  // const classes = useclasses();

  {/* Hooks */ }
  const [name, setName] = useState('Composed TextField')
  {/* <-------------- hooks for Create Project Payload */ }
  const [projectTitle, setProjectTitle] = useState("")
  const [description, setDescription] = useState("")
  const [technologies, setTechnologies] = useState("")
  // const [image, setImage] = useState("")
  const [link, setLink] = useState("")



  {/* Event Handlers */ }
    const updateTextField = (e, formUpdateFunction) => {
      let val = e.target.value
      console.log("TEXTFIELD VALUE:", val)
      formUpdateFunction(val)
    };

    const submitProject = async (e) => {
      e.preventDefault()
      try {
        let payload = {
          id: user.id,
          title: projectTitle,
          description: description,
          technologies: technologies,
          deployLink: link,

        }
        const result = await projectServiceFunction(payload)
        console.log(result)
        props.togglePopup(false)
      } catch (error) {
        throw error
      }
    }




  return (
    <div>
        <div style={null} />
        <div style={null} aria-modal aria-hidden tabIndex={-1} role="dialog">
            <div style={null}>
                <div style={null}>
                    <button type="button"  data-dismiss="modal" aria-label="Close" onClick={null}>
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div>
                  <form className={null} noValidate autoComplete="off">
                    <FormControl>
                      <InputLabel htmlFor="component-simple"> Project Title </InputLabel>
                      <Input name="title" id="component-simple" onChange={(e) => updateTextField(e, setProjectTitle)}
                        placeholder="project title" />
                    </FormControl>

                    <FormControl>
                      <InputLabel htmlFor="component-simple"> description </InputLabel>
                      <Input name="description" id="component-simple" onChange={(e) => updateTextField(e, setDescription)}
                        placeholder="description" />
                    </FormControl>
                    <FormControl>
                      <InputLabel htmlFor="component-simple"> technologies </InputLabel>
                      <Input name="technologies" id="component-simple" onChange={(e) => updateTextField(e, setTechnologies)}
                        placeholder="technologies" />
                    </FormControl>
                    <FormControl>
                      <InputLabel htmlFor="component-simple"> deploy link </InputLabel>
                      <Input name="deployLink" id="component-simple" onChange={(e) => updateTextField(e, setLink)}
                        placeholder="deploy Link" />
                    </FormControl>
                    <input type="hidden" name="user_id" value={user.id}></input>
                    {/* hidden - allowd you to send info that the user can not modify !!!!!!!!!!!!!!!*/}
                    {/* <FormControl>
                      <InputLabel htmlFor="component-simple"> links to project </InputLabel>
                      <Input id="component-simple" onChange={(e) => updateTextField(e, setLink)}
                        placeholder="project title" />
                    </FormControl> */}
                  </form>
                  <button onClick={(e) => submitProject(e)}> submit project</button>
                </div>
            </div>
        </div>
    </div>

)}

export default ProjectForm

