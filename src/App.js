import './App.css';
import React, { Fragment } from 'react';
import InserirBloco from './components/InserirBloco';
import InserirPessoa from './components/InserirPessoa';
import ConsultarBloco from './components/ConsultarBloco';
import ConsultarPessoa from './components/ConsultarPessoa';
import Home from './Home';
import Navbar from './Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <div className="content">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/bloco">
          <Fragment>
        <div className="container">
          <InserirBloco></InserirBloco>
          <ConsultarBloco></ConsultarBloco>
        </div>
      </Fragment>
          </Route>
          <Route path="/pessoa">
          <Fragment>
        <div className="container">
          <InserirPessoa></InserirPessoa>
          <ConsultarPessoa></ConsultarPessoa>
        </div>
      </Fragment>
          </Route>
        </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
