import { Link } from 'react-router-dom'
import React from 'react';
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
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

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
            <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
              Menu
              </Button>
                <Menu
                  id="simple-menu"
                  anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  <MenuItem onClick={handleClose}> Login </MenuItem>
                  <MenuItem onClick={handleClose}>My account</MenuItem>
                  <MenuItem onClick={handleClose}>Browse developers</MenuItem>
                </Menu>

            <Typography variant="h6" className={classes.title}>
              {/* Dev Ports */}
          </Typography>
          <Link to="/signInUp">
              <Button color="#fce4ec">Login</Button>
            </Link>
          </Toolbar>
        </AppBar>
      </div>
      <h3>
        Welcome to Dev Ports
 </h3>
      <h4>
        Your site to easy share your portfolio and make new connection with other developers.
 </h4>
      <Link to="/signInUp">
        <Button variant="outlined" color="primary">
          Login
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