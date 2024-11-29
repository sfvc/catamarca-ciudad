const BannerComponent = () => {
    const bannerFotos = [
        {
            id: 1,
            img: 'https://www.catamarcaciudad.gob.ar/wp-content/uploads/boton-plataforma-min.jpg'
        },
        {
            id: 2,
            img: 'https://www.catamarcaciudad.gob.ar/wp-content/uploads/Boton-Radio-Municipal.png'
        },
        {
            id: 3,
            img: 'https://www.catamarcaciudad.gob.ar/wp-content/uploads/boton-USINA-DE-DATOS.png'
        }
    ];

    return (
        <section className="banner container">
            {bannerFotos.map((banner) => (
                <div key={banner.id} className="banner__item">
                    <img src={banner.img} alt={`Banner ${banner.id}`} className="banner__image" />
                </div>
            ))}
        </section>
    );
};

export default BannerComponent;
