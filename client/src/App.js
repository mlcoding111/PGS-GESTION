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
import EmployeeForm from "./Components/pages/Employees/Form/EmployeeForm";

import Facturation from "./Components/pages/Facturations/FacturationsGrid";
import AddFacturationPage from "./Components/pages/Facturations/Add/AddFacturationPage";

import Paiements from "./Components/pages/Paiements/PaiementsGrid";
import AddPaiementPage from "./Components/pages/Paiements/Add/AddPaiementPage";

import Dossiers from "./Components/pages/Dossiers/DossiersGrid";
import AddDossier from "./Components/pages/Dossiers/Add/AddDossiersPage";
import DossierForm from "./Components/pages/Dossiers/Form/DossierForm";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const theme = createTheme(
  frFR,
  Fr
);

const App = () => {

  
  return (
    <ThemeProvider theme={theme}>
    <ToastContainer autoClose={2000} toastStyle={{ backgroundColor: "#121212", color: "#ffffff" }}/>
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
            <Route exact path={["/employés/ajout", "/employés/:id"]}>
              <EmployeeForm />
            </Route>
            <Route exact path="/dossiers">
              <Dossiers />
            </Route>
            <Route exact path={["/dossiers/ajout", "/dossiers/:id"]}>
              <DossierForm />
            </Route>
            <Route exact path="/paiements">
              <Paiements/>
            </Route>
            <Route exact path={["/paiements/ajout", "/paiements/:id"]}>
              <AddPaiementPage />
            </Route>
            <Route exact path="/facturations">
              <Facturation />
            </Route>
            <Route exact path={["/facturations/ajout", "/facturations/:id"]}>
              <AddFacturationPage />
            </Route>
          </Switch>
        </Layout>
      </Router>
    </ThemeProvider>
  );
};

export default App;
