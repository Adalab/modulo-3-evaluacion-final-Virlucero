import { useEffect, useState } from "react";
import "../styles/layout/FilterInput.scss";

function Filters({ search }) {
  //state
  const [characterName, setCharacterName] = useState("");
  const [houseName, setHouseName] = useState("");
  // observo al input con useeffect y llamo a la func lifting creada en app.js  que paso por props
  useEffect(() => {
    search(characterName);
  }, [characterName]);

  //handlers
  const handleFilter = (ev) => {
    setCharacterName(ev.target.value);
  };
  //jsx
  return (
    <form className='container'>
      <div className='wrapper'>
        <label htmlFor='searchCharacter'>Buscar por personaje:</label>
        <input
          type='text'
          autoComplete='off'
          name='search'
          id='searchCharacter'
          placeholder='ej:Harry'
          onInput={handleFilter}
          value={characterName}
        />
      </div>
      <div className='wrapper'>
        <label htmlFor='searchHouse'>Selecccionar la casa: </label>
        <input
          type='text'
          autoComplete='off'
          name='search'
          id='searchHouse'
          placeholder='ej:Harry'
          onInput={handleFilter}
          value={houseName}
        />
      </div>
    </form>
  );
}
export default Filters;
