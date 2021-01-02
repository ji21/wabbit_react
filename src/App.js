import Authenticated from './components/Authenticated'
import Information from './components/Information'
import Notfound from './components/Notfound'
import Login from './components/Login'
import Signup from './components/Signup'
import Cookies from 'js-cookie';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

const getAccessToken = () => {
  console.log(Cookies.get('user'));
  return Cookies.get('user');
}

const isAuthenticated = () => {
  const user = getAccessToken();
  if (user && user.loggedIn) {
    // make api call to the password, if success return true, else redirect to loggin page
  } 
  return false;
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
          <Route path="/signup/" exact>
            {/* redirect to home page if logged in */}
            {isAuthenticated() ? <Redirect to="/"/> : <Signup/>}
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
