import LeafletMap from "@components/map/LeafletMap";
import { diagnostico_imagen } from "./data";

export default function DiagnosticoImagen() {
  return (
    <section data-aos="fade-up">
      <div
        className="container bg-white"
        style={{
          border: "2px solid #112559",
          borderRadius: "20px",
          boxShadow: "0 0 20px rgba(0,0,0,0.2)",
          padding: 0,
          overflow: "hidden",
        }}
      >
        <LeafletMap markers={diagnostico_imagen}/>
      </div>
    </section>
  )
}