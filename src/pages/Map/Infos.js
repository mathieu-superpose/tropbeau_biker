import React, { useState } from 'react'

const Bubble = ({ location }) => {
 return (
    <div className={`Map__map__${location.name}Infos`}>
      <p className={`Map__map__${location.name}Infos__description`}>{location.description}</p>
      <button className={`Map__map__${location.name}Infos__go`}>Go</button>
    </div>
  )
}

export const Infos = ({location, bubbles, setBubbles}) => {
  const [visible, setVisible] = useState(location.visible);

  const openBubble = () => {
    setVisible(!visible)
  }

  return (
    <li>
      {visible && <Bubble location={location} />}
      <button className={`Map__map__${location.name}`} onClick={openBubble}></button>
    </li>
  )
}

export const locations = [
  {
    description: "the best burgers in town",
    name: "restaurant",
    link: "Blabla",
    visible: false
  },
  {
    description: "one hell of a ride",
    name: "mountains",
    link: "Blabla",
    visible: false
  }
]
