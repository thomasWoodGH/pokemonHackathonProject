import React from 'react'
import { useNavigate } from 'react-router-dom'


function NameCard({ name }) {
  const navigate = useNavigate()

  const goToPokemonPage = () => {
    navigate(`/pokedex/${name.toLowerCase()}`)
  }

  return (
    <div className='name-card'>
      <button className='name-button' onClick={goToPokemonPage}>{name}</button>
    </div>
  )
}

export default NameCard