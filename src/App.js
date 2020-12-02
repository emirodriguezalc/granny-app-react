import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { React, useState } from "react";
import {
  medicineData,
  foodData,
  waterData,
  addMedicine,
} from "./config/tracker";
import MyScore from "./views/myScore";
import {
  home,
  bodyMenu,
  mindMenu,
  mindTrainer,
  medicineMenu,
  haveFunMenu,
  photosHome,
  gameHome,
} from "./config/options";
import { guides } from "./config/meditation";
import { photosFollow } from "./config/follow";
import { playFollow } from "./config/follow";
import Options from "./components/options";
import Tracker from "./components/tracker";
import AddMedicine from "./components/addMedicine";
import ListPage from "./components/listPage";
import Follow from "./components/follow";
import scoreMock from "./mocks/myscore";
import weeklyBoardMock from "./mocks/weeklyBoardMock";
import gameInvitesMock from "./mocks/gameInvitesMock";
import PlayMenu from "./views/playMenu/PlayMenu";
import Game from "./views/tictactoe/Tictactoe";
import PhotosFeed from "./views/photosFeed/PhotosFeed";
import Meditation from "./views/meditation";
import Login from "./views/login";
import Landing from "./views/landing";

function App() {
  const [medicines, setMedicines] = useState([]);
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Options data={home} />
        </Route>

        <Route path="/foodMenu">
          <Tracker
            list={foodData.list}
            viewName={foodData.viewName}
            viewTitle={foodData.title}
            backTo={foodData.backTo}
          />
        </Route>

        <Route path="/waterMenu">
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

        <Route path="/gameInvites">
          <ListPage
            list={gameInvitesMock.list}
            backTo={gameInvitesMock.backTo}
            title={gameInvitesMock.title}
          />
        </Route>

        <Route path="/gameHome">
          <Options data={gameHome} />
        </Route>

        <Route path="/playMenu">
          <PlayMenu />
        </Route>

        <Route path="/playFollow">
          <Follow config={playFollow} />
        </Route>

        <Route path="/tictactoe">
          <Game />
        </Route>

        <Route path="/weeklyBoard">
          <ListPage
            list={weeklyBoardMock.list}
            backTo={weeklyBoardMock.backTo}
            title={weeklyBoardMock.title}
          />
        </Route>

        <Route path="/photosHome">
          <Options data={photosHome} />
        </Route>

        <Route path="/photosFollow">
          <Follow config={photosFollow} />
        </Route>

        <Route path="/photosFeed">
          <PhotosFeed />
        </Route>

        <Route path="/myScore">
          <MyScore data={scoreMock} />
        </Route>

        <Route path="/login">
          <Login />
        </Route>
        <Route path="/landing">
          <Landing />
        </Route>
        {/*         <Route>
          <NotFound />
        </Route> */}
      </Switch>
    </Router>
  );
}

export default App;
