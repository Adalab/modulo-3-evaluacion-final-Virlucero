const allCharacters = () => {
  return fetch("https://hp-api.onrender.com/api/characters")
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
};
const searchByHouse = (house) => {
  return fetch(`https://hp-api.onrender.com/api/characters/house/${house}`)
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
};

export default { allCharacters, searchByHouse };
