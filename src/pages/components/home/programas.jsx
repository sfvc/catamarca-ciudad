const programas = [
    {
        title: "Compras",
        link: "/grid/34",
        iconClass: "icono-arg-carrito",
        bgClass: "bg-cereza",
        description: "Sistema electrónico de gestión de las compras y contrataciones de la Administración Pública Provincial"
    },
    {
        title: "Trámites a Distancia",
        link: "/grid/34",
        iconClass: "icono-arg-tramite-electronico",
        bgClass: "bg-escarapela",
        description: "Hacé trámites estés donde estés"
    },
    {
        title: "Turnos Catamarca",
        link: "/grid/34r",
        iconClass: "icono-arg-turno",
        bgClass: "bg-uva",
        description: "Solicitud de turnos para diferentes organismos de la administración pública"
    },
    {
        title: "Consulta de Haberes",
        link: "/grid/34",
        iconClass: "icono-arg-mis-cobros",
        bgClass: "bg-palta",
        description: "Mirá tus liquidaciones mensuales"
    },
    {
        title: "Expedientes",
        link: "/grid/34",
        iconClass: "icono-arg-archivo-consulta",
        bgClass: "bg-maiz",
        description: "Consultá tu expediente de forma simple y rápida"
    },
    {
        title: "Repositorio Digital",
        link: "/grid/34",
        iconClass: "icono-arg-database",
        bgClass: "bg-info",
        description: "Servicio de recopilación, conservación y distribución de material digital"
    },
    {
        title: "Coronavirus y Dengue",
        link: "/grid/34",
        iconClass: "icono-arg-coronavirus",
        bgClass: "bg-verde-azulado",
        description: "Información actualizada sobre casos de COVID-19 y dengue"
    },
    {
        title: "Estadísticas",
        link: "/grid/34",
        iconClass: "icono-arg-informes-y-estadisticas",
        bgClass: "bg-naranja",
        description: "Accede a los datos estadísticos Provinciales y Nacionales"
    }
];

const ProgramasComponent = () => {
    return (
        <div className="container">
            <h2 style={{textAlign:"center"}}>Planes y Programas</h2>
            <div className="row panels-row alineacion-center">
                {programas.map((programa, index) => (
                    <div className="col-xs-12 col-sm-6 col-md-3" key={index}>
                        <a
                            className="panel panel-default panel-icon"
                            title={programa.title}
                            target="_blank"
                            href={programa.link}
                        >
                            <div className={`panel-heading ${programa.bgClass}`}>
                                <i className={`atajo_faIcon__3OjA_ ${programa.iconClass}`}></i>
                            </div>
                            <div className="panel-body text-center">
                                <h3>{programa.title}</h3>
                                <p className="text-muted" aria-hidden="true">
                                    {programa.description}
                                </p>
                            </div>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProgramasComponent;
