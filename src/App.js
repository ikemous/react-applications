import React from 'react';
import CewlNavBar from "./components/CewlNavBar";
import HomePage from "./pages/HomePage";
import CounterPage from "./pages/CounterPage";
import TimerPage from "./pages/TimerPage";
import WeatherPage from "./pages/WeatherPage";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import './App.css';

function App() {
  return (
    <Router>
      <CewlNavBar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/counter" component={CounterPage} />
        <Route exact path="/timer" component={TimerPage} />
        <Route exact path="/weather" component={WeatherPage} />
      </Switch>
    </Router>
  );
}

export default App;
