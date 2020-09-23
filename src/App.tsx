import React, { useEffect } from 'react';
import HomePage from "./pages/HomePage";
import CewlNavBar from "./components/CewlNavBar";
import CounterPage from "./pages/CounterPage";
import TimerPage from "./pages/TimerPage";
import WeatherPage from "./pages/WeatherPage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { RootStateOrAny, useSelector } from "react-redux";
import './App.css';


function App() {

  const password = useSelector((state:RootStateOrAny) => state.password);

  useEffect(() => {
    console.log(password);
  }, [password]);

  return (
    <Router>
      <CewlNavBar />
      <Switch>
        <Route exact path={["/", "/home"]} component={HomePage} />
        <Route exact path="/counter" component={CounterPage} />
        <Route exact path="/timer" component={TimerPage} />
        <Route exact path="/weather" component={WeatherPage} />
      </Switch>
    </Router>
  );
}

export default App;