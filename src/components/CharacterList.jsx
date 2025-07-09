import { CharacterCard } from "./CharacterCard"

export const CharacterList = ({characters})=>{
    return(
        <div className="personajes">
            {characters.map((char)=>(
                <CharacterCard key={char.id} character={char}/>
            ))}
        </div>
    )
}