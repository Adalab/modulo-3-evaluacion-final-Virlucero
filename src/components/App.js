/* SECCIÓN DE IMPORT */

// - De React
// - Nuestros
import Filters from "./Filters";
import api from "../services/api";
// - Sass
import "../styles/App.scss";
// - Imágenes
import Logo from "../images/logo.png";
import { useEffect, useState } from "react";
import { async } from "q";
import CharacterCard from "./CharacterCard";

/* SECCIÓN DEL COMPONENTE */
function App() {
  /* VARIABLES ESTADO (DATOS) */
  const [allCharacters, setAllCharacters] = useState([]);

  /* EFECTOS (código cuando carga la página) */
  useEffect(() => {
    api.allCharacters().then((data) => {
      setAllCharacters(data);
    });
  }, []);

  /* FUNCIONES HANDLER */
  const handleSearch = (name) => {
    // api.allCharacters();
  };

  /* FUNCIONES Y VARIABLES AUXILIARES PARA PINTAR EL HTML */

  /* HTML */
  return (
    <div className='App'>
      {/* Aquí va el HTML */}

      <img src={Logo} />
      <Filters search={handleSearch} />

      {allCharacters.map((eachCharacter) => {
        console.log(eachCharacter);
        return <CharacterCard characterData={eachCharacter} />;
      })}
    </div>
  );
}

/* PROP-TYPES */

/* EXPORT DEL COMPONENTE */
export default App;
