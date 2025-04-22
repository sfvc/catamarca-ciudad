import { useState, useEffect } from 'react';
import Paginado from "../common/paginado";
import data from '@data/intendentes.json'; // Importing the JSON data

export const IntendentesPage = () => {

    const [currentPage, setCurrentPage] = useState(1);
    const [tbDatas, setTbDatas] = useState([]);
    const totalPages = Math.ceil(data.tbDatas.length / 7); // Total pages based on 7 items per page

    // Handling page change
    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    // UseEffect to simulate loading data for the current page
    useEffect(() => {
        const itemsPerPage = 7; // Number of items to display per page
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        setTbDatas(data.tbDatas.slice(startIndex, endIndex));
    }, [currentPage]);

    return (
        <main className="intendentes__main container">
            <h1 className="intendentes__title">Intendentes</h1>
            <div className="intendentes__div">
                <input className="intendentes__divinput" type="text" placeholder="Busca el intendente" />
            </div>
            <table className="intendentes__table">
                <thead className="intendentes__thead">
                    <tr className="intendentes__row">
                        {data.thDatas.map((thData, index) => (
                            <th key={index} className="intendentes__header">{thData.titulo}</th>
                        ))}
                    </tr>
                </thead>
                <tbody className="intendentes__tbody">
                    {tbDatas.length > 0 ? (
                        tbDatas.map((tbData, index) => (
                            <tr key={index} className="intendentes__row">
                                <div className="intendentes__rowdiv">
                                    <img className="intendentes__rowdiv-img" src={tbData.imagen} alt={tbData.nombre} />
                                    <td className="intendentes__dataAvatar">{tbData.nombre}</td>
                                </div>
                                <td className="intendentes__data">{tbData.desde}</td>
                                <td className="intendentes__data">{tbData.hasta}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="3" className="intendentes__no-data">No hay más intendentes</td>
                        </tr>
                    )}
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
