import React from "react";
import ReactDOM from "react-dom";
import Navigation from "./components/navBar/navBar";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Booking from "./pages/booking";
import MainPage from "./pages/MainPage";
import About from "./pages/about";
import UserAuth from "./pages/UserAuth";

function App() {
  return (
    <div className="App">
      <Navigation></Navigation>
      <div>
        <Router>
          <Switch>
            <Route path="/Booking" component={Booking}></Route>
            <Route path="/MainPage" component={MainPage}></Route>
            <Route path="/About" component={About}></Route>
            <Route path="/userAuth" component={UserAuth}></Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
