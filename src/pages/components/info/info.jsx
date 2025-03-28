import React, { useEffect, useState } from 'react';
import { catamarcaApi } from "../../../api/catamarcaApi";

const Info = ({id, url}) => {
  // State to store the fetched data and the reading status
  const [info, setInfo] = useState([]);
  const [isReading, setIsReading] = useState(false);

  // Function to fetch info
  const cargarInfo = async (idInfo) => {
    const test = `${url}${idInfo}`;
    console.log(test);
    try {
      const response = await catamarcaApi.get(
        `${url}${idInfo}`
      );
      setInfo(response.data.data);
      console.log("Data fetched:", response); // Logs when data is successfully fetched
    } catch (error) {
      console.error("Error cargando info", error);
    }
  };


  // Fetch info when the component mounts or when 'id' changes
  useEffect(() => {
    cargarInfo(id);
  }, [id]);

  // Log the 'info' state whenever it changes
  useEffect(() => {
    console.log("Updated info:", info);
  }, [info]);

  // Function to handle text-to-speech functionality
  const handleReadAloud = () => {
    // Dynamically get the text content from the info state
    const content = `
      ${info.titulo} 
      ${info.subTitulo} 
      ${info.descripcion} 
      ${info?.requisitos?.map(req => req.texto).join(' ')} 
      ${info?.pasos?.map(step => step.descripcion).join(' ')}
    `;

    // If it's already reading, stop it
    if (isReading) {
      speechSynthesis.cancel(); // Stops the current speech
      setIsReading(false);
    } else {
      const utterance = new SpeechSynthesisUtterance(content); // Create a new SpeechSynthesisUtterance
      utterance.lang = 'es-ES'; // Set the language (Spanish in this case)
      utterance.rate = 1; // Normal speed
      utterance.pitch = 1; // Normal pitch
      speechSynthesis.speak(utterance); // Speak the content
      setIsReading(true); // Set the state to reading
    }
  };
  
  return (
    <main role="main">
      {info.length === 0 ? (
        <p>cargando info</p>
      ) : (
      <div className="container">
      <button className="btn btn-warning" onClick={handleReadAloud}>
        {isReading ? 'Pausar lectura' : 'Leer automatico'}
      </button>
        <section>
          <div className="row">
            <div className="col-md-12 m-b-2">
              <h1>{info.titulo}</h1>
              <p className="lead">
                {info.subTitulo}
              </p>
              {info.detalles.map((detalle, index) => (
                <div key={index}>
                  <span className="ribbon">
                    <img src="" alt="" /> {/* You can add an appropriate image source if needed */}
                    <p>{detalle}</p>  {/* Display each 'detalle' */}
                  </span>
                </div>
              ))}
                {/* <span className="ribbon">
                  <img src="" alt="" />
                  3 horas apróximadamente
                </span>
                <span className="ribbon">
                  <i className="fa fa-usd text-arandano"></i> Gratuito
                </span>
                <span className="ribbon">
                  <i className="fa fa-desktop text-arandano"></i> 100% digital
                </span>
                <span className="ribbon">
                  <i className="fa fa-map-marker text-arandano"></i> Ministerio de Salud
                </span> */}
              <hr />
            </div>
          </div>

          <div className="row">
            <div className="col-md-8">
              <article>
                <div className="row">
                  <div className="col-md-12">
                    <p>
                      {info.descripcion}
                    </p>

                    <div className="media m-y-4">
                      <div className="media-left hidden-xs">
                        <i className="text-secondary fa fa-user fa-fw fa-2x" aria-hidden="true"></i>
                      </div>
                      <div className="media-body">
                        <i className="text-secondary fa fa-user fa-fw fa-2x visible-xs-inline pull-left" aria-hidden="true"></i>
                        <h2 className="h4 m-t-0 clearfix">¿A quién está dirigido?</h2>
                        <p className="m-b-0 clearfix">
                          <strong>Lo pueden tramitar vos o tu tutor responsable</strong> y para eso hay que pedir un turno para la evaluación de una Junta Interdisciplinaria, que determinará si tu caso entra o no dentro de lo contemplado por las leyes 22.431 y 24.901.
                        </p>
                      </div>
                    </div>

                    <div className="media m-y-4">
                      <div className="media-left hidden-xs">
                        <i className="text-secondary fa fa-list-ul fa-fw fa-2x" aria-hidden="true"></i>
                      </div>
                      <div className="media-body">
                        <i className="text-secondary fa fa-list-ul fa-fw fa-2x visible-xs-inline pull-left" aria-hidden="true"></i>
                        <h2 className="h4 m-t-0 m-b-2">¿Qué documentación necesito?</h2>

                        <div className="media clearfix">
                          <div className="media-left">
                            <i className="text-success fa fa-check fa-fw fa-2x" aria-hidden="true"></i>
                          </div>
                          <div className="media-body">
                            <p className="m-b-0">
                              <strong>
                                <a href="renovar-dni.html">Documento de Identidad</a>
                              </strong>
                              , original y copia.
                            </p>
                          </div>
                        </div>
                        <div className="media">
                          <div className="media-left">
                            <i className="text-success fa fa-check fa-fw fa-2x" aria-hidden="true"></i>
                          </div>
                          <div className="media-body">
                            <p className="m-b-0">
                              Una vez analizada la información, <strong>la Junta te otorgará un turno para que te presentes en esa fecha</strong>.
                            </p>
                          </div>
                        </div>
                        <div className="media">
                          <div className="media-left">
                            <i className="text-success fa fa-check fa-fw fa-2x" aria-hidden="true"></i>
                          </div>
                          <div className="media-body">
                            <p className="m-b-0">
                              La Junta se expide y si el caso corresponde <strong>se entrega el CUD</strong> en el día, o en la fecha que te indiquen allí.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="page-break"></div>

                    <div className="media m-y-4">
                      <div className="media-left hidden-xs">
                        <i className="text-secondary fa fa-list-ol fa-fw fa-2x" aria-hidden="true"></i>
                      </div>
                      <div className="media-body">
                        <i className="text-secondary fa fa-list-ol fa-fw fa-2x visible-xs-inline pull-left" aria-hidden="true"></i>
                        <h2 className="h4 m-t-0 m-b-3">¿Cómo hago?</h2>

                        <div className="steps clearfix">
                          <div className="step">
                            <div>
                              <div className="circle">1</div>
                              <div className="line"></div>
                            </div>
                            <div>
                              <div className="description">
                                <p className="m-b-0">
                                  <strong>Con toda la toda la documentación necesaria, acercarte a la sede de la Junta Evaluadora que te corresponda</strong>, de acuerdo con la dirección que figura en tu DNI.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="step">
                            <div>
                              <div className="circle">2</div>
                              <div className="line"></div>
                            </div>
                            <div>
                              <div className="description">
                                <p className="m-b-0">
                                  Una vez analizada la información, <strong>la Junta te otorgará un turno para que te presentes en esa fecha.</strong>
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="step">
                            <div>
                              <div className="circle">3</div>
                            </div>
                            <div>
                              <div className="description">
                                <p className="m-b-0">
                                  La Junta se expide y si el caso corresponde <strong>se entrega el CUD</strong> en el día, o en la fecha que te indiquen allí.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <p className="alert alert-warning">
                      <strong>En caso de extravío o robo</strong> del CUD, deberá iniciar el trámite nuevamente y presentar la denuncia policial por extravío o robo del documento público. <strong>En caso de vencimiento</strong> podrá solicitar una nueva evaluación.
                    </p>

                    <div className="media m-y-4">
                      <div className="media-left hidden-xs">
                        <i className="text-secondary fa fa-dollar fa-fw fa-2x" aria-hidden="true"></i>
                      </div>
                      <div className="media-body">
                        <i className="text-secondary fa fa-dollar fa-fw fa-2x visible-xs-inline pull-left" aria-hidden="true"></i>
                        <h2 className="h4 m-t-0 m-b-2">¿Cuál es el costo del trámite?</h2>
                        <p className="clearfix">
                          <strong className="lead">Gratuito</strong>
                        </p>
                      </div>
                    </div>

                    <div className="page-break"></div>

                    <div className="media m-y-4">
                      <div className="media-left hidden-xs">
                        <i className="text-secondary fa fa-balance-scale fa-fw fa-2x" aria-hidden="true"></i>
                      </div>
                      <div className="media-body">
                        <i className="text-secondary fa fa-balance-scale fa-fw fa-2x visible-xs-inline pull-left" aria-hidden="true"></i>
                        <h2 className="h4 m-t-0 m-b-2">Información complementaria</h2>
                        <p>Podés realizar la consulta sobre <a href="https://apps.snr.gob.ar/consultarnpcd/spring/intro">la validez del Certificado Único de Discapacidad.</a></p>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>
      </div>
      )}
    </main>
  );
};

export default Info;
