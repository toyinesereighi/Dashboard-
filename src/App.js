
import './App.css';
import{
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import Home from './Components/Home';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path='/'>
            <Home/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
