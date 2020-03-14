import React from 'react';
import { RegisterForm } from './components/registerForm'
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/foobar">
          Hello
        </Route>
        <Route path="/">
          <div className="App">
            <RegisterForm />
          </div>
        </Route>
      </Switch>
    </Router>
  );

}

export default App;
