import React, { useState } from 'react'
import cross from './src/img/cross.png'
import map from './src/img/map.png'
import {locations, Infos} from './Infos'
import './Map.scss'

const Map = ({ switchModalMap }) => {
	const [bubbles, setBubbles] = useState(locations)

	const handleCrossClick = () => {
		switchModalMap.toggle()
	}

	return (
		<div className="Map">
	      <section className="Map__header">
	        <button className="Map__header__closeBtn" onClick={handleCrossClick} >
	          <img className="Map__header__closeBtn__cross" src={cross} alt="cross closing button" />
	        </button>
	      </section>
	      <section className="Map__map">
	      	<img className="Map__map__image" src={map} alt="pixelart map" usemap="#image-map"/>
	      	<ul>
				{bubbles.map((bubble, index) => <Infos key={index} location={bubble} bubbles={bubbles} setBubbles={setBubbles}/>)}
			</ul>
		  </section>
	      <p className="Map__explanation">Next destination?</p>
	    </div>
	)
}

export default Map