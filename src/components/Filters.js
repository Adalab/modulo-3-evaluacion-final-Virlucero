import { useState } from "react";

function Filters() {
  //state
  const [search, setSearch] = useState("");

  //handlers

  const handleFilter = (ev) => {
    setSearch(ev.target.value);
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
          value={search}
        />
      </form>
    </div>
  );
}
export default Filters;
