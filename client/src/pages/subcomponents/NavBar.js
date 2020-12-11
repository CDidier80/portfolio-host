import React, { useState, useEffect } from 'react';
import { NavLink } from "react-router-dom"
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
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    // position: "fixed",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  marginTop: "5vh"

}))

const styles = {
  logoHeader: {
    color: "white",
    fontFamily: "Roboto",
    fontSize: "1.4rem",
    textDecoration: "none",
    fontWeight: "bold",
    paddingLeft: "10px"

  }


}
const NavBar = (props) => {
  // console.log("LOG: NAVBAR PROPS: ", props)
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] =useState(false)

  const openHamburgerMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null)
  };

  const logOut = () => {
    setAnchorEl(null)
    props.setAuth(false)
    localStorage.clear()
  }

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  const handleClickAway = () => {
    setOpen(false);
  };

  return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>

          <IconButton aria-controls="simple-menu" aria-haspopup="true" onClick={openHamburgerMenu}>
          
            <MenuIcon />
            <ClickAwayListener onClickAway={handleClickAway}>
            <Menu id="simple-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
                <Link to="/">
                  <MenuItem onClick={handleClose}>Home</MenuItem>
                </Link>
                <Link to="/main">
                  <MenuItem onClick={handleClose}>Browse Profiles</MenuItem>
                </Link>
                {props.authenticated &&
                  <Link to="/settings">
                    <MenuItem onClick={handleClose}>Account Settings</MenuItem>
                  </Link>
                }
                {props.authenticated &&
                  <Link to="/portfolio">
                    <MenuItem onClick={handleClose}>Your Portfolio</MenuItem>
                  </Link>
                }
                {!props.authenticated &&
                  <Link to="/signin">
                    <MenuItem onClick={handleClose}>Sign In</MenuItem>

                  </Link>
                }
                {props.authenticated &&
                  <Link to={"/"}>
                    <MenuItem onClick={() => logOut()}>Sign Out</MenuItem>
                  </Link>
                }
              </Menu>
            </ClickAwayListener>
            </IconButton>




            {/* <Button aria-controls="simple-menu" aria-haspopup="true" onClick={openHamburgerMenu}> Menu </Button> */}

            <NavLink to="/" variant="h6" style={styles.logoHeader}>DevPortal</NavLink>
            {/** LINK TO SignInSignUp page. <Link /> can accept props to send if need be**/}
          </Toolbar>
        </AppBar>
      </div>
      
  )
}


export default NavBar