import { useState } from 'react';
import {navMobile} from '../../data/navbarMobile.json'
import {dropdowns} from '../../data/header.json'

// First Modal Component (HeaderMobileNav)
const HeaderMobileNav = () => {
    const [selectedId, setSelectedId] = useState(null); // Track selected ID

    const renderModal = () => {
        // Conditionally render modal based on selectedId
        if (selectedId === 1) {
            return <SecondModalMobile />;
        } else if (selectedId === 2) {
            return <ThirdModalMobile />;
        }
        return null; // Return nothing if no modal is selected
    };

    // Return null to hide the nav when modal is selected
    return (
        <div className="header-mobile-nav__content">
            {selectedId === null ? (
                // Render the navigation when no modal is selected
                <ul className="header-mobile-nav__list">
                    {navMobile.navDefault.map((list, index) => (
                        <li className="header-mobile-nav__item" key={index}>
                            <a
                                className="header-mobile-nav__link"
                                href="#"
                                onClick={() => setSelectedId(list.id)} // Set the selected ID on click
                            >
                                <small>{list.titulo}</small>
                            </a>
                        </li>
                    ))}
                </ul>
            ) : (
                // When a modal is selected, display the corresponding modal
                renderModal()
            )}
        </div>
    );
};

// Second Modal Component
const SecondModalMobile = () => {
    return (
        <div className="header-mobile-nav__content">
            <ul className="header-mobile-nav__list">
                {navMobile.navSecond.map((list, index) => (
                    <li className="header-mobile-nav__item" key={index}>
                        <a className="header-mobile-nav__link" href={list.link}>
                            <small>{list.titulo}</small>
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

// Third Modal Component
const ThirdModalMobile = () => {
    return (
        <div className="header-mobile-nav__content">
            <ul className="header-mobile-nav__list">
                {navMobile.navThird.map((list, index) => (
                    <li className="header-mobile-nav__item" key={index}>
                        <a className="header-mobile-nav__link" href={list.link}>
                            <small>{list.titulo}</small>
                            <img src="/images/externalLink.svg" alt="External link" width={16} />
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default HeaderMobileNav;
