import React, { useEffect } from "react";
import './Selector.scss';
import cheese from '../../img/ingredients/cheese.png';
import salad from '../../img/ingredients/salad.png';
import patty from '../../img/ingredients/patty.png';
import tomato from '../../img/ingredients/tomato.png';
import raw from '../../img/ingredients/bun-raw.png';
import poppy from '../../img/ingredients/bun-poppy.png';
import sesame from '../../img/ingredients/bun-sesame.png';
import ketchup from '../../img/ingredients/ketchup.png';
import mayonaise from '../../img/ingredients/mayonaise.png';
import cocktail from '../../img/ingredients/cocktail.png';
import empty from '../../img/ingredients/empty.png';

const Selection = props => {
  const handleClick = () => {
    if (props.onClick) {
      props.onClick(props.choice);
    }
  }
  return (
    <button onClick={handleClick}>
      <figure>
        <img src={props.img} alt={props.alt}/>
        <figcaption>{props.figcaption}</figcaption>
      </figure>
    </button>
  )
}

const Selector = ({ burger, setBurger }) => {

  const handleClick = choice => setBurger({ ...burger, [choice.split('-')[0]]: choice.split('-')[1]  });

  useEffect(() => {
    console.log(burger)
  }, [burger])

  return (
    <div className="Selector">
      <header className="Selector__head">
        <h2 className="Selector__head__title">Make your choice</h2>
      </header>
      <section className="Selector__bun">
        <h3>Bun</h3>
        <Selection choice="bun-raw" img={raw} alt="pixelart raw hamburger bun" figcaption="Raw" onClick={handleClick} />
        <Selection choice="bun-poppy" img={poppy} alt="pixelart hamburger bun with poppy seeds" figcaption="Poppy seeds" onClick={handleClick} />
        <Selection choice="bun-sesame" img={sesame} alt="pixelart hamburger bun with sesame seeds" figcaption="Sesame seeds" onClick={handleClick} />
      </section>
      <section className="Selector__sauce">
        <h3>Sauce</h3>
        <Selection choice="sauce-ketchup" img={ketchup} alt="pixelart ketchup sauce bottle" figcaption="Ketchup" onClick={handleClick} />
        <Selection choice="sauce-mayonaise" img={mayonaise} alt="pixelart mayonaise sauce bottle" figcaption="Mayonaise" onClick={handleClick} />
        <Selection choice="sauce-cocktail" img={cocktail} alt="pixelart cocktail sauce bottle" figcaption="Cocktail" onClick={handleClick} />
        <Selection choice="sauce-nosauce" img={empty} alt="pixelart empty sign" figcaption="No sauce" onClick={handleClick} />
      </section>
      <section className="Selector__patty">
        <h3>Patty</h3>
        <Selection choice="patty-simple" img={patty} alt="pixelart hamburger patty" figcaption="Beef burger" onClick={handleClick} />
        <Selection choice="patty-double" img={patty} alt="pixelart hamburger patty" figcaption="2x Beef burger" onClick={handleClick} />
      </section>
      <section className="Selector__cheese">
        <h3>Cheese</h3>
        <Selection choice="cheese-yes" img={cheese} alt="pixelart block of cheese" figcaption="Cheese" onClick={handleClick} />
        <Selection choice="cheese-no" img={empty} alt="pixelart empty sign" figcaption="No cheese" onClick={handleClick} />
      </section>
      <section className="Selector__salad">
        <h3>Salad</h3>
        <Selection choice="salad-yes" img={salad} alt="pixelart salad" figcaption="Salad" onClick={handleClick} />
        <Selection choice="salad-no" img={empty} alt="pixelart empty sign" figcaption="No salad" onClick={handleClick} />
      </section>
      <section className="Selector__tomato">
        <h3>Tomato</h3>
        <Selection choice="tomato-yes" img={tomato} alt="pixelart tomato" figcaption="Tomato" onClick={handleClick} />
        <Selection choice="tomato-no" img={empty} alt="pixelart empty sign" figcaption="No tomato" onClick={handleClick} />
      </section>
    </div>
  );
}

export default Selector;
