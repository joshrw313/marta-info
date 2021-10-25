import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Helmet from 'react-helmet';
import Signin from './componenets/Signin';
import Signup from './componenets/Signup';
import Landing from './componenets/Landing';
import Navbar from './componenets/Navbar';
import Home from './componenets/Home';
import Bus from './componenets/Bus';
import Rail from './componenets/Rail';
import { store } from './store';
import { Provider } from 'react-redux';
import RailStation from './componenets/railStationContainer';
import BusRoute from './componenets/BusRouteContainer';
import { getRail, getBusAll} from './actions';

store.dispatch(getRail());
store.dispatch(getBusAll());

function App() {
  return (
    <Provider store={store} >
    <Helmet bodyAttributes={ {style: 'background-color : #2a2727; color: white'}} />
    <Router>
      <Switch>
      <Route exact path="/">
        <Landing />
      </Route>
      <Route exact path="/signin">
        <Signin />
      </Route>
      <Route exact path="/signup">
        <Signup />
      </Route>
      <Route exact path="/home">
        <Navbar />
        <Home />
      </Route>
      <Route exact path="/bus">
        <Navbar />
        <Bus />
      </Route>
      <Route exact path="/rail">
        <Navbar />
        <Rail />
      </Route>
      <Route exact path="/rail/:station">
        <Navbar />
        <RailStation />
      </Route>
      <Route exact path="/bus/:route">
        <Navbar />
        <BusRoute/>
      </Route>
      </Switch>
    </Router>
    </Provider>
  );
}

export default App;
