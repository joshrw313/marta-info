import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import {
  QueryClient,
  QueryClientProvider
} from 'react-query';
import Helmet from 'react-helmet';
import Signin from './componenets/Signin';
import Signup from './componenets/Signup';
import Landing from './componenets/Landing';
import Navbar from './componenets/Navbar';
import Home from './componenets/Home';
import Bus from './componenets/Bus';
import Rail from './componenets/Rail';
import NotFound from './componenets/NotFound';
import { store } from './store';
import { Provider } from 'react-redux';
import RailStation from './componenets/railStation';
import BusRoute from './componenets/BusRoute';
import { getRail, getBusAll} from './actions';
import BusDetails from './componenets/BusDetails';

store.dispatch(getRail());
store.dispatch(getBusAll());

const queryClient = new QueryClient();

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
      <QueryClientProvider client={queryClient}>
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
      <Route exact path="/bus/:route/:bus">
        <Navbar />
        <BusDetails/>
      </Route>
      </QueryClientProvider>
      <Route component={NotFound} /> 
      </Switch>
    </Router>
    </Provider>
  );
}

export default App;
