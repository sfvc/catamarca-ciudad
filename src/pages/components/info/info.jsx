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
      {/* <button className="btn btn-warning" onClick={handleReadAloud}>
        {isReading ? 'Pausar lectura' : 'Leer automatico'}
      </button> */}
        <section>
          <div className="row">
            <div className="col-md-12 m-b-2">
              <h1>{info.titulo}</h1>
              <p className="lead">
                {info.subTitulo}
              </p>
              <div className='info__tags-container'>
                {info.detalles.map((detalle, index) => (
                    <span className="ribbon info__tags" key={index}>
                      <img src="" alt="" /> {/* You can add an appropriate image source if needed */}
                      <p>{detalle}</p>  {/* Display each 'detalle' */}
                    </span>
                ))}
              </div>
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

          <div className="row" style={{width: '100% !important'}}>
            <div className="col-md-8"  style={{width: '100% !important'}}>
              <article>
                <div className="row">
                  <div className="col-md-12">
                    <p>
                      {info.descripcion}
                    </p>

                    <div className="media m-y-4">
                      <div className="media-left">
                        <img src="/images/requisitos.svg" alt="hola" width={24}/>
                      </div>
                      <div className="media-body">
                        <h2 className="h4 m-t-0 clearfix">Requisitos y condiciones</h2>
                        <p className="">
                          <div dangerouslySetInnerHTML={{ __html: info.requisitos_y_condiciones }}/>
                        </p>
                      </div>
                    </div>

                    <div className="media m-y-4">
                      <div className="media-left">
                        <img src="/images/reloj.svg" alt="" width={24}/>
                      </div>
                      <div className="media-body">
                        <h2 className="h4 m-t-0 clearfix">Tiempo estimado</h2>
                        <p className="">
                          <div dangerouslySetInnerHTML={{ __html: info.tiempo_estimado }}/>
                        </p>
                      </div>
                    </div>

                    <div className="media m-y-4">
                      <div className="media-left">
                        <img src="/images/costos.svg" alt="" width={24}/>
                      </div>
                      <div className="media-body">
                        <h2 className="h4 m-t-0 clearfix">Costos</h2>
                        <p className="">
                          <div dangerouslySetInnerHTML={{ __html: info.costos}}/>
                        </p>
                      </div>
                    </div>

                    <div className="media m-y-4">
                      <div className="media-left">
                        <img src="/images/grafico-circular.svg" alt="" width={24}/>
                      </div>
                      <div className="media-body">
                        <h2 className="h4 m-t-0 clearfix">Circuito del tramite</h2>
                        <p className="">
                          <div dangerouslySetInnerHTML={{ __html: info.circuito_del_tramite}}/>
                        </p>
                      </div>
                    </div>

                    <div className="media m-y-4">
                      <div className="media-left">
                        <img src="/images/chequeado.svg" alt="" width={24}/>
                      </div>
                      <div className="media-body">
                        <h2 className="h4 m-t-0 clearfix">Observaciones</h2>
                        <p className="">
                          <div dangerouslySetInnerHTML={{ __html: info.observaciones}}/>
                        </p>
                      </div>
                    </div>

                    {/* <a  className="btn btn-warning" >
                      {info.descargar}
                    </a> */}

                    {/* <div>
                      <button class="btn btn-warning">Warning Button</button>
                      <button class="btn btn-warning">Warning Button</button>
                    </div> */}

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
