import './Builder.scss';
import top from '../../img/burger-top.png';
import tomato from '../../img/burger-tomato.png';
import cheese from '../../img/burger-cheese.png';
import patty from '../../img/burger-patty.png';
import salad from '../../img/burger-salad.png';
import bottom from '../../img/burger-bottom.png';

const Builder = ({ burger }) => {
  return (
    <div className="Builder">
      <img className="Builder__bottom" src={bottom} alt="pixelart burger bottom bread" />
      {burger.salad === 'yes' && <img className="Builder__salad" src={salad} alt="pixelart salad leaf" /> }
      <img className="Builder__patty" src={patty} alt="pixelart burger patty" />
      {burger.cheese === 'yes' && <img className="Builder__cheese" src={cheese} alt="pixelart sliced cheese" /> }
      {burger.tomato === 'yes' && <img className="Builder__tomato" src={tomato} alt="pixelart sliced tomato" /> }
      {burger.patty === 'double' && burger.salad === 'yes' && <img className="Builder__salad" src={salad} alt="pixelart salad leaf" />}
      {burger.patty === 'double' && <img className="Builder__patty" src={patty} alt="pixelart burger patty" />}
      {burger.patty === 'double' && burger.cheese === 'yes' && <img className="Builder__cheese" src={cheese} alt="pixelart sliced cheese" />}
      {burger.patty === 'double' && burger.tomato === 'yes' && <img className="Builder__tomato" src={tomato} alt="pixelart sliced tomato" />}
      <img className="Builder__top" src={top} alt="pixelart burger top bread" />
    </div>
  );
}

export default Builder;
