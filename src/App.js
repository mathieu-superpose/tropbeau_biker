import { Route, Routes } from 'react-router-dom';
import useModal from './hooks/useModal';
import Home from './pages/Home/Home';
import Map from './pages/Map/Map';
import MiniMap from './components/MiniMap/MiniMap';
import Burger from './pages/Burger/Burger';
import BurgerMaker from './pages/Burger/src/pages/BurgerMaker/BurgerMaker';
import './App.scss';

const App = () => {

  const switchModalMap = useModal();

  return (
    <div className="App">
      <MiniMap switchModalMap={switchModalMap} />
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/burger" element={<Burger/>} />
        <Route exact path="/burger/maker" element={<BurgerMaker/>} />
      </Routes>
      { switchModalMap.displayModal &&  <Map switchModalMap={switchModalMap} /> }
    </div>
  );
}

export default App;
