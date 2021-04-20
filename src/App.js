import Home from './Home.js';
import Header from './Header';
import Footer from './Footer';
import ProjectDetails from './ProjectDetails.js';
import './css/geral.css';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

function App() {
  return (
    <div>

    <Header></Header>
    <div className="App">
      <main>
        <Router>
          <Switch>

            <Route exact path="/">
              <Home />
            </Route>

            <Route path="/projects/:field/:id">
              <ProjectDetails />
            </Route>

          </Switch>
        </Router>
      </main>
    </div>

    <Footer></Footer>

    </div>

  );
}

export default App;
