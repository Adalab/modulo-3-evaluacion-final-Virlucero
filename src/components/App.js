/* SECCIÓN DE IMPORT */

// - De React
// - Nuestros
import Filters from "./Filters";
// - Sass
import "../styles/App.scss";
// - Imágenes
import Logo from "../images/logo.png";

/* SECCIÓN DEL COMPONENTE */
function App() {
  /* VARIABLES ESTADO (DATOS) */

  /* EFECTOS (código cuando carga la página) */

  /* FUNCIONES HANDLER */

  /* FUNCIONES Y VARIABLES AUXILIARES PARA PINTAR EL HTML */

  /* HTML */
  return (
    <div className='App'>
      {/* Aquí va el HTML */}

      <img src={Logo} />
      <Filters />
    </div>
  );
}

/* PROP-TYPES */

/* EXPORT DEL COMPONENTE */
export default App;
