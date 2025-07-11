import { useNavigate } from "react-router-dom";
import { useFavorites } from "../context/FavoritesContext";

export const CharacterCard = ({character})=>{

    const {id,name,image,species,status} = character;
    const statusClass = status == 'Dead' ? 'estado-muerto':'estado-vivo';
    const navigate = useNavigate();

    const{toggleFavorite, favorites} = useFavorites()
    const isFav = favorites.some((f)=>f.id === id)
    // onClick={()=>navigate(`/detalle/${id}`)}
    return(
        <div className="card"
        style={{cursor:'pointer'}}>
            <img src={image} alt={name}/>
            <h3>{name}</h3>
            <button onClick={()=> toggleFavorite(character)}>
                {isFav ? '💔Quitar': '❤Favorito'}
            </button>
            <p>Especie: {species}</p>
            <p className={statusClass}>Estado:{status}</p>
        </div>
    )

}