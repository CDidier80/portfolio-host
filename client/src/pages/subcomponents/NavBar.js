import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}))

const NavBar = (props) => {
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
              <Link to="/signin">
                <MenuItem onClick={handleClose}>Login</MenuItem>
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
            <Link to="/signin">
              <Button color="#fce4ec">Login</Button>
            </Link>
          </Toolbar>
        </AppBar>
      </div>
    </div>
  )
}

export default NavBar