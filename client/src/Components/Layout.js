import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { Link, useLocation, useHistory } from 'react-router-dom';

import {Drawer, CssBaseline, AppBar, Typography, List, Divider, ListItem, Toolbar } from '@material-ui/core'

// Icons
import {ListItemIcon} from '@material-ui/core';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

const drawerWidth = 260

const useStyle = makeStyles({
    page: {
        background: '#f9f9f9',
        width: '100%',
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
        fontWeight: 600,
    }
})

// Drawer conent will be using this array of object in the future
const menuItems = [
    {
        text: "Dossiers",
        icon: "none",
        path: '/dossiers'
    },
    {
        text: "Employés",
        icon: "none",
        path: '/employés'
    },
    {
        text: "Facturation",
        icon: "none",
        path: '/facturation'
    },
    {
        text: "Paiements",
        icon: "none",
        path: '/paiements'
    },
]

const lowerMenuItems = [
    {
        text: "Information",
        icon: "none",
        path: '/information'
    },
    {
        text: "Mise a jour",
        icon: "none",
        path: '/miseajour'
    },
    {
        text: "Compte",
        icon: "none",
        path: '/compte'
    },
]

export default function Layout({children}) {
    const classes = useStyle()
    const location = useLocation()
    const history = useHistory()

    return (
        <div className={classes.root}> 
            {/* App bar*/} 

            {/* Side drawer */}        
            <Drawer
                className={classes.drawer}
                variant="permanent"
                anchor="left"
                classes={{ paper: classes.drawerPaper }}
            >
                {/* Drawer Header */}
                <div>
                    <Typography variant="h5">
                        PGS Gestion
                    </Typography>
                </div>

                {/* Drawer content list */}
                <Divider />

                <List>
                    {menuItems.map(item => (
                       <ListItem 
                            button
                            key={item.text}
                            onClick={()=> history.push(item.path)}
                            className={location.pathname == item.path ? classes.active : null}
                        >
                        <ListItemIcon><InboxIcon /></ListItemIcon>
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
                        <ListItemIcon><InboxIcon /></ListItemIcon>
                        <ListItemText primary={item.text} />
                        </ListItem>

                    ))}
                </List>
            </Drawer>

     

           <div className={classes.page}>
                {children}
           </div>
        </div>
    )
}
