import React from 'react';
import { faqtexto } from './faq.json';

export const Faq = () => {
    return ( 
        <div className="panel-pane pane-texto">
            <div className="pane-content">
                <div className="w-100">
                    <div className="container-fluid bg-light">
                        <div className="container m-b-2">
                            <div className="row">
                                <h2 className="h1 m-t-5 m-b-2">Preguntas frecuentes</h2>
                                {faqtexto.map((faqcard, index) => (
                                    <Faqcard key={index} title={faqcard.title} description={faqcard.description} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

const Faqcard = ({ title, description }) => {
    return (
        <div className="col-xs-12 col-md-4">
            <a class="panel panel-default" href="#">
              <div class="panel-body">
                <h3>Ministerio de Economía</h3>
                <p class="text-muted">consectetur adipisicing elit. Hic, eaque nostrum molestiae deleniti esse rati</p>
              </div>
            </a>
        </div>
    );
}
