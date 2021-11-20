import React, { useState, useEffect } from 'react'; 
import './MiniMap.scss';
import map from './src/img/map_mini.png';

const MiniMap = ({ switchModalMap }) => {
  const [clicked, setClicked] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    setVisible((prevScrollPos > currentScrollPos && prevScrollPos - currentScrollPos > 70) || currentScrollPos < 10);
    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos, visible, handleScroll]);

  const handleMapClick = () => {
    switchModalMap.toggle()
    setClicked(true) 
  }

  return (
    <div className="MiniMap" style={{ top: visible ? '60px' : '-150px' }}>
      <div className={clicked ? "MiniMap__btnCont" : "MiniMap__nBtnCont"} >
        <button className="MiniMap__btnCont__btn" onClick={handleMapClick}>
          <img className="MiniMap__btnCont__btn__map" src={map} alt="map" />
        </button>
      </div>
    </div>
  );
}

export default MiniMap;
