import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./app.css";
import Login from "./components/login";
import Main from "./components/main";

function App({ auth }) {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Login auth={auth} />
        </Route>
        <Route path="/main">
          <Main auth={auth} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
