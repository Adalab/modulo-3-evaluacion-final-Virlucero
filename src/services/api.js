const allCharacters = () => {
  return fetch("https://hp-api.onrender.com/api/characters")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      return data;
    });
};

export default { allCharacters };
