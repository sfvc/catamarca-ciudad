import React from 'react';
import { faqtexto } from './faq.json';

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
                                <h2 className="activities-sidbar">Temas y servicios</h2>
                            </div>
                        </div>
                        <div className="panel-separator"></div>
                        <div className="panel-pane pane-texto">
                            <div className="pane-content">
                                <p>Momentos y situaciones cotidianas.</p>
                            </div>
                        </div>
                        <div className="panel-separator"></div>
                        <div className="panel-pane pane-atajos">
                            <div className="pane-content">
                                <div className="row panels-row m-t-2 ">
                                    <div className="col-xs-12 col-sm-6 col-md-4">
                                        <a href="/tema/documentacion" className="panel panel-default">
                                            <div className="panel-heading">
                                                <object className="img-responsive ilus-home" type="image/svg+xml" data-image="ilus-arg-documentacion-16x9" aria-label="Una mujer con una billetera en la mano" data="https://www.argentina.gob.ar/profiles/argentinagobar/themes/contrib/poncho/resources/ilustraciones/ilus-arg-documentacion-16x9.svg?c1=%23C2185B&amp;c2=%23E18CAD" style={{ pointerEvents: 'none' }}>
                                                    <p>Una mujer con una billetera en la mano</p>
                                                </object>
                                            </div>
                                            <div className="panel-body home-new m-b-1">
                                                <p className="h3">Documentación</p>
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
                                            <div className="panel-heading">
                                                <object className="img-responsive ilus-home" type="image/svg+xml" data-image="ilus-arg-educacion-16x9" aria-label="Dos estudiantes, un chico y una chica con sus mochilas" data="https://www.argentina.gob.ar/profiles/argentinagobar/themes/contrib/poncho/resources/ilustraciones/ilus-arg-educacion-16x9.svg?c1=%2350B7B2&amp;c2=%23A8DBD9" style={{ pointerEvents: 'none' }}>
                                                    <p>Dos estudiantes, un chico y una chica con sus mochilas</p>
                                                </object>
                                            </div>
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
                                            <div className="panel-heading">
                                                <object className="img-responsive ilus-home" type="image/svg+xml" data-image="ilus-arg-trabajo-16x9" aria-label="Un hombre opera una máquina en una fábrica." data="https://www.argentina.gob.ar/profiles/argentinagobar/themes/contrib/poncho/resources/ilustraciones/ilus-arg-trabajo-16x9.svg?c1=%233526C3&amp;c2=%236B66CC" style={{ pointerEvents: 'none' }}>
                                                    <p>Un hombre opera una máquina en una fábrica.</p>
                                                </object>
                                            </div>
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