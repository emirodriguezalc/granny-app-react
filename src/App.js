import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './views/home';
import Tracker from './views/tracker';
import BodyMenu from './views/bodyMenu';
import { food, water, medicines } from './config/tracker';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/foodMenu">
          <Tracker view={food} />
        </Route>
        <Route path="/waterMenu">
          <Tracker view={water} />
        </Route>
        <Route path="/seeMedicines">
          <Tracker view={medicines} />
        </Route>
        <Route path="/bodyMenu">
          <BodyMenu />
        </Route>
        {/*         <Route>
          <NotFound />
        </Route> */}
      </Switch>
    </Router>
  );
}

export default App;
