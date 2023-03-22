import "../styles/layout/CharacterCard.scss";
// hago un ternario donde digo que si el character no tiene imagen, hago un placeholder

function CharacterCard({ characterData }) {
  return (
    <div className='character-card'>
      {characterData.image ? (
        <img src={characterData.image} alt={characterData.name} />
      ) : (
        <img
          src={`https://via.placeholder.com/210x295/ffffff/666666/?text=${characterData.name}`}
        />
      )}

      <p>{characterData.name}</p>
      <p>{characterData.species}</p>
    </div>
  );
}

export default CharacterCard;
