import { useState,useEffect } from 'react'
import './App.css'
import { SearchInput } from './components/SearchInput';
import { CharacterList } from './components/CharacterList';

function App() {
  const [characters,setCharacters]= useState([]);
  const [query,setQuery] =useState('');
  const[message,setMessage] = useState('')

    useEffect(()=>{
        if(!query) return;

        const fetchCharacters = async ()=>{
            setMessage('Cargando...')
            try{
                const res = await fetch(`https://rickandmortyapi.com/api/character/?name=${query}`);
                const data = await res.json()

                if(data.results){
                    setCharacters(data.results)
                    setMessage(`Mostrando ${data.results.length} resultado(s)`)
                }else{
                    setCharacters([]);
                    setMessage('No se encontraron personajes')
                }
            }catch(error){
                setMessage('Error al buscar personajes');
                console.error(error)
            }

            
        }
        fetchCharacters()
    },[query])
     console.log('Query', query)
     console.log('Characters', characters)
    return(
        <div className='app'>
            <h1>Buscador de personajes en React</h1>
            <SearchInput onSearch={setQuery}/>
            <p>{message}</p>
            <CharacterList characters={characters}/>
        </div>
    )



}

export default App
