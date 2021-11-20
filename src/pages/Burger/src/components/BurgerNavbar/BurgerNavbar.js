import './BurgerNavbar.scss';
import logo from '../../img/burger-kiff.png';

const BurgerNavbar = () => {
  return (
    <div className="BurgerNavbar">
      <p className="BurgerNavbar__menu">Menu</p>
      <div className="BurgerNavbar__logo">
        <img className="BurgerNavbar__logo__bk" src={logo} alt="Burger Kiff logo" />
      </div>
      <p className="BurgerNavbar__cart">$0.00</p>
    </div>
  );
}

export default BurgerNavbar;
