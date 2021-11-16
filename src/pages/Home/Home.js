import './Home.scss';
import mountains from './src/img/mountains.png';
import moon from './src/img/moon.png';

const Home = () => {

  return (
    <div className="Home">
      <header className="Home__header">
        <img className="Home__header__moon" src={moon} alt="Red Moon" />
        <img className="Home__header__mountains" src={mountains} alt="Mountains" />
      </header>
      <main className="Home__main">
        <section className="Home__main__intro">
          <h1>Trop Beau: Biker's Edition</h1>
          <p>a portfolio-adventure</p>
        </section>
        <section className="Home__main__game">
          <div className="Home__main__game__biker" />
          <div className="Home__main__game__road" />
        </section>
      </main>
    </div>
  );
}

export default Home;
