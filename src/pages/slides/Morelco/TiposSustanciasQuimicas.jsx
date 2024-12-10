import slider3_1 from "../../assets/img/slides/sld03r1.png";
import slider3_2 from "../../assets/img/slides/sld03r2.png";
import slider3_3 from "../../assets/img/slides/sld03r3.png";

function TiposSustanciasQuimicas() {
  return (
    <div className="container slider02 p-9">
      <div className="row mx-auto w-full ">
        <div>
          <span className="indPagMb"></span>
        </div>
        <div className="col-lg-12 col-md-12 text-center">
          <h1 className="text-title-size text-main-color font-bold">
            Tres Tipos de Sustancias Químicas Más Peligrosas
          </h1>
          <p className="my-12 mx-36 text-p-size">
            En el manejo de productos químicos, es crucial conocer los tipos más
            peligrosos para prevenir accidentes y daños a la salud. A
            continuación, se presentan las tres categorías principales de
            sustancias químicas peligrosas y sus características clave.
          </p>
          <br />
          <br />
        </div>
        <div className="col-lg-12 col-md-12 text-center mx-auto">
          <div className="ctItem mx-auto gap-12" style={{ maxWidth: "1200px" }}>
            <div>
              <img
                className="mx-auto mb-3"
                style={{ maxWidth: "200px" }}
                src={slider3_1}
                alt="Recordemos qué es el riesgo químico y su regulación en Colombia"
              />
              <div className="flex-col justify-start items-start">
                <h4 className="text-xl font-bold text-secondary-color">
                  Sustancias Químicas Tóxicas
                </h4>
                <p>
                  <span className="font-bold">Características:</span> Altamente
                  dañinas para la salud, pueden causar enfermedades agudas o
                  crónicas.
                  <br />
                  <span className="font-bold">Ejemplos: </span> Cianuro de
                  potasio, mercurio, arsénico.
                </p>
              </div>
            </div>
            <div>
              <img
                className="mx-auto mb-3"
                style={{ maxWidth: "200px" }}
                src={slider3_2}
                alt="Apliquemos el SGA (Sistema Globalmente Armonizado)"
              />
              <div className="flex-col justify-start items-start">
                <h4 className="text-xl font-bold text-secondary-color">
                  Sustancias Químicas Corrosivas
                </h4>
                <p>
                  <span className="font-bold">Características:</span>
                  Capaces de destruir tejidos vivos y materiales inorgánicos al
                  contacto.
                  <br />
                  <span className="font-bold">Ejemplos: </span>
                  Ácido sulfúrico, hidróxido de sodio, ácido clorhídrico.
                </p>
              </div>
            </div>
            <div>
              <img
                className="mx-auto mb-3"
                style={{ maxWidth: "200px" }}
                src={slider3_3}
                alt="Transporte de mercancías peligrosas"
              />
              <div className="flex-col justify-start items-start">
                <h4 className="text-xl font-bold text-secondary-color">
                  Sustancias Químicas Inflamables
                </h4>
                <p>
                  <span className="font-bold">Características:</span>
                  Pueden encenderse fácilmente y causar incendios o explosiones.
                  <br />
                  <span className="font-bold">Ejemplos: </span>
                  Gasolina, acetona, metano.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TiposSustanciasQuimicas;
