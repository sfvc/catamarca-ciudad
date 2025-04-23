import { useState, useEffect, useRef } from 'react';
import { dropdowns } from '@data/header.json';

const HeaderLg = () => {
    const [dropdownOpen, setDropdownOpen] = useState({});
    const dropdownRefs = useRef({});

    const toggleDropdown = (menu) => {
        setDropdownOpen((prev) => ({
            ...Object.keys(prev).reduce((acc, key) => {
                if (key !== menu) acc[key] = false;
                return acc;
            }, {}),
            [menu]: !prev[menu],
        }));
    };

    const handleClickOutside = (event) => {
        const isOutsideClick = Object.keys(dropdownRefs.current).some((key) =>
            dropdownRefs.current[key]?.contains(event.target)
        );
        if (!isOutsideClick) setDropdownOpen({});
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            setDropdownOpen({});
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className="navbar navbar-top navbar-default header__displaynone" style={{ borderBottom: "3px solid #e7ba61", backgroundColor: "#001529" }}>
            <div className="container">
                <div className="navbar-header">
                    <a
                        className="navbar-brand"
                        href="/"
                        id="navbar-brand"
                        aria-label="Argentina.gob.ar Presidencia de la Nación"
                    >
                        <img
                            src="/images/logo_CATACAPI.png"
                            className='navbar-header'
                            alt="Catamarca Capital"
                            height="50"
                            width="auto"
                        />
                    </a>
                </div>

                <div style={{ flex: 1, display: 'flex', justifyContent: 'end', marginRight: '10px' }}>
                    <div className="header__displaynone" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>

                        {dropdowns.map(({ name, options }) => (
                            <div
                                key={name}
                                ref={(el) => (dropdownRefs.current[name] = el)}
                                style={{ position: 'relative', display: 'inline-block' }}
                            >
                                <button
                                    onClick={() => toggleDropdown(name)}
                                    className='dropdown-items'
                                >
                                    {name}
                                    {options.length > 0 && (
                                        <span style={{ fontSize: '1rem' }}>▿</span>
                                    )}
                                </button>

                                {dropdownOpen[name] && (
                                    <div className='mega-menu'>
                                        {options.map(({ label, link, description, external }, index) => (
                                            <a
                                                key={index}
                                                href={link}
                                                target={external ? '_blank' : '_self'}
                                                rel="noopener noreferrer"
                                                className='menu-link'
                                            >
                                                <div style={{ fontWeight: 'bold' }}>{label}</div>
                                                {description && (
                                                    <div style={{ fontSize: '1rem', color: '#666' }}>
                                                        {description}
                                                    </div>
                                                )}
                                            </a>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}

                        <a
                            className='dropdown-items'
                            href="/categoriasTramites"
                        >
                            Trámites
                        </a>

                        <a
                            className='dropdown-items'
                            href="/contacto"
                            style={{
                                textDecoration: 'none',
                            }}
                            target="_blank"
                        >
                            Contacto
                        </a>

                    </div>
                </div>
            </div>
        </nav>
    );
};

export default HeaderLg;
