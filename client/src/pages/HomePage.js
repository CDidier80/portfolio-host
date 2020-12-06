// import { Link } from 'react-router-dom'
// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
// // import IconButton from '@material-ui/core/IconButton';
// // import MenuIcon from '@material-ui/icons/Menu';
// import Menu from '@material-ui/core/Menu';
// import MenuItem from '@material-ui/core/MenuItem';

// import Card from '@material-ui/core/Card';
// import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//   },
//   menuButton: {
//     marginRight: theme.spacing(2),
//   },
//   title: {
//     flexGrow: 1,
//   },
// }));

// const useStylesTwo = makeStylesTwo({
//   root: {
//     maxWidth: 345,
//   },
//   media: {
//     height: 140,
//   },
// });

// const HomePage = (props) => {
//   const classes = useStyles();
//   const classesTwo = useStylesTwo();

//   const [anchorEl, setAnchorEl] = React.useState(null);

//   const handleClick = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleClose = () => {
//     setAnchorEl(null);
//   };

//    return (
//      <div className={classes.root}>
//        <AppBar position="static">
//          <Toolbar>
//            <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
//              Menu
//               </Button>
//            <Menu
//              id="simple-menu"
//              anchorEl={anchorEl}
//              keepMounted
//              open={Boolean(anchorEl)}
//              onClose={handleClose}
//            >
//              <MenuItem onClick={handleClose}> Login </MenuItem>
//              <MenuItem onClick={handleClose}>My account</MenuItem>
//              <MenuItem onClick={handleClose}> Browse developers</MenuItem>
//            </Menu>

//            <Typography variant="h6" className={classes.title}>
//            </Typography>
//            <Link to="/signInUp">
//              <Button color="#fce4ec">Login</Button>
//            </Link>
//          </Toolbar>
//        </AppBar>

//        <Card className={classesTwo.root}>
//          <CardActionArea>
//            <CardMedia
//              className={classesTwo.media}
//              image="/static/images/cards/contemplative-reptile.jpg"
//              title="Contemplative Reptile"
//            />
//            <CardContent>
//              <Typography gutterBottom variant="h5" component="h2">
//                Lizard
//           </Typography>
//              <Typography variant="body2" color="textSecondary" component="p">
//                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
//                across all continents except Antarctica
//           </Typography>
//            </CardContent>
//          </CardActionArea>
//          <CardActions>
//            <Button size="small" color="primary">
//              Share
//         </Button>
//            <Button size="small" color="primary">
//              Learn More
//         </Button>
//          </CardActions>
//        </Card>

//      </div>
//    )
// }

// export default HomePage
