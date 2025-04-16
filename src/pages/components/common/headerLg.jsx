import { useState, useEffect, useRef } from 'react';
import { dropdowns } from '../../data/header.json';

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
        <nav className="navbar navbar-top navbar-default header__displaynone" style={{borderBottom:"3px solid #e7e7e7", backgroundColor:"#001529"}}>
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
                                    onMouseEnter={(e) => (e.currentTarget.style.background = '#3E5A7E')}
                                    onMouseLeave={(e) => (e.currentTarget.style.background = '#232D4F')}
                                >
                                    {name}
                                    {options.length > 0 && (
                                        <span style={{ fontSize: '1rem' }}>▿</span>
                                    )}
                                </button>

                                {dropdownOpen[name] && (
                                    <div
                                        style={{
                                            position: 'fixed',
                                            top: '76px',
                                            left: '50%',
                                            transform: 'translateX(-50%)',
                                            zIndex: 999,
                                            width: '90vw',
                                            maxWidth: '1140px',
                                            marginTop: '1.2rem',
                                            backgroundColor: 'white',
                                            boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
                                            borderRadius: '0.5rem',
                                            padding: '1.5rem',
                                            display: 'grid',
                                            gridTemplateColumns: 'repeat(3, 1fr)',
                                            gap: '1rem',
                                        }}
                                    >
                                        {options.map(({ label, link, description, external }, index) => (
                                            <a
                                                key={index}
                                                href={link}
                                                target={external ? '_blank' : '_self'}
                                                rel="noopener noreferrer"
                                                style={{
                                                    display: 'block',
                                                    gap: '0.25rem',
                                                    padding: '1rem',
                                                    borderRadius: '4px',
                                                    textDecoration: 'none',
                                                    color: '#333',
                                                    fontSize: '1rem',
                                                    backgroundColor: '#f9f9f9',
                                                    borderLeft: '4px solid transparent',
                                                    transition: 'all 0.3s ease'
                                                }}
                                                onMouseEnter={(e) => {
                                                    e.currentTarget.style.backgroundColor = '#e6f0ff';
                                                    e.currentTarget.style.borderLeft = '4px solid #232D4F';
                                                }}
                                                onMouseLeave={(e) => {
                                                    e.currentTarget.style.backgroundColor = '#f9f9f9';
                                                    e.currentTarget.style.borderLeft = '4px solid transparent';
                                                }}
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
                            onMouseEnter={(e) => (e.currentTarget.style.background = '#3E5A7E')}
                            onMouseLeave={(e) => (e.currentTarget.style.background = '#232D4F')}
                            href="/categoriasTramites"
                        >
                            Trámites
                        </a>

                        <a
                            className='dropdown-items'
                            onMouseEnter={(e) => (e.currentTarget.style.background = '#3E5A7E')}
                            onMouseLeave={(e) => (e.currentTarget.style.background = '#232D4F')}
                            href="https://mail.google.com/mail/?view=cm&fs=1&to=info@catamarcaciudad.gob.ar"
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
