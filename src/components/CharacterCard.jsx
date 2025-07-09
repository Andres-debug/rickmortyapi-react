export const CharacterCard = ({character})=>{

    const {name,image,species,status} = character;
    const statusClass = status == 'Dead' ? 'estado-muerto':'estado-vivo';

    return(
        <div className="card">
            <img src={image} alt={name}/>
            <h3>{name}</h3>
            <p>Especie: {species}</p>
            <p className={statusClass}>Estado:{status}</p>
        </div>
    )

}