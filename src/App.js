import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Card from "./components/navbar/Card";
import Navbar from "./components/navbar/Navbar";
import Welcome from "./components/navbar/Welcome";

import Table from "./components/table/Table";
import Tabs from "./components/table/tabs/Tabs";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          {/* <Route exact path="/" component={Card} />
          <Route exact path="/table" component={Table} /> */}
          {/* <Route exact path="/" component={Welcome} /> */}

          <Route exact path="/cart" component={Card} />
          <Route exact path="/tab" component={Tabs} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
