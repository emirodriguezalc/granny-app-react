import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './views/home';
import Tracker from './views/tracker';
import BodyMenu from './views/bodyMenu';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/foodMenu">
          <Tracker
            view={{
              title: 'Food tracker',
              viewName: 'food-menu',
              list: [
                { name: 'breakfast', text: 'I had breakfast' },
                { name: 'lunch', text: 'I had lunch' },
              ],
            }}
          />
        </Route>
        <Route path="/waterMenu">
          <Tracker
            view={{
              title: 'Water tracker',

              viewName: 'water-menu',
              list: [
                { name: 'morning', text: 'Morning' },
                { name: 'midday', text: 'Midday' },
              ],
            }}
          />
        </Route>
        <Route path="/medicineMenu">
          <Tracker
            view={{
              title: 'Medicine tracker',

              viewName: 'medicine-menu',
              list: [
                { name: 'ibux', text: 'ibux' },
                { name: 'profen', text: 'profen' },
              ],
            }}
          />
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
