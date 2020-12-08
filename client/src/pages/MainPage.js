import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import ProfileCard from '../pages/subcomponents/ProfileCard'
import { Link } from 'react-router-dom'

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
  textGreeting: {
    display: "block",
    marginLeft: "5vw",
    alignText: "left",
    welcome: {
      fontSize: "35px"
    },
    subHeader: {
      fontSize: "20px"
    },
  },
  httpTest: {
    margin: "0 auto",
    marginTop: "70px",
    width: "300px",
    height: "50px",
    display: "flex",
    justifyContent: "spaceBetween",
    textfield: {
      width: "60%",
      height: "80px",
      backgroundColor: "white",
      border: "1px solid black"
    },
    loginButton: {
      display: "block",
      margin: "0 auto",
      width: "80px",
      height: "40px",
      fontSize: "18px"
    },
    submitTestButton: {
      height: "80px",
      width: "80px",
      color: "black",
      backgroundColor: "white"
    }
  },
  profileCardWrapper: {
    display: "grid",
    gridTemplateColumns: "50% 50%",
    paddingTop: "13px",
    backgroundColor: "white",
    borderRadius: "10px",
    boxShadow: "0 0 4px white"
  }
}));


const MainPage = (props) => {

  const { httpRequest, get, put, post } = props
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const [displayedProfiles, setProfiles] = useState([])
  const [searchValue, setSearchField] = useState("")

  function FormRow() {
    return (
      <React.Fragment>
        <Grid item xs={6}>
          <Paper className={classes.paper}></Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}></Paper>
        </Grid>
      </React.Fragment>
    );
  }

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);


  };
  return (
    <div>
      {/* nav bar */}
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}> Menu </Button>
            <Menu id="simple-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose} >
              <Link to="/signInUp">
                <MenuItem onClick={handleClose}> Login </MenuItem>
              </Link>
              <Link to="/portfolio">
                <MenuItem onClick={handleClose}>My account</MenuItem>
              </Link>
              <Link to="/mainPage">
                <MenuItem onClick={handleClose}>Home</MenuItem>
              </Link>
            </Menu>
            <Typography variant="h6" className={classes.title}>DevPortal</Typography>
            {/** LINK TO SignInSignUp page. <Link /> can accept props to send if need be**/}
            <Link to="/signInUp">
              <Button color="#fce4ec">Login</Button>
            </Link>
          </Toolbar>
        </AppBar>
      </div>

      {/* start of profile box */}
      < div className={classes.profileCardWrapper} >
        <ProfileCard />
        <ProfileCard />
      </div >
    </div>
  )
}

export default MainPage





// const styles = {
//   customCardWrapper: {
//     maxHeight: "280px",
//     postition: "relative",
//     overflow: "auto",
//     display: "flex",
//     flexDirection: "column",
//     backgroundColor: "white",
//     borderRadius: "10px",
//     boxShadow: "0 0 4px white"
//   },
//   topHalf: {
//     width: "100%",
//     height: "140px",
//     padding: "4px",
//     postion: "relative",
//     fontFamily: "Roboto"
//   },
//   imageWrapper: {
//     width: "50%",
//   },
//   image: {
//     borderRadius: "5px",
//     boxShadow: "0 0 2px black"
//   },
//   textBox: {
//     width: "50%",
//     padding: "5px",
//     fontFamily: "Roboto"
//   },
//   bottomHalf: {
//     height: "140px",
//     padding: "5px",
//     fontFamily: "Roboto"
//   },
// }

  // < div style = { styles.profileCardWrapper } >
  //         <div style={styles.topHalf}>
  //           <div style={styles.imageWrapper}>
  //             <img style={styles.image} src={"https://media-exp1.licdn.com/dms/image/C4E03AQGUsbLOaj6-8A/profile-displayphoto-shrink_800_800/0/1594259451378?e=1613001600&v=beta&t=QeZtzDqZd4_ONzoRmBvE3v-O47fKZbqzyXrOxPTzhwk"} />
  //           </div>
  //           <div style={styles.textBox}>
  //             <h3>Collin Didier</h3>
  //             <h4>Software Engineer</h4>
  //           </div>
  //         </div>
  //         <div style={styles.bottomHalf}>
  //           <h3>slogan</h3>
  //           <h4>technologies</h4>
  //           <p>link</p>
  //         </div>
  //       </div >