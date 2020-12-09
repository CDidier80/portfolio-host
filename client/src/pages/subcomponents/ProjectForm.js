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


const ProjectForm = () => {
  // Hooks
  const [name, setName] = React.useState('Composed TextField');
  const classes = useStyles();
  const [projectTitle, setProjectTitle] = useState("")
  const [description, setDescription] = useState("")
  const [technologies, setTechnologies] = useState("")
  const [image, setImage] = useState("")
  const [link, setLink] = useState("")

  //event handlers
  const handleChange = (event) => {
    setName(event.target.value);
  };

  const updateTextField = async (e, updateFunction, props) => {
    e.preventDefault()
    // let value = e.target.value
    // await CreateProject(value)
    // console.log("value test: ", value)
    setProjectTitle(e.currentTarget.name.value)
    setDescription(e.currentTarget.name.value)
    setTechnologies(e.currentTarget.name.value)
    setImage(e.currentTarget.name.value)
    setLink(e.currentTarget.name.value)
  }

  // const submitForm = async (props) => {
  //   let payload = {
  //     projectTitle: projectTitle,
  //     description: description,
  //     technologies: technologies,
  //     image: image,
  //     link: link
  //   }
    // const result = await projectFunction(payload)
    // // do something with result if needed
    // props.history.push("/portfolio")
  // }

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
      <button> submit project</button>
    </div>
  );
}
export default ProjectForm



