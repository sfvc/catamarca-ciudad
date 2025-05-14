export default function SaludMunicipal() {
  return (
    <section data-aos="fade-up">
      <div
        className="container bg-white"
        style={{
          border: "2px solid #112559",
          borderRadius: "20px",
          boxShadow: "0 0 20px rgba(0,0,0,0.2)",
          padding: "40px",
        }}
      >
        <div className="row">
          {/* Columna 1 */}
          <div className="col-md-4">
            <h1 style={{ color: "#112559", fontWeight: "bold", marginTop: "10px" }}>
              LABORATORIO
            </h1>
            <h4 style={{ color: "#112559", fontWeight: "bold" }}>Atención</h4>
            <ul className="list-info">
              <li>
                <strong>Dirección de Salud Municipal:</strong> Subsuelo del Concejo
                Deliberante.
              </li>
              <li>
                <strong>Extracciones:</strong> Lunes a viernes de 7:30 a 10hs, solo
                con turnos.
              </li>
              <li><strong>Grupo sanguíneo:</strong> 7:30 a 12hs.</li>
            </ul>
            <a
              href="https://wwwold.municipiosanjuan.gob.ar/guia-de-tramites/item/523-laboratorio"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-salud"
              style={{ margin: "10px 0 20px 0" }}
            >
              Pedir turno
            </a>
            <ul className="list-info">
              <li><strong>CIC Barrio Manantial</strong></li>
              <li>Agustín Gómez 201 oeste. Martes y jueves de 8 a 12:30hs,</li>
              <li><strong>por orden de llegada.</strong></li>
            </ul>
            <h4 style={{ color: "#112559", fontWeight: "bold" }}>
              Lic. Marianela Sánchez
            </h4>
          </div>

          {/* Columna 2 */}
          <div className="col-md-4">
            <h2 style={{ color: "#112559", fontWeight: "bold" }}>Análisis</h2>
            <ul className="list-info">
              {[
                "Hemograma completo",
                "Eritrosedimentación",
                "Glucemia",
                "Uremia",
                "Calcemia",
                "Ácido úrico",
                "Colesterol total",
                "HDL y LDL",
                "Triglicéridos",
                "GOT y GPT",
                "Fosfatasa alcalina",
                "Gama GT",
                "Coagulación (TP y KPTT)",
                "Creatinina",
                "Antiestreptolisina",
                "Proteína C reactiva",
                "Chagas",
                "Huddleson",
                "Toxoplasmosis",
                "Test de embarazo",
                "Grupo sanguíneo y factor Rh",
                "Orina completa",
                "HIV",
                "Hepatitis B",
                "Hepatitis C",
                "V.D.R.L. (Sífilis)",
              ].map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Columna 3 */}
          <div className="col-md-4">
            <h2 style={{ color: "#112559", fontWeight: "bold" }}>Requisitos</h2>
            <ul className="list-info">
              <li>No poseer obra social y/o cobertura médica.</li>
              <li>Traer DNI.</li>
              <li>Traer calendario de vacunación.</li>
              <li>Asistir con cubreboca/barbijo.</li>
            </ul>

            <h2 style={{ color: "#112559", fontWeight: "bold" }}>
              Indicaciones para los análisis de rutina
            </h2>
            <ul className="list-info">
              <li>Asistir en ayunas.</li>
              <li>Dieta libre de grasas 24 horas previas a la extracción.</li>
              <li>
                Recolectar la primera orina de la mañana (si es solicitada).
              </li>
              <li>Asistir con indicación médica del análisis.</li>
            </ul>

            <h2 style={{ color: "#112559", fontWeight: "bold" }}>
              Indicaciones factor y grupo sanguíneo
            </h2>
            <ul className="list-info">
              <li>No es necesario asistir en ayunas.</li>
              <li>Dieta libre de grasas 24hs previas a la extracción.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
