import Nav from "./Components/Nav";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom/cjs/react-router-dom";
import Home from "./pages/Home";
import MoviePage from "./pages/MoviePage";


function App() {

  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Route path="/movie">
      <MoviePage  />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
