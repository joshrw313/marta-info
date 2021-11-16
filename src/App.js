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
import RailStation from './componenets/railStation';
import BusRoute from './componenets/BusRoute';
import BusDetails from './componenets/BusDetails';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
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
            <Route exact path="/bus/:route/:bus">
              <Navbar />
              <BusDetails/>
            </Route>
            <Route component={NotFound} /> 
          </Switch>
        </Router>
    </QueryClientProvider>
  );
}

export default App;
