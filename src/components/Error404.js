// import "../styles/layout/Error.scss";
import { Link } from "react-router-dom";
// import errorGif from "../images/error404.gif";

const Error404 = () => {
  return (
    <main className='main__error'>
      {/* <img className="main__error__image" src={errorGif} alt="error animation" /> */}
      <div className='container'>
        <h1 className='main__error__title'>404</h1>
        <p className='main__error__text'>
          ¡Vaya... El personaje que buscas no existe"
        </p>
      </div>
    </main>
  );
};

export default Error404;
