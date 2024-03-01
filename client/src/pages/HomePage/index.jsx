import React from 'react'
import { useNavigate } from 'react-router-dom'

function HomePage() {
    const navigate = useNavigate()

    const goToPokedex = () => {
        navigate("/pokedex")
    }

    return (
        <div className="home-page">
            <h1>Pokedex Search Tool</h1>
            <button className='home-button-to-dex' onClick={goToPokedex}>View the Pokedex</button>
            <em>A comprehensive query tool for Pokemon</em>
        </div>
    )
}

export default HomePage