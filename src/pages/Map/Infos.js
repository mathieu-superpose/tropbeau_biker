import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Bubble = ({ location, switchModalMap }) => {
  let navigate = useNavigate()

  const handleClick = () => {
    navigate(`${location.link}`)
    switchModalMap.toggle()
  }

 return (
    <div className={`Map__map__${location.name}Infos`}>
      <p className={`Map__map__${location.name}Infos__description`}>{location.description}</p>
      <button 
        className={`Map__map__${location.name}Infos__go`} 
        onClick={handleClick}
      >Go</button>
    </div>
  )
}

export const Infos = ({location, bubbles, setBubbles, switchModalMap}) => {
  const [visible, setVisible] = useState(location.visible);

  const openBubble = () => {
    setVisible(!visible)
  }

  return (
    <li>
      {visible && <Bubble location={location} switchModalMap={switchModalMap}/>}
      <button className={`Map__map__${location.name}`} onClick={openBubble}></button>
    </li>
  )
}

export const locations = [
  {
    description: "the best burgers in town",
    name: "restaurant",
    link: "/burger",
    visible: false
  },
  {
    description: "one hell of a ride",
    name: "mountains",
    link: "/",
    visible: false
  }
]
