import React, { useState, useEffect, useRef } from 'react';
import {dropdowns} from './header.json'; // Adjust the path as needed

const Header = () => {
    const [dropdownOpen, setDropdownOpen] = useState({});
    const dropdownRefs = useRef({});

    const toggleDropdown = (menu) => {
        setDropdownOpen((prev) => ({
            ...Object.keys(prev).reduce((acc, key) => {
                if (key !== menu) acc[key] = false; // Close other dropdowns
                return acc;
            }, {}),
            [menu]: !prev[menu], // Toggle the clicked dropdown
        }));
    };

    const handleClickOutside = (event) => {
        const isOutsideClick = Object.keys(dropdownRefs.current).some((key) => {
            return dropdownRefs.current[key]?.contains(event.target);
        });

        if (!isOutsideClick) {
            setDropdownOpen({});
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <header>
            <nav className="navbar navbar-top navbar-default border-bottom-amarillo">
                <div className="container p-b-1">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="/" id="navbar-brand" aria-label="Argentina.gob.ar Presidencia de la Nación">
                            <img src="../src/pages/images/logo-new-2020.png" alt="Argentina.gob.ar" height="50" width="254" />
                        </a>
                    </div>

                    <a className="btn hidden-xs btn-login boton__default" href="/prueba">Contacto</a>
                    <a className="btn hidden-xs btn-login boton__default" href="/prueba">Tramites</a>
                    <a className="btn hidden-xs btn-login boton__default" href="/prueba">Servicios</a>
                    <a className="btn hidden-xs btn-login boton__default" href="/prueba">Turismo</a>
                    {dropdowns.map(({ name, options }) => (
                        <div className="dropdown" key={name} ref={(el) => (dropdownRefs.current[name] = el)}>
                            <button onClick={() => toggleDropdown(name)} className="btn hidden-xs btn-login boton__default">
                                {name.charAt(0).toUpperCase() + name.slice(1).replace(/_/g, ' ')}
                            </button>
                            {dropdownOpen[name] && (
                                <ul className="dropdown-menu">
                                    {options.map((option, index) => (
                                        <li key={index}>
                                            <a href="https://mi.argentina.gob.ar/">
                                                {option}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    ))}
                </div>
            </nav>
        </header>
    );
};

export default Header;
