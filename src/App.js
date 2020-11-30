import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './views/home';
import FoodMenu from './views/foodMenu';
import BodyMenu from './views/bodyMenu';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/foodMenu">
          <FoodMenu />
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

