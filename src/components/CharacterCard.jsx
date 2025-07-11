import { useNavigate } from "react-router-dom";

export const CharacterCard = ({character})=>{

    const {id,name,image,species,status} = character;
    const statusClass = status == 'Dead' ? 'estado-muerto':'estado-vivo';
    const navigate = useNavigate();

    return(
        <div className="card" onClick={()=>navigate(`/detalle/${id}`)}
        style={{cursor:'pointer'}}>
            <img src={image} alt={name}/>
            <h3>{name}</h3>
            <p>Especie: {species}</p>
            <p className={statusClass}>Estado:{status}</p>
        </div>
    )

}