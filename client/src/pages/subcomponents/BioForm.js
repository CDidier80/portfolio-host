import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';


const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    }
  },
}));

const BioForm = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState('Controlled');
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  }

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="portfolio-page-wrapper">
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}> Menu </Button>
            <Menu id="simple-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose} >

              {/* There should be 2 links -- one for sign in and one for sign up. They should conditionally render the SignInSignUpPage*/}
              <Link to="/joined">
                <MenuItem onClick={handleClose}>Login</MenuItem>
              </Link>
              <Link to="/portfolio">
                <MenuItem onClick={handleClose}>Portfolio</MenuItem>
              </Link>
              <Link to="/main">
                <MenuItem onClick={handleClose}>Home</MenuItem>
              </Link>
              <Link to="/settings">
                <MenuItem onClick={handleClose}>Account</MenuItem>
              </Link>
            </Menu>
            <Typography variant="h6" className={classes.title}>DevPortal</Typography>
            {/** LINK TO SignInSignUp page. <Link /> can accept props to send if need be**/}
            <Link to="/joined">
              <Button color="#fce4ec">Search</Button>
            </Link>
          </Toolbar>
        </AppBar>
      </div>
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <TextField
          id="standard-textarea"
          label="professional title"
          placeholder="professional title"
        />
        <TextField
          id="standard-textarea"
          label="organization"
          placeholder="Organization"
        />
        <TextField
          id="standard-textarea"
          label="locale"
          placeholder="locale"
        />
      </div>
      <div>
        <TextField
          id="standard-textarea"
          label="skills"
          placeholder="skills"
        />
        <TextField
          id="standard-textarea"
          label="Bio"
          placeholder="Bio"
        />
        <Link to="portfolio" >
        <Button variant="outlined" color="primary"> Submit </Button>
        </Link>
      </div>
    </form>
    </div>
  );
}

export default BioForm