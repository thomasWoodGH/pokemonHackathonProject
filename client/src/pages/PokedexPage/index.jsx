import React, { useEffect, useState } from 'react'
import { NameCard } from '../../components'

function PokedexPage() {

    const [names, setNames] = useState([])
    const [textFilter, setTextFilter] = useState("")

    useEffect(() => {
        const fetchPokedex = async () => {
            try {
                const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=1025&offset=0')
                const data = await response.json()
                setNames(data.results.map(p => p.name[0].toUpperCase() + p.name.slice(1)))
            } catch (error) {
                console.log(error)
            }
        }
        fetchPokedex()
    }, [])

    const displayPokemon = () => {
        return names
            .filter((n => textFilter.length == 0 || n.toLowerCase().includes(textFilter.toLowerCase())))
            .map((n, i) => <NameCard key={i} name={n} />)
    }

    const updateTextFilter = (e) => {
        setTextFilter(e.target.value)
    }

    return (
        <>
            <div className='searchbox'>
                <label>Search by name: <input type="text" value={textFilter} onChange={updateTextFilter} /></label>
            </div>
            <div className='pokedex-page'>
                {displayPokemon()}
            </div>
        </>
    )
}

export default PokedexPage