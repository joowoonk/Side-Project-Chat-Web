import React, { useState } from "react";
import { Route, Switch } from "react-router";

// import { GlobalStyles } from "./components/globalStyles";
// import { lightTheme, darkTheme } from "./components/Themes";
import "./App.css";

import Nav from "./components/nav/nav.component";
import SignIn from "./components/sign-in/sign-in.component";
import Quotes from "./components/Quotes/quotes";
import SignUp from "./components/sign-up/sign-up.component";

import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import JourneyPage from "./pages/journey-page/Journey-Page.component";
import SubjectForm from "./components/subject-form/subject-form.component";
import Home from "./components/home/home.component";
import About from "./components/about/about";
import TimeIsUp from "./components/time-is-up/time-is-up";
import Update from "./components/Update/Update";

function App() {
  const [isStopping, setIsStopping] = useState(true);
//  console.log(  )
  if(localStorage.getItem("minutes") === undefined || localStorage.getItem("minutes") === null){
    localStorage.setItem("minutes",25)
  }


  return (
    // <ThemeProvider theme={theme === "light" ? darkTheme : lightTheme}>
    <>
      <div>
        <Nav isStopping={isStopping} setIsStopping={setIsStopping} />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route exact path="/twitter">
            {/* <Twitter /> */}
          </Route>
          <Route exact path="/updates">
            <Update />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/timeisup">
            <TimeIsUp />
          </Route>
          <Route exact path="/signIn">

            <SignIn />
          </Route>
          <Route exact path="/SignUp">
            <SignUp />
          </Route>
          <PrivateRoute path="/projects">
            <JourneyPage

              isStopping={isStopping}
              setIsStopping={setIsStopping}
            />
          </PrivateRoute>
          <PrivateRoute path="/form" component={SubjectForm} />
        </Switch>
      </div>
    </>
    // </ThemeProvider>
  );
}

export default App;
