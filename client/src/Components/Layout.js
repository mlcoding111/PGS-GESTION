import React from 'react'
import { makeStyles } from '@mui/styles';
import { useLocation, useHistory } from 'react-router-dom';
import {format} from 'date-fns'
import Logo from '../img/Logo/pgs_vector.svg'
import {Drawer, CssBaseline, AppBar, Typography, List, Divider, ListItem, Toolbar, Avatar } from '@mui/material'

// Icons
import { ListItemIcon } from '@mui/material';
import ListItemText from '@material-ui/core/ListItemText';
import { Folder, Group, Receipt, CreditCard, Help, Update, AccountBox, AccountCircle, DeveloperModeSharp} from '@mui/icons-material';


// Redux import
import { useDispatch } from "react-redux";

import PageHeader from './Reusable/PageHeader';
import Dispatch from '../utils/Functions/Dispatch/Dispatch.js'

const drawerWidth = 240

const useStyle = makeStyles((theme) =>({
        page: {
            background: '#f9f9f9',
            width: '100%',
            padding: theme.spacing(3),
            height: '100vh'
        },
        drawer: {
            width: drawerWidth
        },
        drawPaper: {
            width : drawerWidth
        },
        root: {
            display: 'flex'
        },
        active: {
            background : '#FF7F7F!important',
            fontWeight: 'bold!important'
        },
        title: {
            padding: 25,
            paddingRight: 75,            
        },
        toolbar: theme.mixins.toolbar,
        appbar: {
            width: `calc(101% - ${drawerWidth}px)!important`,
            backgroundColor: '#313538!important'
        },
        date: {
            flexGrow: 1
        }
}))

// Drawer conent will be using this array of object in the future
const menuItems = [
    {
        text: "DEV",
        icon: <DeveloperModeSharp color="dark" variant="contained"/>,
        path: '/dev'
    },
    {
        text: "Dossiers",
        icon: <Folder color="dark" variant="contained"/>,
        path: '/dossiers'
    },
    {
        text: "Employés",
        icon: <Group/>,
        path: '/employés'
    },
    {
        text: "Facturations",
        icon: <Receipt/>,
        path: '/facturations'
    },
    {
        text: "Paiements",
        icon: <CreditCard/>,
        path: '/paiements'
    },
]

const lowerMenuItems = [
    {
        text: "Information",
        icon: <Help/>,
        path: '/information'
    },
    {
        text: "Mise a jour",
        icon: <Update/>,
        path: '/miseajour'
    },
    {
        text: "Compte",
        icon: <AccountBox/>,
        path: '/compte'
    },
]


export default function Layout({children}) {
    const dispatch = useDispatch()
    const classes = useStyle()
    const location = useLocation()
    const history = useHistory()
    let pathname
    
    React.useEffect(()=>{
        pathname = history.location.pathname.slice(1)
        dispatch(Dispatch.handleGetDispatch(pathname))
    }, [history.location.pathname])


    return (
        <div className={classes.root}> 

            {/* App bar*/} 
            <AppBar className={classes.appbar}>
                <Toolbar>
                    <Typography variant="h6" noWrap className={classes.date}>
                        <img src={Logo} id="logo" height="75" />
                    </Typography>
          
                    <Typography>
                        Stephane
                    </Typography>

                    <AccountCircle fontSize="medium"/>
                </Toolbar>
            </AppBar>

            {/* Side drawer */}        
            <Drawer
                className={classes.drawer}
                variant="permanent"
                anchor="left"
                classes={{ paper: classes.drawerPaper }}
            >
                {/* Drawer Header */}
                <div>
                    <Typography variant="h5" className={classes.title}>
                        PGS Gestion
                    </Typography>
                    
                    {/* <Typography className={classes.date, classes.title}>
                    { format(new Date(), 'do MMMM Y')}
                    </Typography> */}
                </div>

      
                <Divider />
                {/* Drawer content list */}
                <List>
                    {menuItems.map(item => (
                       <ListItem 
                            button
                            key={item.text}
                            onClick={()=> history.push(item.path)}
                            className={location.pathname === item.path ? classes.active : null}
                        >
                        <ListItemIcon>{item.icon}</ListItemIcon>
                        <ListItemText primary={item.text} />
                        </ListItem>

                    ))}
                </List>

                <Divider />

                <List>
                    {lowerMenuItems.map(item => (
                       <ListItem 
                            button
                            key={item.text}
                            onClick={()=> history.push(item.path)}
                            className={location.pathname === item.path ? classes.active : null}
                        >
                        <ListItemIcon>{item.icon}</ListItemIcon>
                        <ListItemText primary={item.text} />
                        </ListItem>

                    ))}
                </List>
            </Drawer>     

           <div className={classes.page}>
           <div className={classes.toolbar} />
                        <PageHeader
                        title={location.pathname.slice(1).toUpperCase()}
                        subTitle="..."/>
                {children}
           </div>
        </div>
    )
}
