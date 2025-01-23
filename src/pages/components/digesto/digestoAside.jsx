import React from 'react';

export const DigestoAside = () => {
    return (
        <aside className="aside">
            <div className="aside__div">

                <div className="aside__div2">
                    {/* Manually created input fields */}
                    <h3 className="aside__title">Decretos</h3>
                    <div className="aside__input-container">
                        <input
                            className="aside__input"
                            type="text"
                            placeholder="Nro.Decreto"
                        />
                        <input
                            className="aside__input"
                            type="text"
                            placeholder="Año"
                        />
                        <input
                            className="aside__input"
                            type="text"
                            placeholder="Extracto"
                        />
                        <input
                            className="aside__input"
                            type="text"
                            placeholder="Modificado/Complementado por"
                        />
                        <input
                            className="aside__input"
                            type="text"
                            placeholder="Derogado por"
                        />
                    </div>
                </div>

                <div className="aside__div1">
                    <button>
                        Buscar
                    </button>
                    <button>
                        Limpiar
                    </button>
                </div>
            </div>
        </aside>
    );
}
