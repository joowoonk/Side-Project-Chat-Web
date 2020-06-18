import React, { useState } from "react";
import { Route, Switch } from "react-router";

import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/globalStyles";
import { lightTheme, darkTheme } from "./components/Themes";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { userInformation } from "./redux/actions/userActions";
import Nav from "./components/nav/nav.component";
import SignIn from "./components/sign-in/sign-in.component";
import Quotes from "./components/Quotes/quotes";
import SignUp from "./components/sign-up/sign-up.component";
import SideNav from "./components/side-nav/side-nav.component";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import JourneyPage from "./pages/journey-page/Journey-Page.component";
import SubjectForm from "./components/subject-form/subject-form.component";

function App() {
  const dispatch = useDispatch();
  const [theme, setTheme] = useState("light");
  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };
  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <>
        <GlobalStyles />
        <div>
          <Nav themeToggler={themeToggler} />
          <Switch>
            <Route exact path="/SignIn">
              <Quotes />
              <SignIn />
            </Route>
            <Route exact path="/SignUp">
              <SignUp />
            </Route>
            <PrivateRoute path="/tomatoes" component={JourneyPage} />
            <PrivateRoute path="/form" component={SubjectForm} />
          </Switch>
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
