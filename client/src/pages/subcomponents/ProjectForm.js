import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { makeStyles } from '@material-ui/core/styles';
import FilledInput from '@material-ui/core/FilledInput';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import { CreateProject, UpdateProject } from '../../Services/ProjectsService'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));


const ProjectForm = (props) => {
  {/* Variables */ }
  // console.log(props.userInfo)
  const classes = useStyles();

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
    console.log("lisa check", val)
    formUpdateFunction(val)
  };

  const submitProject = async (e) => {
    // e.preventDefault()
    try {
      let payload = {
        title: projectTitle,
        description: description,
        technologies: technologies,
        deployLink: link
      }
      const result = await CreateProject(payload)
      console.log(result)
      props.setShowPopUp(false)
      console.log("setshowup TEST", props.setShowPopUp())
    } catch (error) {
      throw error
    }
  }

  return (
    <div>
      <form className={classes.root} noValidate autoComplete="off">
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
        <input type="hidden" name="user_id" value={props.user.id}></input>
        {/* hidden - allowd you to send info that the user can not modify !!!!!!!!!!!!!!!*/}
        {/* <FormControl>
          <InputLabel htmlFor="component-simple"> links to project </InputLabel>
          <Input id="component-simple" onChange={(e) => updateTextField(e, setLink)}
            placeholder="project title" />
        </FormControl> */}
      </form>
      <button onClick={() => submitProject()}> submit project</button>
    </div>
  );
}
export default ProjectForm



