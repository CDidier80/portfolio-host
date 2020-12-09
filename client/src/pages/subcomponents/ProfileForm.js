import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Link } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '25ch',
  },
}));



const ProfileForm = (props) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };


  return (
    <div>
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}> Menu </Button>
            <Menu id="simple-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose} >
              <Link to="/joined">
                <MenuItem onClick={handleClose}> Login </MenuItem>
              </Link>
              <Link to="/portfolio">
                <MenuItem onClick={handleClose}>My account</MenuItem>
              </Link>
              <Link to="/main">
                <MenuItem onClick={handleClose}>Home</MenuItem>
              </Link>
            </Menu>
            <Typography variant="h6" className={classes.title}>DevPortal</Typography>
            {/** LINK TO SignInSignUp page. <Link /> can accept props to send if need be**/}
          </Toolbar>
        </AppBar>

        <form>
          <div>
            <TextField
              id="standard-full-width"
              label="professional title"
              style={{ margin: 8 }}
              placeholder="professional title"
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              id="standard-full-width"
              label="organization"
              style={{ margin: 8 }}
              placeholder="organization"
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              id="standard-full-width"
              label="locale"
              style={{ margin: 8 }}
              placeholder="locale"
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              id="standard-full-width"
              label="skills"
              style={{ margin: 8 }}
              placeholder="skills"
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              id="standard-full-width"
              label="Bio"
              style={{ margin: 8 }}
              placeholder="Bio"
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </div>
        </form>
      </div>
      <button> Submit </button>
    </div>
  );
}


export default ProfileForm

  // < div className = "portfolio-page-wrapper" >
  //   <div className={classes.root}>
  //     <AppBar position="static">
  //       <Toolbar>
  //         <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}> Menu </Button>
  //         <Menu id="simple-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose} >

  //           {/* There should be 2 links -- one for sign in and one for sign up. They should conditionally render the SignInSignUpPage*/}
  //           <Link to="/joined">
  //             <MenuItem onClick={handleClose}>Login</MenuItem>
  //           </Link>
  //           <Link to="/portfolio">
  //             <MenuItem onClick={handleClose}>Portfolio</MenuItem>
  //           </Link>
  //           <Link to="/main">
  //             <MenuItem onClick={handleClose}>Home</MenuItem>
  //           </Link>
  //           <Link to="/settings">
  //             <MenuItem onClick={handleClose}>Account</MenuItem>
  //           </Link>
  //         </Menu>
  //         <Typography variant="h6" className={classes.title}>DevPortal</Typography>
  //         {/** LINK TO SignInSignUp page. <Link /> can accept props to send if need be**/}
  //       </Toolbar>
  //     </AppBar>
  //   </div>