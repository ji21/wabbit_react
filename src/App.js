import Authenticated from './components/Authenticated'
import Information from './components/Information'
import Notfound from './components/Notfound'
import Login from './components/Login'
import Cookies from 'js-cookie';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

const getAccessToken = () => {
  console.log(Cookies.get('access_token'));
  return Cookies.get('access_token');
}

const isAuthenticated = () => {
  return getAccessToken()? true : false;
}

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact>
            {isAuthenticated() ? <Authenticated/>: <Information/>}
          </Route>
          <Route path="/login/" exact>
            {/* redirect to home page if logged in */}
            {isAuthenticated() ? <Redirect to="/"/> : <Login/>}
          </Route>

          <Route path="/mywabbit/" exact>
            {isAuthenticated() ? <div>my wabbit page</div>:<div>you gotta log in</div>}
          </Route>
          <Route path="*">
            <Notfound/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
