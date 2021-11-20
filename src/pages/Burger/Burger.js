import './Burger.scss';
import BurgerNavbar from './src/components/BurgerNavbar/BurgerNavbar';

const Burger = () => {
  return (
    <div className="Burger">
      <BurgerNavbar />
      <section className="Burger__promotions">
        <div className="Burger__promotions__card">coucou1</div>
        <div className="Burger__promotions__card">coucou2</div>
        <div className="Burger__promotions__card">coucou3</div>
        <div className="Burger__promotions__card">coucou4</div>
      </section>
    </div>
  );
}

export default Burger;
