import React from 'react';
import Counter from "./pages/Counter";
import { Switch, Route, BrowserRouter as Router} from "react-router-dom";
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Counter} />
      </Switch>
    </Router>
  );
}

export default App;
