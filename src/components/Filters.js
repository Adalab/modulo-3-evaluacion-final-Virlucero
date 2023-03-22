import { useEffect, useState } from "react";

function Filters({ search }) {
  //state
  const [characterName, setCharacterName] = useState("");

  useEffect(() => {
    search(characterName);
  }, [characterName]);

  //handlers
  const handleFilter = (ev) => {
    setCharacterName(ev.target.value);
  };
  //jsx
  return (
    <div>
      <form>
        <label htmlFor='searchCharacter'>Buscar por personaje</label>
        <input
          type='text'
          autoComplete='off'
          name='search'
          id='searchCharacter'
          placeholder='ej:Harry'
          onInput={handleFilter}
          value={characterName}
        />
      </form>
    </div>
  );
}
export default Filters;
