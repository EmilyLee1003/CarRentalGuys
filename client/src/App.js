import react from "react";

import Navigation from "./components/navBar/navBar";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import booking from "./components/calendar/calendar";
import mainPage from "./pages/main";

function App() {
  return (
    <div className="App">
      <Navigation></Navigation>
      <div>
        <h1>Welcome</h1>
      </div>
      <div>
        <Router>
          <Switch>
            <Route path="/calendar" component={booking}></Route>
            <Route path="/" component={mainPage}></Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
