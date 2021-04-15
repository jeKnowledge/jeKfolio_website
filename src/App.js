import Home from './Home.js';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

function App() {
  return (
  
<Router>
    <div className="App">

      <div className="main">

        <Switch>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
      </div>


    </div>
  </Router>
  );
}

export default App;
