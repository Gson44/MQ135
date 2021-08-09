import logo from './logo.svg';
import './App.css';
import Data from './views/Data';
import Main from './views/Main'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Signup from './views/Signup';
function App() {
  return (
    <div className="App">
       <Router>
       <Switch>
		      <Route exact path="/" component={Main}/>
				  <Route exact path="/Signup" component={Signup }/>
          <Route exact path="/loginin" component={Data} />
	    </Switch>
    </Router>
    </div>
  );
}

export default App;
