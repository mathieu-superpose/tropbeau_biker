import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './pages/Home/Home';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" exact>
          <Home />
        </Route>
      </Router>
    </div>
  );
}

export default App;
