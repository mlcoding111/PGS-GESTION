// This is the main app file
import React, { useEffect } from "react";
import Layout from "./Components/Layout";

// Redux import
import { useDispatch } from "react-redux";
import { getPosts } from './actions/posts'
import { getDossiers } from './actions/dossiers'
import { getPaiements } from './actions/paiements'
import { getFacturations } from './actions/facturations'
import { getEmployers } from './actions/employers'

import { DataGrid, frFR } from '@mui/x-data-grid';
import { frFR as Fr} from '@mui/material/locale';

// Routes
import Home from "./Components/Home";
import Dev from './Components/Dev/Dev'

import Employee from "./Components/pages/Employees/EmployeeGrid";
import AddEmployee from "./Components/pages/Employees/Add/AddEmployeePage";

import Facturation from "./Components/pages/Facturations/FacturationsGrid";
import AddFacturationPage from "./Components/pages/Facturations/Add/AddFacturationPage";

import Paiements from "./Components/pages/Paiements/PaiementsGrid";
import AddPaiementPage from "./Components/pages/Paiements/Add/AddPaiementPage";

import Dossiers from "./Components/pages/Dossiers/DossiersGrid";
import AddDossier from "./Components/pages/Dossiers/Add/AddDossiersPage";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme(
  frFR,
  Fr
);

const App = () => {

  
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
            <Route exact path="/dossiers/ajout">
              <AddDossier />
            </Route>
            <Route exact path="/paiements">
              <Paiements/>
            </Route>
            <Route exact path="/paiements/ajout">
              <AddPaiementPage />
            </Route>
            <Route exact path="/facturations">
              <Facturation />
            </Route>
            <Route exact path="/facturations/ajout">
              <AddFacturationPage />
            </Route>
          </Switch>
        </Layout>
      </Router>
    </ThemeProvider>
  );
};

export default App;
