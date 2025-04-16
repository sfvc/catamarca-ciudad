// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="main-footer" style={{backgroundColor:"#e7e7e7"}}>
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-sm-6">
            <div className="region region-footer1">
              <section id="block-menu-menu-footer-1" className="block block-menu clearfix">
                <img src="/images/logo-capital-sfvc.svg" alt="catamarca capital logo" width="auto" height={40}/>
                <a href="/radio" style={{all: "unset", cursor: "pointer"}}>
                  <div className='footer-radio__container'>
                      <h2 className="block-title h3 section-title">Radio Municipal</h2>
                      <div className='footer-radio'>
                        <i className="icono-arg-comunicacion"></i>  
                        <small>Escucha nuestra Radio Municipal</small>
                      </div>
                  </div>
                </a>
              </section>
            </div>
          </div>
          <div className="col-md-4 col-sm-6">
            <div className="region region-footer2">
              <section id="block-menu-menu-footer-2" className="block block-menu clearfix">
                <h2 className="block-title h3 section-title">DIRECCIÓN</h2>
                <ul className="menu nav">
                  <li className="first leaf">Güemes 650 P.A.</li>
                  <li className="leaf">San Fernando del Valle de Catamarca</li>
                  <li className="last leaf">Catamarca
                  República Argentina</li>
                </ul>
              </section>
            </div>
          </div>
          <div className="col-md-4 col-sm-6">
            <div className="region region-footer3">
              <section id="block-menu-menu-footer-3" className="block block-menu clearfix">
                <h2 className="block-title h3 section-title">Palacio Municipal</h2>
                <ul className="menu nav">
                  <li className="first leaf"> La Rioja 631
                  San Fernando del Valle de Catamarca</li>
                  <li className="leaf">Catamarca</li>
                  <li className="last leaf">República Argentina – CP: K4700EMV</li>
                </ul>
              </section>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row sub-footer">
          <div className="container">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <a href="https://twitter.com/x/migrate?tok=7b2265223a222f4d756e6953465643222c2274223a313732393639383731397d67c3d556c3c3da4b63fc7c5e3e8713dd">
                <img src="/images/twitter.svg" alt="Twitter" target="blank"/>
              </a>
              <a href="https://www.facebook.com/catamarcatucapital" target="blank">
                <img src="/images/facebook.svg" alt="Facebook"/>
              </a>
              <a href="https://www.youtube.com/CatamarcaCapital" target="blank">
                <img src="/images/youtube.svg" alt="YouTube" />
              </a>
              <a href="https://www.instagram.com/catamarcacapital/" target="blank">
                <img src="/images/instagram.svg" alt="Instagram" />
              </a>
              <a href="https://wa.me/3333344444" target="blank">
                <img src="/images/wsp.svg" alt="Whatsapp" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
