// This is the main app file
import React, { useEffect } from "react";
import Layout from "./Components/Layout";

// Redux import
import { useDispatch } from "react-redux";
import { getPosts } from './actions/posts'

// Routes
import Home from "./Components/Home";
import Dev from './Components/Dev/Dev'

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

const App = () => {
  const dispatch = useDispatch()

  useEffect(()=>{
      dispatch(getPosts())
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
          </Switch>
        </Layout>
      </Router>
    </ThemeProvider>
  );
};

export default App;
