import React from 'react';
import digestoAside from '../../data/digestoAside.json'; // Adjust the path as necessary

export const DigestoAside = () => {
    return (
        <aside className="aside">
            <div className="aside__div">

                <h3 className="aside__title">Decretos</h3>

                <div className="aside__div1">
                    <ul className="aside__list">
                        {digestoAside.trendingTopics.map((topic, index) => (
                            <li className="aside__item" key={index}>
                                <img className="aside__image" src={topic.image} alt={topic.text} />
                                {topic.text}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="aside__div2">
                    <input className="aside__div2input" type="text" name="" id="" placeholder='Buscá el decreto..'/>
                    <ul className="aside__list">
                        <li className="aside__itemfooter">
                            <button className="aside__link">
                                <img className="aside__linkimg" src="./src/pages/images/calendar.svg" alt="" />
                            </button>
                            <button className="aside__link">
                                <img className="aside__linkimg" src="./src/pages/images/calendar.svg" alt="" />
                            </button>
                            <button className="aside__link">
                                <img className="aside__linkimg" src="./src/pages/images/calendar.svg" alt="" />
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </aside>
    );
}
