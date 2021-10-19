import React from "react";
import useStyles from "./styles";
import { BrowserRouter as Router, Switch, Route, Link, useLocation } from 'react-router-dom';

import Logo from "../../img/Logo/pgs_vector.svg";

import {Drawer, CssBaseline, AppBar, Typography, List, Divider, ListItem, Toolbar } from '@material-ui/core'

// Icons
import {ListItemIcon} from '@material-ui/core';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';


const LeftDrawer = () => {
  const classes = useStyles();
  const navList = ['Dossiers', 'Employés', 'Facturation', 'Paiements']
  const navListMore = ['Information', 'Mise a jour ', 'Compte']

  return (
    <div className={classes.root}>
         <CssBaseline />
      <AppBar position="relative" className={classes.appBar} color="inherit">
        <Toolbar>
          <Typography variant="h6" noWrap>
            <img src={Logo} id="logo" />
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
           <div/>
                <Divider />
                <List>
                    {navList.map((text, index) => (
                        <Link to={`/${text.toLowerCase()}`} key={index}>
                            <ListItem button key={text}>
                                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItem>
                        </Link>
                    ))}
                </List>
                <Divider />
                <List>
                    {navListMore.map((text, index) => (
                        <ListItem button key={text} key={index}>
                            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>

      </Drawer>
    </div>
  );
};

export default LeftDrawer;
