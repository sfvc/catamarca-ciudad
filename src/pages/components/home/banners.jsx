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
            img: 'https://www.catamarcaciudad.gob.ar/wp-content/uploads/IMG-20220322-WA0098.jpg'
        },
    ];

    return (
        <section className="banner container">
            {bannerFotos.map((banner) => (
                <div key={banner.id} className="">
                    <img src={banner.img} alt={`Banner ${banner.id}`} className="banner__image" />
                </div>
            ))}
        </section>
    );
};

export default BannerComponent;
