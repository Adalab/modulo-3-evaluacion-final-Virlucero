/* SECCIÓN DE IMPORT */

// - De React
import { Route, Routes } from "react-router-dom";
// - Nuestros
import Landing from "./Landing";
import CharacterDetail from "./CharacterDetail";

// - Sass
import "../styles/App.scss";
import Error404 from "./Error404";
// - Imágenes
import Logo from "../images/logo.png";

/* SECCIÓN DEL COMPONENTE */
function App() {
  //Router

  return (
    <div className='app'>
      {/* Aquí va el HTML */}
      <img src={Logo} />

      <Routes>
        <Route path='/' element={<Landing />}></Route>
        <Route path='/character/:id' element={<CharacterDetail />}></Route>
        <Route path='*' element={<Error404 />}></Route>
      </Routes>
    </div>
  );
}

/* PROP-TYPES */

/* EXPORT DEL COMPONENTE */
export default App;
