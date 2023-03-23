import { useEffect, useState } from "react";
import { matchPath, useLocation } from "react-router";
import api from "../services/api";
import "../styles/layout/CharacterDetails.scss";

function CharacterDetail() {
  // codigo para obtener el id leyendolo de la ruta
  const { pathname } = useLocation();
  // Con el matchPath compruebo si la ruta actual coincide con /product/:productId
  const routeData = matchPath("character/:id", pathname);
  // Si no coincide, routeData es null
  // Si sí coincide, routeData es un objeto con mucha información útil
  // La información que me interesa está en routeData.params.productId
  const characterId = routeData !== null ? routeData.params.id : "";

  const [allData, setAllData] = useState([]);
  const [characterDetails, setCharacterDetails] = useState();

  //   la primera vez que se renderiza la pagina, llamamos al API
  useEffect(() => {
    api.allCharacters("all").then((info) => {
      setAllData(info);
    });
  }, []);

  //   obersvo cuando cambia la variable allData
  useEffect(() => {
    const characterData = allData.find(
      (eachCharacter) => eachCharacter.id === characterId
    );
    console.log(characterData);
    // seteo mi variable de estado con los datos del ID que me ha coincidido
    setCharacterDetails(characterData);
  }, [allData]);

  //   pinto un fragment <> por si character details esta undefined, es decir, la primera vez que renderizamos
  return (
    <div className='main'>
      {characterDetails && (
        <div className='character-detail-card'>
          {characterDetails.image ? (
            <img src={characterDetails.image} alt={characterDetails.name} />
          ) : (
            <img
              src={`https://via.placeholder.com/210x295/ffffff/666666/?text=${characterDetails.name}`}
            />
          )}

          <div className='details'>
            <p>{characterDetails.name}</p>
            <p>Estatus: {characterDetails.alive ? "Vivo" : "muerto"}</p>
            <p>
              Especie:
              {characterDetails.species === "human" ? "Humano" : "Marciano"}
            </p>
            <p>
              Genero: {characterDetails.gender === "male" ? "Hombre" : "Mujer"}
            </p>
            <p>Casa: {characterDetails.house}</p>
          </div>
        </div>
      )}
    </div>
  );
}
export default CharacterDetail;
