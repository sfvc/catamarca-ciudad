import { useEffect, useState } from "react";
import { catamarcaApi } from "@api/catamarcaApi";

const MarqueeHeader = () => {
    const [marquee, setMarquee] = useState([]);

    useEffect(() => {
        const fetchMarquee = async () => {
            try {
                const response = await catamarcaApi.get("/items/marquee");
                setMarquee(response.data.data);
            } catch (error) {
                console.error("Error obteniendo accesos rápidos:", error);
            }
        };

        fetchMarquee();
    }, []);

    const activeMarquees = marquee.filter(item => item.activo);
    const lastText = activeMarquees.length > 0 ? activeMarquees[activeMarquees.length - 1].titulo : "No hay mensajes activos";

    return (
        <div className="marquee__container container">
            <a href="" className="marquee__item">
                <i class="fa fa-info-circle marquee__icon" aria-hidden="true"></i>
                <p className="marquee__phone">{lastText}</p>
            </a>
        </div>
    );
};

export default MarqueeHeader;
