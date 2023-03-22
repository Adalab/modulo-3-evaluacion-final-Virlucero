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
import CharacterCard from "./CharacterCard";

/* SECCIÓN DEL COMPONENTE */
function App() {
  /* VARIABLES ESTADO (DATOS) */
  const [storedCharacters, setStoredCharacters] = useState([]);
  const [allCharacters, setAllCharacters] = useState([]);

  /* EFECTOS (código cuando carga la página) */
  useEffect(() => {
    api.allCharacters().then((data) => {
      setAllCharacters(data);
      setStoredCharacters(data);
    });
  }, []);

  /* FUNCIONES HANDLER */
  const handleFilter = (name) => {
    console.log("filtramos por", name);
    const filteredCharacters = storedCharacters.filter((eachCharacter) =>
      eachCharacter.name.toLowerCase().includes(name.toLowerCase)
    );
    console.log(filteredCharacters);
    setAllCharacters(filteredCharacters);
  };

  /* FUNCIONES Y VARIABLES AUXILIARES PARA PINTAR EL HTML */

  /* HTML */
  return (
    <div className='app'>
      {/* Aquí va el HTML */}

      <img src={Logo} />
      <Filters search={handleFilter} />

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
