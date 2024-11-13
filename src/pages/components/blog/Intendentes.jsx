import React, { useState } from 'react';
import Paginado from "../common/paginado";

export const IntendentesPage = () => {

    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 5; // Cambia según tu lógica

    const handlePageChange = (page) => {
        setCurrentPage(page);
        // Lógica para cargar los datos de la página correspondiente
    };

    const tbDatas = Array.from({length: "11"}, (_, index) => ({
        nombre: `prueba ${index +1}`,
        desde: `año desde ${index + 1}`,
        hasta: `año hasta ${index + 1}`
    }));

    const thDatas = Array.from({length: "3"}, (_, index) => ({
        titulo: `titulo ${index +1}`
    }));

    return ( 
        <main className="intendentes__main container">
            <h1 className="intendentes__title">Intendentes</h1>
            <div className="intendentes__div">
                <input className="intendentes__divinput"type="text" placeholder="Busca el intendente" />
            </div>
            <table className="intendentes__table">
                <thead className="intendentes__thead">
                    <tr className="intendentes__row">
                        {thDatas.map((thData, index) => (
                                <th key={index} className="intendentes__header">{thData.titulo}</th>
                            ))}
                        {/* <th className="intendentes__header">Año de Inicio</th>
                        <th className="intendentes__header">Año de Fin</th> */}
                    </tr>
                </thead>
                <tbody className="intendentes__tbody">
                    {tbDatas.map((tbData, index) => (
                        <tr className="intendentes__row">
                            <div className="intendentes__rowdiv">
                                <img className="intendentes__rowdiv-img" src="/images/avatar.svg" alt="" />
                                <td className="intendentes__data">{tbData.nombre}</td>
                            </div>
                            <td className="intendentes__data">{tbData.desde}</td>
                            <td className="intendentes__data">{tbData.hasta}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Paginado
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
            />
        </main>
    );
};
