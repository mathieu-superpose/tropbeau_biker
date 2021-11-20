import './BurgerMaker.scss';
import React, { useState } from "react";
import BurgerNavbar from '../../components/BurgerNavbar/BurgerNavbar';
import Builder from '../../components/Builder/Builder';
import Selector from '../../components/Selector/Selector';
import Billing from '../../components/Billing/Billing';

const defaultBurger = {
  'bun': 'sesame',
  'sauce': 'mayonaise',
  'patty': 'simple',
  'cheese': 'yes',
  'salad': 'yes',
  'tomato': 'yes'
};

const BurgerMaker = () => {
  const [burger, setBurger] = useState(defaultBurger)

  return (
    <div className="BurgerMaker">
      <BurgerNavbar />
      <main className="BurgerMaker__factory">
        <section className="BurgerMaker__factory__head">
          <h1 className="BurgerMaker__factory__head__title">Build your own tasty sandwich</h1>
        </section>
        <section className="BurgerMaker__factory__preview">
          <Builder burger={burger}/>
        </section>
        <section className="BurgerMaker__factory__selection">
          <Selector burger={burger} setBurger={setBurger} />
        </section>
        <section className="BurgerMaker__factory__order">
          <Billing burger={burger}/>
        </section>
      </main>
    </div>
  );
}

export default BurgerMaker;
