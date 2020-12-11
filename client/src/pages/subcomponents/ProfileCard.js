import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import { Link, NavLink } from 'react-router-dom'



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 660,
    borderRadius: "5px",
    boxShadow: "0 0 4px black"
  },
  image: {
    width: 128,
    height: 128,
    border: "1px solid black",
    borderRadius: "5px",
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
    borderRadius: "5px",
    boxShadow: "0 0 4px black"
  }
}));


const ProfileCard = (props) => {
  let profile = props.profile
  console.log('inside prop:',props.profile.profilePicture)
  const {bio, id, name, locale, organization, professionalTitle, profilePicture, skills, userId} = props.profile
  
  // console.log("profile logged in ProfileCard: ", profile)
  const classes = useStyles();

  // props.history.location["state"] = props
  return (
    <div>
      <div className={classes.root}>
        <Paper style={{ Width: "50%" }} className={classes.paper}>
          <Grid container spacing={2}>
            <Grid item>
              <ButtonBase className={classes.image}> 
                <img className={classes.img} alt="complex" src={profilePicture} />
              </ButtonBase>
              <Typography className={name} gutterBottom variant="subtitle1">{props.profile.user.name}</Typography> 
            </Grid>
            <Grid item xs={6} sm container>
              <Grid item xs container direction="column" spacing={4}>
                <Grid item xs>

                  {/* <Typography className={name} gutterBottom variant="subtitle1">{props.profile.user.name}</Typography>  */}

                  {/* <Typography className={classes.img} src={profile.profilePicture}></Typography>  */}
                  <Typography gutterBottom variant="subtitle1">{professionalTitle}</Typography>
                  <Typography variant="body2" gutterBottom>{bio}</Typography>
                  <Typography variant="body2">{skills}</Typography>
                </Grid>
                <Grid item>
                  <NavLink className="signupNavlink" to={{pathname: "/portfolio", state: {profile: profile}}}>View Portfolio</NavLink>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </div>
    </div>
  )
}

export default ProfileCard




{/* <div>
<div className={classes.root}>
  <Paper style={{ Width: "50%" }} className={classes.paper}>
    <Grid container spacing={2}>
      <Grid item>
        <ButtonBase className={classes.image}>
          <img className={classes.img} alt="complex"
            src="https://media-exp1.licdn.com/dms/image/C4E03AQGUsbLOaj6-8A/profile-displayphoto-shrink_800_800/0/1594259451378?e=1613001600&v=beta&t=QeZtzDqZd4_ONzoRmBvE3v-O47fKZbqzyXrOxPTzhwk" />
        </ButtonBase>
      </Grid>
      <Grid item xs={6} sm container>
        <Grid item xs container direction="column" spacing={4}>
          <Grid item xs>
            <Typography className={classes.namePerson} gutterBottom variant="subtitle1">
              Collin Didier
          </Typography>
            <Typography gutterBottom variant="subtitle1">
              Full Stack Developer
          </Typography>
            <Typography variant="body2" gutterBottom>
              Developer keen to create better code and debug all errors.
              Click on my portfolio to see some of my work.
          </Typography>
            <Typography variant="body2" >
              Technologies: React, Javascript, Phyton, MongoDb
          </Typography>
          </Grid>
          <Grid item>
            <Link to="portfolio">
              <Typography variant="body2" style={{ cursor: 'pointer' }} className={classes.linkPort}>
                See portfolio
          </Typography>
            </Link>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  </Paper>
</div>
</div> */}