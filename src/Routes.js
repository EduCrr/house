import { Switch, Route, Redirect, useHistory, useLocation } from "react-router";
import { useContext } from "react";
import { AuthContext } from "./contexts/auth";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Houses from "./Pages/Houses";
import House from "./Pages/House";
import Contato from "./Pages/Contato";
export default () => {
  let history = useHistory();
  let location = useLocation();
  const { signed } = useContext(AuthContext);

  if (signed) {
    if (location.pathname === "/login") {
      history.push("/register");
    }
  }
  let PrivateRoute = ({ children, ...rest }) => {
    return (
      <Route {...rest}>{signed ? children : <Redirect to="/login" />}</Route>
    );
  };
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <PrivateRoute exact path="/register">
          <Register />
        </PrivateRoute>
        <Route exact path="/houses">
          <Houses />
        </Route>
        <Route exact path="/house/:id">
          <House />
        </Route>
        <Route exact path="/contact">
          <Contato />
        </Route>
      </Switch>
    </>
  );
};
