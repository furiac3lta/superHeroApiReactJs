import React from 'react'
import './../styles/Navbar.css'
import { Link } from 'react-router-dom'
export default function Navbar() {
    return (
        <nav className="Navbar">
            <div className="Container">
                <div className="Navbar__logo">
                    <Link className="Navbar__logo" to="/">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/b/b9/Marvel_Logo.svg" alt="Logo-Marvel"/>
                    </Link>  
                </div>
                <div className="Navbar__content">
                    <h3>Encontra a todos los personajes del mundo Marvel!</h3>
                </div>    
            </div>
        </nav>
    )
}
