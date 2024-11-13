import React from 'react';
import { faqtexto } from '../../data/faq.json';

// export const Faq = () => {
//     return ( 
//         <div classNameName="panel-pane pane-texto">
//             <div classNameName="pane-content">
//                 <div classNameName="w-100">
//                     <div classNameName="container-fluid bg-light">
//                         <div classNameName="container m-b-2">
//                             <div classNameName="row">
//                                 <h2 classNameName="h1 m-t-5 m-b-2">Preguntas frecuentes</h2>
//                                 {faqtexto.map((faqcard, index) => (
//                                     <Faqcard key={index} title={faqcard.title} description={faqcard.description} />
//                                 ))}
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

const FaqCard = () => {
    return (
        <>
            <section>
                <div className="container">
                    <div>
                        <div className="panel-pane pane-titulo col-md-12 m-l-m15">
                            <div className="pane-content">
                                <h2 className="activities-sidbar">Noticias Municipales</h2>
                            </div>
                        </div>
                        <div className="panel-separator"></div>
                        <div className="panel-pane pane-texto">
                            <div className="pane-content">
                                <p>Ponete al dia con lo que pasa en nuestra Municipalidad</p>
                            </div>
                        </div>
                        <div className="panel-separator"></div>
                        <div className="panel-pane pane-atajos">
                            <div className="pane-content">
                                <div className="row panels-row m-t-2 ">
                                    <div className="col-xs-12 col-sm-6 col-md-4">
                                        <a href="/tema/documentacion" className="panel panel-default">
                                            <img src="/images/palacioMuni.jpg" alt="" style={{width: "100%"}}/>
                                            <div className="panel-body home-new m-b-1">
                                                <p className="h3">Prueba</p>
                                                <p>Del DNI a la cédula verde o el Certificado Único de Discapacidad, te explicamos cómo y dónde tramitar los documentos de uso habitual.</p>
                                                <div className="icon-arrow-right text-primary">
                                                    <i className="fa fa-arrow-right"></i>
                                                    <span className="sr-only">ícono flecha ir al contenido</span>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="col-xs-12 col-sm-6 col-md-4">
                                        <a href="/tema/estudiar" className="panel panel-default">
                                            <img src="/images/parquejumeal.webp" alt=""  style={{width: "100%"}}/>
                                            <div className="panel-body home-new m-b-1">
                                                <p className="h3">Educación</p>
                                                <p>Para nivel inicial, primario, secundario o superior; para argentinos o extranjeros, te presentamos los servicios y beneficios que podés gestionar.</p>
                                                <div className="icon-arrow-right text-primary">
                                                    <i className="fa fa-arrow-right"></i>
                                                    <span className="sr-only">ícono flecha ir al contenido</span>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="col-xs-12 col-sm-6 col-md-4">
                                        <a href="/tema/trabajar" className="panel panel-default">
                                            <img src="/images/Saadi-plaza.webp" alt="" style={{width: "100%"}}/>
                                            <div className="panel-body home-new m-b-1">
                                                <p className="h3">Trabajo y empleo</p>
                                                <p>Si estás en relación de dependencia o sos monotributista, si buscás trabajo o querés capacitarte, estos trámites y servicios te pueden ser de utilidad.</p>
                                                <div className="icon-arrow-right text-primary">
                                                    <i className="fa fa-arrow-right"></i>
                                                    <span className="sr-only">ícono flecha ir al contenido</span>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="panel-separator"></div>
                        <div className="panel-pane pane-atajos">
                            <div className="pane-content">
                                {/* Additional content can be placed here */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default FaqCard