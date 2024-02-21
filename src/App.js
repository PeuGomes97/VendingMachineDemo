import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";}

import VendingMachine from "./VendingMachine";
import Chocolate from "./Chocolate";
import Soda from "./Soda";
import Chips from "./Chips";

function App(){
  return (
    <BrowserRouter>
    <Switch>
      <Route path="/" exact>
        <Vending Machine />
      </Route>
      <Route path="/chocolate" exact>
        <Chocolate />
      </Route>
      <Route path="Soda" exact>
        <Soda />
      </Route>
      <Route path="Chips" exact>
        <Chips />
      </Route>

    </Switch>

    </BrowserRouter>
  );
}

export default App;