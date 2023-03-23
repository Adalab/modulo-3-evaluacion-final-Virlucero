import { useEffect, useState } from "react";
import ErrorMessage from "./ErrorMessage";
import "../styles/layout/FilterInput.scss";

function Filters({ searchByName, searchByHouse, searchByGender }) {
  //state
  const [characterName, setCharacterName] = useState("");
  const [houseName, setHouseName] = useState("gryffindor");
  const [gender, setGender] = useState("");
  // observo al input con useeffect y llamo a la func lifting creada en app.js  que paso por props

  useEffect(() => {
    searchByName(characterName);
  }, [characterName]);

  useEffect(() => {
    searchByHouse(houseName);
  }, [houseName]);

  useEffect(() => {
    searchByGender(gender);
  }, [gender]);

  //handlers
  const handleFilter = (ev) => {
    setCharacterName(ev.target.value);
  };
  const handleSelectHouse = (ev) => {
    console.log("cambio de casa", ev.target.value);
    setHouseName(ev.target.value);
  };
  const handleSelectGender = (ev) => {
    setGender(ev.target.value);
  };
  const handleSubmit = (ev) => {
    ev.preventDefault();
  };
  //jsx
  return (
    <>
      <form className='container' onSubmit={handleSubmit}>
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
          <select
            id='searchHouse'
            className='selection'
            onChange={handleSelectHouse}
            value={houseName}>
            <option value='all'>All</option>
            <option value='gryffindor'>Gryffindor</option>
            <option value='hufflepuff'>Hufflepuff</option>
            <option value='ravenclaw'>Ravenclaw</option>
            <option value='slytherin'>Slytherin</option>
          </select>
        </div>

        <div className='wrapper'>
          <label htmlFor='searchGender'>Seleccciona el género : </label>
          <select
            id='searchGender'
            className='selection'
            onChange={handleSelectGender}
            value={gender}>
            <option value='male'>Hombre</option>
            <option value='female'>Mujer</option>
          </select>
        </div>
      </form>
    </>
  );
}
export default Filters;
