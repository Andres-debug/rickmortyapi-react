import React, {useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import Swal from 'sweetalert2';

export const Detail = () => {
    const {id} = useParams()
    const [character,setCharacter] = useState(null);

    useEffect(()=>{
        const getDetail = async ()=>{
            try{
                const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
                 const data = await res.json()
                 setCharacter(data)
            }catch(err){
                Swal.fire('Error','No se pudo obtener el detalle','error')
            }
        }
        getDetail();
    },[id])

    if(!character) return <p>Cargando...</p>
    return(
        <div className='app'>
            <h2>{character.name}</h2>
            <img src={character.image} alt={character.name}/>
            <p><strong>Especie: </strong>{character.species}</p>
            <p><strong>Estado: </strong>{character.status}</p>
            <p><strong>Genero: </strong>{character.gender}</p>
            <p><strong>Origen: </strong>{character.origin.name}</p>
        </div>
    )
}

export default Detail