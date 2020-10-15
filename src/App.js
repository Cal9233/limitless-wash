import React from "react";
import Navbar from "./components/Navbar";
import * as s from "./App.styles";
import { Home, Services, Contact } from "./pages";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/contact" component={Contact} />
          <Route path="/services" component={Services} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
