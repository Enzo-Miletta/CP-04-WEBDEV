import { NavLink } from 'react-router-dom'

import './Header.css'

export const Header = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li><NavLink className={({ isActive }) =>
                        isActive ? "active" : ""
                    } to={'/'}>Home</NavLink></li>
                    <li><NavLink className={({ isActive }) =>
                        isActive ? "active" : ""
                    } to={'/sobre'}>Sobre</NavLink></li>
                    <li><NavLink className={({ isActive }) =>
                        isActive ? "active" : ""
                    } to={'/contato'}>Contato</NavLink></li>
                </ul>
            </nav>
        </header>
    )
}