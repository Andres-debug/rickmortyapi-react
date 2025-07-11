
import './App.css'
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Detail from './pages/Detail'
import { FavoritesProvider } from './context/FavoritesContext'
import Favorites from './pages/Favorites'

function App() {

    return(
        <FavoritesProvider>
       <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/detalle/:id' element={<Detail/>}/>
        <Route path='/favoritos' element={<Favorites/>}/>
       </Routes>
       </FavoritesProvider>
    )



}

export default App
