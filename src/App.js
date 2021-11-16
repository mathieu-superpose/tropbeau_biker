import { BrowserRouter as Router, Route } from 'react-router-dom';
import useModal from './hooks/useModal';
import Home from './pages/Home/Home';
import Map from './pages/Map/Map';
import MiniMap from './components/MiniMap/MiniMap';
import './App.scss';

const App = () => {

  const switchModalMap = useModal();

  return (
    <div className="App">
      <MiniMap switchModalMap={switchModalMap} />
      <Router>
        <Route path="/" exact>
          <Home />
        </Route>
      </Router>
      { switchModalMap.displayModal &&  <Map switchModalMap={switchModalMap} /> }
    </div>
  );
}

export default App;
