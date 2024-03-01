import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export default function Header() {
    return (
        <>
            <header className='header'>
                <h2>Pokemon Search Tool</h2>
                <nav>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/pokedex">Pokedex</NavLink>
                </nav>
            </header>
            <Outlet />
            <footer className='footer'>c Pokedex Search Tool '24</footer>
        </>
    )
}


