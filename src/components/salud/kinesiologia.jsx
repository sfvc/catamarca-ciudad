export default function Kinesiologia() {
  return (
    <section data-aos="fade-up">
      <div
        className="container bg-white border border-purple"
        style={{
          border: "2px solid #112559",
          borderRadius: "24px",
          boxShadow: "0 10px 40px rgba(0,0,0,0.2)",
          padding: "40px",
        }}
      >
        <div className="row">
          {/* Columna 1 */}
          <div className="col-lg-6" style={{ marginBottom: "20px" }}>
            <div style={{ maxWidth: "320px" }}>
              <h1
                className="text-primary"
                style={{ color: "#112559", fontWeight: 800, marginTop: 0 }}
              >
                KINESIOLOGIA
              </h1>

              <a
                href="https://wwwold.municipiosanjuan.gob.ar/guia-de-tramites/item/523-laboratorio"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-salud"
                style={{ margin: "0 0 10px 0" }}
              >
                Pedir turno
              </a>

              <h2
                style={{
                  color: "#112559",
                  fontWeight: 700,
                  fontSize: "20px",
                }}
              >
                Atención turno mañana
              </h2>

              <p style={{ fontWeight: "bold" }}>
                Lunes a jueves de 8 a 12hs, solo con turno. Anexo Mitre. Mitre
                655 este.
              </p>

              <p
                style={{
                  color: "#9C9C9C",
                  fontWeight: "bold",
                }}
              >
                Se atiende personas adultas (mayores de 18 años), con patologías
                traumatológicas. Debe tener indicación médica para acceder a
                este servicio.
              </p>

              <h4 style={{ color: "#112559", fontWeight: "bold" }}>
                Lic. Gimena Costa Barros
              </h4>
            </div>
          </div>

          {/* Columna 2 */}
          <div className="col-lg-6">
            <div style={{ maxWidth: "320px" }}>
              <h2
                style={{
                  color: "#112559",
                  fontWeight: 800,
                  fontSize: "20px",
                }}
              >
                Atención turno tarde
              </h2>

              <p style={{ fontWeight: 600 }}>
                Lunes a viernes de 13 a 17hs, solo con turno. Anexo Mitre. Mitre
                655 este.
              </p>

              <span style={{ fontWeight: "bold" }}>
                Turnos de manera presencial o por CIDI (Ciudadano Digital).
              </span>

              <p
                style={{
                  color: "#9C9C9C",
                  fontWeight: 600,
                }}
              >
                Se atienden niños/as a partir de los 5 años y personas adultas
                con patologías traumatológicas. Debe tener indicación médica
                para acceder a este servicio.
              </p>

              <div>
                <h4
                  style={{ color: "#112559", fontWeight: "bold", margin: 0 }}
                >
                  Lic. Gustavo Barrozo
                </h4>
                <h5 style={{ color: "#112559", fontWeight: 800 }}>
                  Matrícula N.º: 947
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
