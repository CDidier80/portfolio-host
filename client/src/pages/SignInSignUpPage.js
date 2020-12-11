// import SignInSignUpForm from "./subcomponents/SignInSignUpForm"
import React, { useState, useEffect } from 'react';
import { CreateUser, LogInUser, ReadUser, UpdateUser, DeleteUser, CheckSessionService } from '../Services/UserService'
import { CreateProfile, ReadProfile, ReadAllProfiles, UpdateProfile } from '../Services/ProfileService'
import { CreateProject, ReadProject, UpdateProject, DeleteProject } from '../Services/ProjectsService'
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
// import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Link } from 'react-router-dom';
import ProfileForm from "./subcomponents/ProfileForm"
import LoadingScreen from '../pages/subcomponents/LoadingScreen'
import NavBar from './subcomponents/NavBar';

const logs = [
  "LOG --> FILE: SignInSignUpPage.js, Function: useEffect --> function reached.",
  "User entered email and password: ",
  "Error thrown in SignInSignUpPage.js at handleLogin(): ",
  "User clicked sign up button.",
  "LOG: FILE: SignInSignUpPage.js FUNCTION: handleSignUp --> USER ACCOUNT CREATED SUCCESSFULLY",
  "LOG: FILE: SignInSignUpPage.js FUNCTION: handleSignUp --> CreateUser response: ",
  "LOG: FILE: SignInSignUpPage.js FUNCTION: handleSignUp --> failed to create account, but no error was thrown",
  "LOG: FILE: SignInSignUpPage.js FUNCTION: handleSignUp --> response: ",
  "Error thrown in SignInSignUpPage.js at handleSignUp(): "
]

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  buttonWrapper: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
  }
}));

const SignInSignUpPage = (props) => {
  // const {authenticated} = props
  {/* Variables */ }
  let messageOne = "Sign In", messageTwo = "Sign Up"
  let promptOne = "Don't have an account? Sign up", promptTwo = "Already have an account? Sign in"

  {/* Hooks */ }
  const [pageLoaded, setLoaded] = useState(true)
  const [message, toggleMessage] = useState("Sign In")
  const [prompt, togglePrompt] = useState("Don't have an account? Sign up")

  {/* <-------------- hooks for User Sign-in and Sign-up Payloads */ }
  const [name, setName] = useState("")
  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("")

  {/* useEffect() for loading screen */ }
  useEffect(() => {
    console.log(logs[0])
    if (!pageLoaded) {
      setLoaded(true)
    }
  }, []
  )
 const classes = useStyles();
  {/* EVENT HANDLERS */ }

  const togglemessage = (e) => {
    e.preventDefault()
    let newMessageValue = message === messageOne ? messageTwo : messageOne
    let newPrompt = prompt === promptOne ? promptTwo : promptOne
    toggleMessage(newMessageValue)
    togglePrompt(newPrompt)
    return
  }

  const updateTexfield = (e, stateFunction) => {   // [..., setState] 
    e.preventDefault()
    const { value } = e.target
    console.log("Field Value: ", value)
    stateFunction(value)
  }

  const handleLogin = async (e) => {
    e.preventDefault()
    try {
      console.log(logs[1], email, password)

      const response = await LogInUser({ email, password })
      if (response) {
        console.log("PAYLOAD RESPONSE FROM LOG IN: ", response)
        props.setUserInfo(response)
        props.setAuth(true)
        props.history.push('/main')
        
      }
      // console.log('wrong password')
    } catch (error) {
      console.log(logs[2], error)
    }
  }

  const handleSignUp = async (e) => {
    e.preventDefault()
    console.log(logs[3])
    try {
        const response = await CreateUser({ email, password, name })
        console.log(logs[4], response)
        console.log(response.message)
          // toggleProfileForm(true)
        if (response.status === 200){
          console.log(logs[5], response)
          togglemessage(e)
        }
            // updateUserFormInfo(auth: true, firstTimeUser: true,  toggleProfileForm: )
            
  //  else {
  //         console.log(logs[6])
  //         console.log(logs[7], response)


  //  }|
    } catch (error) {
      console.log(logs[8], error)
    }
  }


  const buttonEventHandler = message === "Sign In" ? handleLogin : handleSignUp

  return (!pageLoaded ? <LoadingScreen /> :
    <div>
        <NavBar {...props} />
        <div style={{marginTop:"25px"}}>
            <Link to="/">
              <Button color="#fce4ec" onClick={() => props.history.push("/")}>Back</Button>
            </Link>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}> <LockOutlinedIcon /> </Avatar>
                    <Typography component="h1" variant="h5">{message}</Typography>
                    <form className={classes.form} noValidate>
                        {message === "Sign Up" ? <TextField onChange={(e) => updateTexfield(e, setName)} variant="outlined" margin="normal" required fullWidth id="name" label="name" name="name" autoComplete="email" autoFocus /> : null}
                        <TextField onChange={(e) => updateTexfield(e, setEmail)} variant="outlined" margin="normal" required fullWidth id="email" label="Email Address" name="email" value={email} autoComplete="email" autoFocus />
                        <TextField onChange={(e) => updateTexfield(e, setPassword)} variant="outlined" margin="normal" required fullWidth name="password" label="Password" type="password" id="password" value={password} autoComplete="current-password" />
                        <FormControlLabel control={<Checkbox value="remember" color="primary" />} label="Remember me" />
                        <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit} onClick={(e) => buttonEventHandler(e)}>{message}</Button>
                        <Grid container>
                            <Grid item xs>
                                <Link href="#" variant="body2"> Forgot password? </Link>
                            </Grid>
                            <Grid item>
                                <Link to="#" variant="body2" onClick={(e) => togglemessage(e)}>{prompt}</Link>
                            </Grid>
                        </Grid>
                    </form>
              </div>
              {/* <Box mt={8}> </Box> */}
              </Container>
        </div>

    </div>

  )
}

export default SignInSignUpPage

// function Copyright() {
//   return (
//     <Typography variant="body2" color="textSecondary" align="center">
//       {'Copyright © '}
//       <Link color="inherit" href="https://material-ui.com/">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }



// setButtonMessage("")

  // const useEffect = () => {
  //     if (!pageIsLoaded) {
  //       setLoaded(true)
  //     },
  //      [message]
  //   }

    // const goToMainPage = () => {
  //   props.history.push('/main')
  // }

  // const submitSignUp = (e) => {
  //   const {username, email, password} = this.state
  //   const formData = {username: username, email: email, password: password}
  //   Service(formData)
  // }

  // const submitLogIn = async (e) => {
  //   // console.log('submitLogin() fired')
  //   const {toggleAuthenticated, email, password} = this.state
  //   e.preventDefault()
  //   const formData = {email: email, password: password}
  //   // console.log("formData sent to back-end: ", formData)
  //   const responseData =  await LoginUserService(formData)
  //   // console.log("Response received: ",responseData)
  //   // console.log("Username received as part of responseData: ", responseData.user.username)
  //   toggleAuthenticated(true, responseData.user.username, ()=>this.props.history.push('/main'))
  // }

  // updateField = (event) => {
  //   const {value} = event.target
  //   switch (event.target.id) {
  //     case "username":
  //       this.setState({username: value})
  //       break
  //     case "email":
  //       this.setState({email: value})
  //       break
  //     case "password":
  //       this.setState({password: value})
  //       break
  //     default: 
  //       console.log('updateField() switch statement originating in LandingPage.js had no matching cases.')
  //   }
  // }