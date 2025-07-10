import React,{useState,useEffect} from "react";
import { SearchInput } from "../components/SearchInput";
import {CharacterList} from "../components/CharacterList"
import Swal from "sweetalert2";

export const Home = () => {
  const [characters, setCharacters] = useState([]);
  const [query, setQuery] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (!query) return;

    const fetchCharacters = async () => {
      setMessage("Cargando...");
      try {
        const res = await fetch(
          `https://rickandmortyapi.com/api/character/?name=${query}`
        );
        const data = await res.json();

        if (data.results) {
          setCharacters(data.results);
          setMessage(`Mostrando ${data.results.length} resultado(s)`);
        } else {
          setCharacters([]);
          setMessage("No se encontraron personajes");
          Swal.fire('Ups!','No se encontraron personajes','warning')
        }
      } catch (error) {
        setMessage("Error al buscar personajes");
        console.error(error);
        Swal.fire('Error','Nose pudo conectar con la API','error')
      }
    };
    fetchCharacters();
  }, [query]);

  return (
    <div className="app">
      <h1>Home</h1>
      <SearchInput onSearch={setQuery}/>
      <p>{message}</p>
      <CharacterList characters={characters}/>
    </div>
  );
};

export default Home;
