import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { React, useState } from "react";
import Options from "./components/options";
import Tracker from "./components/tracker";
import {
  medicineData,
  foodData,
  waterData,
  addMedicine,
} from "./config/tracker";
import AddMedicine from "./components/addMedicine";
import Meditation from "./views/meditation";
import MyScore from "./views/myScore";
import { food, water, medicines } from "./config/tracker";

import {
  home,
  bodyMenu,
  mindMenu,
  mindTrainer,
  medicineMenu,
  haveFunMenu,
  photosHome,
} from "./config/options";

import { guides } from "./config/meditation";
import scoreMock from "./mocks/myscore";

function App() {
  const [medicines, setMedicines] = useState([]);
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Options data={home} />
        </Route>
        <Route path="/foodMenu">
          {" "}
          <Tracker
            list={foodData.list}
            viewName={foodData.viewName}
            viewTitle={foodData.title}
            backTo={foodData.backTo}
          />
        </Route>
        <Route path="/waterMenu">
          {" "}
          <Tracker
            list={waterData.list}
            viewName={waterData.viewName}
            viewTitle={waterData.title}
            backTo={waterData.backTo}
          />
        </Route>
        <Route path="/addMedicine">
          <AddMedicine
            medicines={medicines}
            setMedicines={setMedicines}
            viewName={addMedicine.viewName}
            viewTitle={addMedicine.title}
            backTo={addMedicine.backTo}
          />
        </Route>

        <Route path="/seeMedicines">
          <Tracker
            list={medicines}
            viewName={medicineData.viewName}
            viewTitle={medicineData.title}
            backTo={medicineData.backTo}
          />
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
        <Route path="/myScore">
          <MyScore data={scoreMock} />
        </Route>
        {/*         <Route>
          <NotFound />
        </Route> */}
      </Switch>
    </Router>
  );
}

export default App;
