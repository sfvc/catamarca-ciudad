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
        },
        {
            id: 4,
            img: 'https://scontent.fctc1-1.fna.fbcdn.net/v/t39.30808-6/459944483_941385608027734_9036137352727319986_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_ohc=gNT5ZO5ZMfMQ7kNvgG_A4yj&_nc_zt=23&_nc_ht=scontent.fctc1-1.fna&_nc_gid=AfmMN-SXWz9goLT8GpVpY4Z&oh=00_AYDLk061PxJwX1rl9Rn4g7If4eJiyLwyX20yG_ykpCZLfA&oe=67540810'
        }        
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
