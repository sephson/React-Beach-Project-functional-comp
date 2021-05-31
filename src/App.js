import React from "react";
import "./App.css";
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import Error from "./pages/Error";
import SingleRoom from "./pages/SingleRoom";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/rooms" component={Rooms}></Route>
          <Route exact path="/rooms/:slug" component={SingleRoom}></Route>

          <Route component={Error} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
