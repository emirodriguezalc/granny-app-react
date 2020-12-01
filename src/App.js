import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Options from './components/options';
import Tracker from './components/tracker';
import Meditation from './views/meditation';
import { food, water, medicines } from './config/tracker';
import {
  home,
  bodyMenu,
  mindMenu,
  mindTrainer,
  medicineMenu,
  haveFunMenu,
  photosHome,
} from './config/options';
import { guides } from './config/meditation';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Options data={home} />
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
          <Options data={bodyMenu} />
        </Route>
        <Route path="/medicineMenu">
          <Options data={medicineMenu} />
        </Route>
        <Route path="/mindMenu">
          <Options data={mindMenu} />
        </Route>
        <Route path="/meditationMenu">
          <Meditation view={guides} />
        </Route>
        <Route path="/mindTrainer">
          <Options data={mindTrainer} />
        </Route>
        <Route path="/haveFunMenu">
          <Options data={haveFunMenu} />
        </Route>
        <Route path="/photosHome">
          <Options data={photosHome} />
        </Route>
        {/*         <Route>
          <NotFound />
        </Route> */}
      </Switch>
    </Router>
  );
}

export default App;
