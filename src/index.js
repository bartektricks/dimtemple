import { HashRouter, Route } from 'react-router-dom'
import React from 'react';
import ReactDOM from 'react-dom';
import TempleDocument from './TempleDocument';
import Homepage from './pages/Homepage';
import Team from './pages/Team';

function Noop() {
  return null;
}

ReactDOM.render((
  <div className="main-application">
    <HashRouter>
      <TempleDocument>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/team" component={Team} />
        <Route path="*" component={Noop} />
      </TempleDocument>
    </HashRouter>
  </div>
  ),document.getElementById('root')
);
