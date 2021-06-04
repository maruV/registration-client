import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";

import './App.css';
import Register from './Pages/Registration';
import Search from './Pages/Search';

/*
  Browser Router is used to contain components in App
  Routes establish the components to their paths
  Links are calling and displaying the desired component
*/

function App() {
  return (
    <Router>
      
      <div className="App">
        <h1> SBL Employee Tracking System </h1>
        <div>
          <Link to="/register">
            <p> Register </p>
          </Link>
        </div>
        <div>
          <Link to="/search">
            <p> Search  </p>
          </Link>
        </div>

      <Route path="/register" component={Register} />
      <Route path="/search" component={Search} />

      </div>
    </Router>
  );
}

export default App;
