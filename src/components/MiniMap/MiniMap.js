import React, { useState } from 'react'; 
import './MiniMap.scss';
import map from './src/img/map_mini.png';

const MiniMap = ({ switchModalMap }) => {
  const [clicked, setClicked] = useState(false);

  const handleMapClick = () => {
    switchModalMap.toggle()
    setClicked(true) 
  }

  return (
    <div className="MiniMap">
      <div className={clicked ? "MiniMap__btnCont" : "MiniMap__nBtnCont"} >
        <button className="MiniMap__btnCont__btn" onClick={handleMapClick}>
          <img className="MiniMap__btnCont__btn__map" src={map} alt="map" />
        </button>
      </div>
    </div>
  );
}

export default MiniMap;
