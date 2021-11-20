import React, { useState, useEffect } from 'react'
import cross from './src/img/cross.png'
import map from './src/img/map.png'
import { locations, Infos } from './Infos'
import { useLocation } from "react-router-dom"
import './Map.scss'

const Map = ({ switchModalMap }) => {
	const [bubbles, setBubbles] = useState(locations)
	const [place, setPlace] = useState("")

	let location = useLocation();

	useEffect(() => {
    	switch(location.pathname) {
			case '/':
				setPlace("mountains")
				break
			case '/burger':
			case '/burger/maker':
				setPlace("burger kiff")
				break
			default:
				setPlace("unknown place")
		}
  	}, [location]);

	const handleCrossClick = () => {
		switchModalMap.toggle()
	}

	return (
		<div className="Map">
	      <section className="Map__header">
	      	<p className="Map__header__location">current location:<br/>{place}</p>
	        <button className="Map__header__closeBtn" onClick={handleCrossClick} >
	          <img className="Map__header__closeBtn__cross" src={cross} alt="cross closing button" />
	        </button>
	      </section>
	      <section className="Map__map">
	      	<img className="Map__map__image" src={map} alt="pixelart map" />
	      	<ul>
				{bubbles.map((bubble) => <Infos key={bubble.name} location={bubble} bubbles={bubbles} setBubbles={setBubbles} switchModalMap={switchModalMap}/>)}
			</ul>
		  </section>
	      <p className="Map__explanation">Next destination?</p>
	    </div>
	)
}

export default Map