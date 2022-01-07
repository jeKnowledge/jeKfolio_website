import Home from './Home.js';
import Header from './Header';
import Footer from './Footer';
import ScrollToTop from './scrollTop';

import Websites from './Websites.js';
import Software from './Software.js';
import Design from './Design.js';
import Events from './Events.js';
import PageNotFound from './PageNotFound.js';

import './css/geral.css';

import {
  BrowserRouter as Router,
  Route,
  Switch,
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

        <Route path="/projects/websites/:id">
          <Websites />
        </Route>
        <Route path="/projects/software/:id">
          <Software />
        </Route>
        <Route path="/projects/design/:id">
          <Design />
        </Route>
        <Route path="/projects/eventos/:id">
          <Events/>
        </Route>

        <Route path="*">
          <PageNotFound/>
        </Route>
        

      </Switch>
      </main>

      <Footer></Footer>

    </div>
    </Router>
  );
}


export default App;
