
import './App.css'
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Detail from './pages/Detail'

function App() {
//   const [characters,setCharacters]= useState([]);
//   const [query,setQuery] =useState('');
//   const[message,setMessage] = useState('')

    // useEffect(()=>{
    //     if(!query) return;

    //     const fetchCharacters = async ()=>{
    //         setMessage('Cargando...')
    //         try{
    //             const res = await fetch(`https://rickandmortyapi.com/api/character/?name=${query}`);
    //             const data = await res.json()

    //             if(data.results){
    //                 setCharacters(data.results)
    //                 setMessage(`Mostrando ${data.results.length} resultado(s)`)
    //             }else{
    //                 setCharacters([]);
    //                 setMessage('No se encontraron personajes')
    //             }
    //         }catch(error){
    //             setMessage('Error al buscar personajes');
    //             console.error(error)
    //         }

            
    //     }
    //     fetchCharacters()
    // },[query])
    
    return(
       <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/detalle/:id' element={<Detail/>}/>
       </Routes>
    )



}

export default App
