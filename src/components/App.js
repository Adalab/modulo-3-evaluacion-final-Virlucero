/* SECCIÓN DE IMPORT */

// - De React
import { Route, Routes } from "react-router-dom";
// - Nuestros
import Landing from "./Landing";
import CharacterDetail from "./CharacterDetail";
import Error404 from "./Error404";

// - Sass
import "../styles/App.scss";

// - Imágenes
import Logo from "../images/logo.png";

/* SECCIÓN DEL COMPONENTE */
function App() {
  //Router

  return (
    <div className='app'>
      {/* Aquí va el HTML */}
      <img src={Logo} alt='logo' />

      <Routes>
        <Route path='/' element={<Landing />}></Route>
        <Route path='/character/:id' element={<CharacterDetail />}></Route>
        <Route path='*' element={<Error404 />}></Route>
      </Routes>
    </div>
  );
}

/* EXPORT DEL COMPONENTE */
export default App;
