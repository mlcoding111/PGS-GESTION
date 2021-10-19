// This is the main app file
import React from "react";

import Layout from "./Components/Layout";
import Drawer from "./Components/Drawer/LeftDrawer";

import Home from "./Components/Home";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </Layout>
      </Router>
    </ThemeProvider>
  );
};

export default App;
