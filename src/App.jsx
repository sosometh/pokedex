import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'
import { PokemonList } from './components/PokemonList/PokemonList/PokemonList'

function App() {

  const [pokemons, setPokemons] = useState([])
  const [clicked, setCLicked] = useState(1)

  useEffect(() => {
    const fetchPokes = async () => {
      const reponse = await fetch("https://pokebuildapi.fr/api/v1/pokemon")
      const jsonPokes = await reponse.json()
      setPokemons(jsonPokes)
      console.log(jsonPokes)
    }
    fetchPokes()
  },[])
  
  return (
    <>
      <h1>PokeDex de Soso</h1>
      <PokemonList pokemons={pokemons} />
    </>
  )
}

export default App
