import Home from './Home.js';
import Header from './Header';
import Footer from './Footer';
import ScrollToTop from './scrollTop';
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

    <Router>
    <ScrollToTop />
    <div>
      <Route>
        <Header></Header>
      </Route>

      <main>
      <Switch>

        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/projects/:field/:id">
          <ProjectDetails />
        </Route>

      </Switch>
      </main>

      <Footer></Footer>

    </div>
    </Router>
  );
}


export default App;
