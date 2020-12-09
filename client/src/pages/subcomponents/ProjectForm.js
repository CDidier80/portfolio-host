import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { makeStyles } from '@material-ui/core/styles';
import FilledInput from '@material-ui/core/FilledInput';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import { CreateProject } from '../../Services/ProjectsService'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));


const ProjectForm = (props) => {
    {/* Variables */}
    const classes = useStyles();

    {/* Hooks */}
    const [name, setName] = useState('Composed TextField')
    {/* <-------------- hooks for Create Project Payload */}
    const [projectTitle, setProjectTitle] = useState("")
    const [description, setDescription] = useState("")
    const [technologies, setTechnologies] = useState("")
    const [image, setImage] = useState("")
    const [link, setLink] = useState("")

    {/* Event Handlers */}
    const updateTextField = (e, formUpdateFunction) => {
      let val = e.target.value
      formUpdateFunction(val)
    };

    const submitNewProject = async (e) => {
      // console.log(props)
        let payload = {
          projectTitle: projectTitle,
          description: description,
          technologies: technologies,
          image: image,
          link: link
        }
        const result = await CreateProject(payload)
        console.log(result)
        props.setShowPopUp(false)
    }

  return (
    <div>
      <form className={classes.root} noValidate autoComplete="off">
        <FormControl>
          <InputLabel htmlFor="component-simple"> Project Title </InputLabel>
          <Input id="component-simple" onChange={(e) => updateTextField(e, setProjectTitle)}
            placeholder="project title" />
        </FormControl>

        <FormControl>
          <InputLabel htmlFor="component-simple"> description </InputLabel>
          <Input id="component-simple" onChange={(e) => updateTextField(e, setDescription)}
            placeholder="project title" />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="component-simple"> technologies </InputLabel>
          <Input id="component-simple" onChange={(e) => updateTextField(e, setTechnologies)}
            placeholder="project title" />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="component-simple"> image project </InputLabel>
          <Input id="component-simple" onChange={(e) => updateTextField(e, setImage)}
            placeholder="project title" />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="component-simple"> links to project </InputLabel>
          <Input id="component-simple" onChange={(e) => updateTextField(e, setLink)}
            placeholder="project title" />
        </FormControl>
      </form>
      <button onClick={() => submitNewProject()}> submit project</button>
    </div>
  );
}
export default ProjectForm



