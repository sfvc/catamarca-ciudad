export function Descripcion({ seccionDescripcion, queHacemos, misionVision }) {
  return (
    <section className="container col-6 mx-auto px-4 py-12 space-y-12">
      <div className="bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-3xl font-bold mb-4 flex items-center">
          <i className="text-secondary fa fa-info-circle text-blue-600 mr-2 pull-left"></i>
          {seccionDescripcion.titulo}
        </h2>
        {seccionDescripcion.parrafos.map((parrafo, index) => (
          <p key={index} className="text-gray-700 leading-relaxed mb-4">
            {parrafo}
          </p>
        ))}

        {seccionDescripcion.bloqueCita && (
          <blockquote className="relative bg-gray-50 border-l-4 border-blue-600 p-6 italic rounded-md my-6">
            <i className="text-secondary fa fa-quote-left text-4xl text-gray-300 absolute -left-4 top-4 pull-left"></i>
            <p className="text-gray-800 mb-2">{seccionDescripcion.bloqueCita.texto}</p>
            <footer className="text-gray-600 text-sm">{seccionDescripcion.bloqueCita.autor}</footer>
          </blockquote>
        )}
      </div>

      <div className="bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-2xl font-semibold mb-4 flex items-center">
          <i className="text-secondary fa fa-list-ul fa-fw pull-left" aria-hidden="true"></i>
          {queHacemos.titulo}
        </h2>
        <ul className="space-y-3" style={{ marginBottom: '2rem' }}>
          {queHacemos.items.map((item, index) => (
            <li key={index} className="flex items-start">
              <span className="text-gray-700">{item.texto}</span>
            </li>
          ))}
        </ul>
      </div>

      {misionVision && (
        <div className="bg-white shadow-lg rounded-lg p-8">
          <h3 className="text-2xl font-semibold flex items-center">
            <i className="text-secondary fa fa-bullseye text-indigo-600 pull-left"></i>
            Misión
          <p className="text-gray-700 leading-relaxed" style={{ marginTop: '1rem' }}>{misionVision.mision}</p>
          </h3>

          <h3 className="text-2xl font-semibold flex items-center">
            <i className=" text-secondary fa fa-eye text-indigo-600 pull-left"></i>
            Visión
          <p className="text-gray-700 leading-relaxed" style={{ marginTop: '1rem' }}>{misionVision.vision}</p>
          </h3>
        </div>
      )}
    </section>
  );
}
