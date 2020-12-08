// import SignInSignUpForm from "./subcomponents/SignInSignUpForm"
import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
// import Link from '@material-ui/core/Link';
// import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Link } from 'react-router-dom'

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

const formSubmit = (e) => {
  e.target.push('/main');
}

const SignUpPage = (props) => {
  const classes = useStyles();

  const signUpSubmit = async (event) => {
    console.log(event)
    // event.preventDefault()
    // try {
    //   await __RegisterUser(this.state)
    //   this.props.history.push('/signin')
    // } catch (error) {
    //   console.log(error)
    // }
  }

  const signInSubmit = async (event) => {
    console.log(event)
    // event.preventDefault()
    // try {
    //   const loginData = await __LoginUser(this.state)
    //   console.log(loginData)
    //   this.props.toggleAuthenticated(true, loginData.user, () =>
    //     this.props.history.push('/main')
    //   )
    // } catch (error) {
    //   this.setState({ formError: true })
    // }
  }

  return (
    <div>
      <Link to="/">
        <Button color="#fce4ec">Back</Button>
      </Link>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
        </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <div className={classes.buttonWrapper}>
              <Button type="button" onSubmit={signUpSubmit} variant="contained" color="primary" className={classes.submit}> Sign Up </Button>
              <Button type="button" onSubmit={signInSubmit} variant="contained" color="primary" className={classes.submit}> Sign In </Button>
            </div>
            <Box mt={5}>
            </Box>
          </form>
        </div>
        <Box mt={8}>
        </Box>
      </Container>
    </div>
  );
}

export default SignUpPage


  // < div >
  //     <Link to="/">
  //       <Button color="#fce4ec">Back</Button>
  //     </Link>
  //     <Container component="main" maxWidth="xs">
  //       <CssBaseline />
  //       <div className={classes.paper}>
  //         <Avatar className={classes.avatar}>
  //           <LockOutlinedIcon />
  //         </Avatar>
  //         <Typography component="h1" variant="h5"> {isSigningUp ? "Sign Up" : "Sign in"} </Typography> 
  //         <form className={classes.form} noValidate>
  //           {isSigningUp ? <TextField variant="outlined" margin="normal" required fullWidth id="username" label="Choose Username" name="username" onChange={(e) => updateField(e, 'username')} autoFocus /> : null}
  //           <TextField variant="outlined" margin="normal" required fullWidth id="email" label="Email Address" name="email" autoComplete="email" autoFocus onChange={(e) => updateField(e, 'email')} />
  //           <TextField variant="outlined" margin="normal" required fullWidth id="password" label={isSigningUp ? "Choose Password" : "Password"} name="password" onChange={(e) => updateField(e, 'password')} autoComplete="current-password" type="password" autoFocus />
  //           <FormControlLabel control={<Checkbox value="remember" color="primary" />} label="Remember me" />
  //           <Button type="button" onClick={(e) => formSubmit(e)} fullWidth variant="contained" color="primary" className={classes.submit}>{isSigningUp ? "CONFIRM AND SIGN IN" : "SIGN IN"}</Button>
  //           {!isSigningUp ? <Link href="#" variant="body1">{"Don't have an account? Sign Up"}</Link> : null}
  //           <Box mt={5}>
  //           </Box>
  //         </form>
  //       </div>
  //       <Box mt={8}>
  //       </Box>
  //     </Container>
  //   </div >