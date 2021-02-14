import "./App.css";
import { MDBBtn } from "mdbreact";
import React from "react";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import UserMode from "./UserMode";
import Landing from "./Landing";
import StatsMode from "./StatsMode";
import Fibonacci from "./Fibonacci";
import Exponentials from "./Exponentials";
import Sorters from "./Sorters";

function App() {
  return (
    <div className="App" style={{ height: "100vh", backgroundColor: "grey" }}>
      <Router>
        <Switch>
          <Route path="/userMode" component={UserMode} exact />
          <Route path="/statsMode" component={StatsMode} exact />

          <Route path="/fibonacci" component={Fibonacci} exact />

          <Route path="/exponentials" component={Exponentials} exact />

          <Route path="/sorters" component={Sorters} exact />
          <Route path="/" component={Landing} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
