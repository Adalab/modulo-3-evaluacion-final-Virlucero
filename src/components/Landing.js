import { useEffect, useState } from "react";
import CharacterCard from "./CharacterCard";

import Filters from "./Filters";
import api from "../services/api";
import ErrorMessage from "./ErrorMessage";

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
    console.log(
      "estos son los caracteres qeu vamos a mostar (shownCharacters)",
      shownCharacters
    );
    setShownCharacters(filteredCharacters);
  };
  const handleSearchByHouse = (house) => {
    api.searchByHouse(house).then((data) => {
      setShownCharacters(data);
    });
  };
  const handleSearchByGender = (gender) => {
    const filterGender = allCharacters.filter(
      (eachCharacter) => eachCharacter.gender === gender
    );
    setShownCharacters(filterGender);
  };

  /* FUNCIONES Y VARIABLES AUXILIARES PARA PINTAR EL HTML */

  /* HTML */
  return (
    <>
      <Filters
        searchByName={handleFilterByName}
        searchByHouse={handleSearchByHouse}
        searchByGender={handleSearchByGender}
      />

      <div className='character-list'>
        {shownCharacters.length > 0 ? (
          shownCharacters.map((eachCharacter) => {
            return <CharacterCard characterData={eachCharacter} />;
          })
        ) : (
          <ErrorMessage />
        )}
      </div>
    </>
  );
}

export default Landing;
