import React, { useEffect, useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Page } from "./views/page";
import { logout, getCurrentUser } from "./services/auth.js";
import Login from "./views/login.js"
import "./App.css";

const App = () => {
  //const [apiResponse, setApiresponse] = useState()
  const [user, setUser] = useState();
  useEffect(() => {
    const user = getCurrentUser();

    if (user) {
      setUser(user);
    }
  }, []);

  const logOut = () => {
    logout();
  };

  // callAPI = () => {
  //   fetch("http://localhost:4000/testAPI")
  //     //.then(res => res.text())
  //     .then(res => setApiResponse(res))
  //     .catch(err => err);
  //}

  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/page" component={Page} />
          <Route exact path="/" component={Login} />
        </Switch>
      </BrowserRouter>
    </div>
    //<Page></Page>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <h1 className="App-title">Welcome to React</h1>
    //   </header>
    //   <p className="App-intro">{apiResponse}</p>
    // </div>
  );
}

export default App;