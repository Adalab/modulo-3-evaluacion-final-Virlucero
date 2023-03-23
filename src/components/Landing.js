import { useEffect, useState } from "react";
import CharacterCard from "./CharacterCard";

import Filters from "./Filters";
import api from "../services/api";

function Landing() {
  /* VARIABLES ESTADO (DATOS) */
  const [allCharacters, setAllCharacters] = useState([]);
  const [shownCharacters, setShownCharacters] = useState([]);

  /* EFECTOS (código cuando carga la página) */
  useEffect(() => {
    api.allCharacters().then((data) => {
      setShownCharacters(data);
      setAllCharacters(data);
    });
  }, []);

  /* FUNCIONES HANDLER */
  const handleFilterByName = (name) => {
    const filteredCharacters = allCharacters.filter((eachCharacter) =>
      eachCharacter.name.toLowerCase().includes(name.toLowerCase())
    );
    setShownCharacters(filteredCharacters);
  };
  const handleSearchByHouse = (house) => {
    api.searchByHouse(house).then((data) => {
      setShownCharacters(data);
    });
  };

  /* FUNCIONES Y VARIABLES AUXILIARES PARA PINTAR EL HTML */

  /* HTML */
  return (
    // <div className='app'>
    //   {/* Aquí va el HTML */}
    //   <img src={Logo} />
    <>
      <Filters
        searchByName={handleFilterByName}
        searchByHouse={handleSearchByHouse}
      />

      <div className='character-list'>
        {shownCharacters.map((eachCharacter) => {
          return <CharacterCard characterData={eachCharacter} />;
        })}
      </div>
    </>
    // </div>
  );
}

export default Landing;
