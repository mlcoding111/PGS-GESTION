// This is the main app file
import React from "react";

import Layout from "./Components/Layout";

import Home from './Components/Home'

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { createTheme, ThemeProvider } from "@material-ui/core";

const theme = createTheme({
  palette:{
    primary:{
      main: "#0000FF"
    }
  },
  typography:{}
})

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
