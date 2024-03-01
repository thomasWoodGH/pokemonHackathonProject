import React from 'react'
import { useParams } from 'react-router-dom'
import { PokemonInfo } from '../../components'

function PokemonPage() {
    const name = useParams().name
  return (
    <PokemonInfo name={name}/>
  )
}

export default PokemonPage