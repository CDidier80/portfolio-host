// import React, { useState } from 'react'
import { Link } from 'react-router-dom'
// import Button from '@material-ui/core/Button';

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';

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
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              {/* <MenuIcon /> */}
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Browse
          </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </div>
      <h3>
        Welcome to Dev Ports
 </h3>
      <h4>
        Your site to easy share your portfolio and make new connection with other developers.
 </h4>
      <Link to="/login">
        <Button variant="outlined" color="primary">
          Login
 </Button>
      </Link>
      <Link to="/signup">
        <Button variant="outlined" color="primary">
          Sign up
 </Button>
      </Link>
    </div>
  );
}
// const HomePage = ()  => {
//   return(
// <div>
// <h3>
//   Welcome to Dev Ports
// </h3>
// <h4>
//   Your site to easy share your portfolio and make new connection with other developers.
// </h4>
// <Link to="/login">
//   <Button variant="outlined" color="primary">
//     Login
// </Button>
// </Link>
//   <Link to="/signup">
//     <Button variant="outlined" color="primary">
//       Sign up
// </Button>
//   </Link>
// </div>
//   )
// }

// export default HomePage