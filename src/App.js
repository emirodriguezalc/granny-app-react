import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Options from "./components/options";
import Tracker from "./components/tracker";
import { medicineData } from "./config/tracker";
import AddMedicine from "./components/addMedicine";
import {
  home,
  bodyMenu,
  mindMenu,
  mindTrainer,
  medicineMenu,
  haveFunMenu,
  photosHome,
} from "./config/options";
import { React, useState, useContext } from "react";
const MedicineContext = React.createContext(medicineData);
const context = useContext(MedicineContext);
function App() {
  const [text, setText] = useState("");
  const [name, setName] = useState("");
  const [medicines, setMedicines] = useState({
    viewName: "see-medcines",
    title: "test-medicine-state",
    list: [{}],
  });

  const handleMedicines = (e) => {
    e.preventDefault();
    console.log("kommer");
    console.log(e.target);
    console.log(name, "name");
    console.log(medicines, "medicines fra state");
    const newName = { name };
    const copiedMedicines = { ...medicines };
    copiedMedicines.list = [...copiedMedicines.list, newName];
    setMedicines(copiedMedicines);
    setName("");
  };

  console.log(medicines, "lala");
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Options data={home} />
        </Route>
        <Route path="/foodMenu">{/* <Tracker view={food} /> */}</Route>
        <Route path="/waterMenu">{/* <Tracker view={water} /> */}</Route>
        <Route path="/addMedicine">
          <AddMedicine
            setName={setName}
            setText={setText}
            text={text}
            name={name}
            handleMedicines={handleMedicines}
            data={medicines}
            setMedicines={setMedicines}
          />
        </Route>

        <Route path="/seeMedicines">
          <MedicineContext.Provider value={[medicines, setMedicines]}>
            <Tracker />
          </MedicineContext.Provider>
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

export { App, MedicineContext };
