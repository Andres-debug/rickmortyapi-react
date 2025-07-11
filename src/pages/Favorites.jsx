import React from 'react'
import { useFavorites } from '../context/FavoritesContext'
import { CharacterList } from '../components/CharacterList';

export const Favorites = () => {

    const {favorites} = useFavorites();
    return(
        <div>
            <h1>Favoritos</h1>
            {favorites.length === 0?(
                <p>No has agregado personajes aun</p>
            ):(
                <CharacterList characters={favorites}/>
            )}
        </div>
    )
}

export default Favorites