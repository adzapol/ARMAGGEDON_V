import React, { useState } from 'react'
import { observer } from 'mobx-react-lite'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'

// Header - Footer
import Header from './components/page/Header';
import Footer from './components/page/Footer';

// Страницы
import Home from './components/page/Home';
import Info from './components/page/Info';
import Contact from './components/page/Contact';
import Error from './components/page/Error';


import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';


// import Toolbar from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/Button';
// import MenuIcon from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Button';
// import Button from '@material-ui/core/Button';

// import asteroids from './store/asteroidsData'
// import ASTEROID from './components/asteroid';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(2),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

function ListItemLink(props) {
    return <ListItem button component="a" {...props} />;
}

const App = observer(function () {

    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <Router>
            <div className={classes.root}>
                <CssBaseline />
                <AppBar position="fixed" className={clsx(classes.appBar, { [classes.appBarShift]: open}) }>
                    <Toolbar>
                    <IconButton
                        color="inherit" aria-label="open drawer" onClick={handleDrawerOpen} edge="start" className={clsx(classes.menuButton, open && classes.hide)}>
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap>
                        ARMAGGEDON V
                    </Typography>
                    </Toolbar>
                </AppBar>
                <Drawer className={classes.drawer} variant="persistent" anchor="left" open={open} classes={{ paper: classes.drawerPaper }}>
                    <div className={classes.drawerHeader}>
                        <IconButton onClick={handleDrawerClose}>
                            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                        </IconButton>
                    </div>
                    <Divider />
                    <List>
                        {[{ name: 'Home', url: "/" }, { name: 'Info', url: "/info" }, { name: 'Contact', url: "/contact" }].map((text, index) => (
                            <ListItemLink href={text.url} key={text.name}>
                                <ListItem >
                                    <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                                    <ListItemText primary={text.name} />
                                </ListItem>
                            </ListItemLink>
                        ))}
                    </List>
                    <Divider />
                </Drawer>
                <main className={clsx(classes.content, { [classes.contentShift]: open}) }>
                    <div className={classes.drawerHeader} />
                    <Header />
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route exact path="/info" component={Info} />
                            <Route exact path="/contact" component={Contact} />
                            <Route component={Error} />
                        </Switch>
                    <Footer />
                </main>
            </div>
        </Router>
    )
})

export default App




            // {/* <AppBar position="fixed">
            //     <Container fixed>
            //         <Toolbar>
            //             <IconButton edge="start" color="inherit" aria-label="menu">
            //                 <MenuIcon />
            //             </IconButton>
            //             <Typography variant="h6">ARMAGGEDON V</Typography>
            //             <Box mr={3}>
            //                 <ul>
            //                     <li><a href="/">Home</a></li>
            //                     <li><a href="/info">Page info</a></li>
            //                     <li><a href="/contact">Contact</a></li>
            //                 </ul>
            //             </Box>
            //         </Toolbar>
            //     </Container>
            // </AppBar> */}


            

            
            // {/* <Header />
            //     <Switch>
            //         <Route exact path="/" component={Home} />
            //         <Route exact path="/info" component={Info} />
            //         <Route exact path="/contact" component={Contact} />
            //         <Route component={Error} />
            //     </Switch>
            // <Footer /> */}