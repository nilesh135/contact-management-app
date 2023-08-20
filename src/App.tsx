import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Contacts from './Contacts';
import ChartsDashboard from './ChartsDashboard';
import MapsDashboard from './MapsDashboard';
const App: React.FC= ()=>
{
  return (
    <Router>
      <Switch>
        <Route path="/contacts" exact component={Contacts} />
        <Route path="/charts" component={ChartsDashboard} />
        <Route path="/maps" component={MapsDashboard} />
      </Switch>
    </Router>
  );
};
export default App;