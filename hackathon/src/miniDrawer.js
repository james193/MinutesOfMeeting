import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles'
import InputFileReader from './fileRead1';
import {Link} from 'react-router-dom'
import axios from 'axios'
import data from './output.json'

const drawerWidth = 240;
const styles = theme =>({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    marginLeft: drawerWidth,
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
})

class ResponsiveDrawer extends React.Component{
  constructor(props){
    super(props);
    this.state = {
        from:data.FROM,
        to:data.TO,
        cc:data.CC,
        subject:data.SUBJECT,
        message:this.props.td,
        mobileOpen:false,
        flip:false,
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleClick1 = this.handleClick1.bind(this);
    this.handleDrawerToggle = this.handleDrawerToggle.bind(this);
    this.handleStateChange = this.handleStateChange.bind(this);
  }
  handleStateChange(e){
    this.setState({
      [e.target.name]:e.target.value
    })
  }
  handleDrawerToggle() {
    this.setState({
      mobileOpen:!this.state.mobileOpen
    })
  }
  handleClick1(){
    this.setState({
      flip:!this.state.flip
    })
  }
  handleClick(){
    alert("Mail sent succesfully");
    /*Code to send mail*/
    const userData = {
        "FROM": this.state.from,
        "TO": this.state.to,
        "CC":this.state.cc,
        "SUBJECT":this.state.subject,
        "MESSAGE":this.state.message
    };

    axios.post(`http://localhost:5000/mail`, { userData })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
    /*Code to send mail*/
  }
  render(){
    const { container,classes} = this.props;
    const theme = styles;
    const drawer = (
      <div>
        <div className={classes.toolbar} />
        <Divider />
        <List>
          <ListItem button onClick={this.handleClick}>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Send Mail" />
          </ListItem>
          <ListItem button onClick={this.handleClick1}>
            <ListItemIcon>
             <MailIcon />
            </ListItemIcon>
            <ListItemText primary="Review" />
          </ListItem>
          <ListItem button component={Link} to="/">
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
        </List>
      </div>
    );
    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              edge="start"
              onClick={this.handleDrawerToggle}
              className={classes.menuButton}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap>
              Meeting Assistance
            </Typography>
          </Toolbar>
        </AppBar>
        <nav className={classes.drawer} aria-label="Mailbox folders">
          <Hidden smUp implementation="css">
            <Drawer
              container={container}
              variant="temporary"
              anchor={theme.direction === 'rtl' ? 'right' : 'left'}
              open={this.state.mobileOpen}
              onClose={this.handleDrawerToggle}
              classes={{
                paper: classes.drawerPaper,
              }}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
            >
              {drawer}
            </Drawer>
          </Hidden>
          <Hidden xsDown implementation="css">
            <Drawer
              classes={{
                paper: classes.drawerPaper,
              }}
              variant="permanent"
              open
            >
              {drawer}
            </Drawer>
          </Hidden>
        </nav>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Typography paragraph>
            <InputFileReader stateVar={this.state} handleStateChange={this.handleStateChange} handleClick1={this.handleClick1}/>
          </Typography>
        </main>
      </div>
    );
  }
}

ResponsiveDrawer.propTypes = {
  // Injected by the documentation to work in an iframe.
  // You won't need it on your project.
  container: PropTypes.object,
};
export default withStyles(styles)(ResponsiveDrawer);