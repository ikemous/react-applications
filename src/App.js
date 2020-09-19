import React from 'react';
import HomePage from "./pages/HomePage";
import CounterPage from "./pages/CounterPage";
import { Switch, Route, BrowserRouter as Router} from "react-router-dom";
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={HomePage} />
        <Route path="/counter" component={CounterPage} />
      </Switch>
    </Router>
  );
}

export default App;
