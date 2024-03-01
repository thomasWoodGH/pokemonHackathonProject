import React, { useEffect, useState } from 'react'

function PokemonInfo({ name }) {
    const [image, setImage] = useState("")
    const [types, setTypes] = useState([])
    const [stats, setStats] = useState({})
    const [abilities, setAbilities] = useState([])
    const [pokedexNumber, setPokedexNumber] = useState()

    useEffect(() => {
        const fetchPokemon = async () => {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
            const data = await response.json()
            setImage(data.sprites.front_default)
            data.types.length == 1 ? setTypes([data.types[0].type.name]) : setTypes([data.types[0].type.name, data.types[1].type.name])
            setStats({hp: data.stats[0].base_stat, attack: data.stats[1].base_stat, defense: data.stats[2].base_stat, special_attack: data.stats[3].base_stat, special_defense: data.stats[4].base_stat, speed: data.stats[5].base_stat})
            switch (data.abilities.length) {
                case 1:
                    setAbilities([data.abilities[0].ability.name])
                    break;
                case 2:
                    setAbilities([data.abilities[0].ability.name, data.abilities[1].ability.name])
                    break;
                case 3:
                    setAbilities([data.abilities[0].ability.name, data.abilities[1].ability.name, data.abilities[2].ability.name])
                    break;
                default:
                    break;
            }
            setPokedexNumber(data.id)
        }

        fetchPokemon()
    }, [])
  return (
    <div className='pokemon-info'>
        <h1>{name[0].toUpperCase() + name.slice(1)}</h1>
        <img src={image} alt={name} />
        <p className='pokedexNumber'>Pokedex Number: #{pokedexNumber}</p>
        <p>{types[0]} {types[1]}</p>
        <ul>
            <li>HP: {stats.hp}</li>
            <li>Attack: {stats.attack}</li>
            <li>Defense: {stats.defense}</li>
            <li>Special Attack: {stats.special_attack}</li>
            <li>Special Defense: {stats.special_defense}</li>
            <li>Speed: {stats.speed}</li>
        </ul>
        <p>Abilities: {abilities[0]} {abilities[1]} {abilities[2]}</p>
    </div>
  )
}

export default PokemonInfo