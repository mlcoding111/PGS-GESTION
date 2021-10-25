// This is the main app file
import React, { useEffect } from "react";
import Layout from "./Components/Layout";

// Redux import
import { useDispatch } from "react-redux";
import { getPosts } from './actions/posts'

// Routes
import Home from "./Components/Home";
import Dev from './Components/Dev/Dev'
import Employee from "./Components/pages/Employees/Employee";
import AddEmployee from "./Components/pages/Employees/Add/AddEmployeePage";
import Facturation from "./Components/pages/Facturations/Facturations";
import Paiements from "./Components/pages/Paiements/Paiements";
import Dossiers from "./Components/pages/Dossiers/Dossiers";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

const App = () => {
  const dispatch = useDispatch()

  useEffect(()=>{
      dispatch(getPosts())
      console.log('dispatch')
  }, [dispatch])
  
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/dev">
              <Dev />
            </Route>
            <Route exact path="/employés">
              <Employee />
            </Route>
            <Route exact path="/employés/ajout">
              <AddEmployee />
            </Route>
            <Route exact path="/dossiers">
              <Dossiers />
            </Route>
            <Route exact path="/paiements">
              <Paiements/>
            </Route>
            <Route exact path="/facturations">
              <Facturation />
            </Route>
          </Switch>
        </Layout>
      </Router>
    </ThemeProvider>
  );
};

export default App;
