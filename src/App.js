import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import MyProjects from "./components/MyProjects";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route path="/projects">
          <MyProjects />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
