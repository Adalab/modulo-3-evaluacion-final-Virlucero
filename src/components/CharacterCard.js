function CharacterCard({ characterData }) {
  return (
    <div>
      <img src={characterData.image}></img>
      <p>{characterData.name}</p>
      <p>{characterData.species}</p>
    </div>
  );
  // const [character, setCh]
}

export default CharacterCard;
