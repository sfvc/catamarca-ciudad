import React from 'react';

const Paginado = ({ currentPage, totalPages, onPageChange }) => {
    const handlePageChange = (page) => {
        if (page > 0 && page <= totalPages) {
            onPageChange(page);
        }
    };

    return (
        <div className="paginado">
            <a onClick={() => handlePageChange(currentPage - 1)}>&laquo;</a>
            {[...Array(totalPages)].map((_, index) => (
                <a
                    key={index + 1}
                    className={currentPage === index + 1 ? 'active' : ''}
                    onClick={() => handlePageChange(index + 1)}
                >
                    {index + 1}
                </a>
            ))}
            <a onClick={() => handlePageChange(currentPage + 1)}>&raquo;</a>
        </div>
    );
};

export default Paginado;
