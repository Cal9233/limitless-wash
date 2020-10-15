import React from "react";
import { Switch, Route } from "react-router-dom";
import { Home, Services, Contact } from "./pages";

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
