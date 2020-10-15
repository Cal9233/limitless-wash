import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Mainview/Home/Home";
import Services from "./components/Mainview/Services/Services";
import Contact from "./components/Mainview/Contact/Contact";

const routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/Services" component={Services} />
      <Route exact path="/Contact" component={Contact} />
    </Switch>
  );
};

export default routes;
