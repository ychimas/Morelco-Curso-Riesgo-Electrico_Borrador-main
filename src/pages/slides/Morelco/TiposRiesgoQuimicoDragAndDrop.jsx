import Picto8 from "../../assets/img/slides/picto8.png";
import Picto9 from "../../assets/img/slides/picto9.png";
import Picto4 from "../../assets/img/slides/picto4.png";
import Picto5 from "../../assets/img/slides/picto5.png";

const TiposRiesgoQuimicoDragAndDrop = () => {
  return (
    <div className="container">
      <div className="row mx-auto flex justify-center items-center ">
        <div className="col-md-12 col-lg-12">
          <h1 className="text-main-color text-title-size text-center font-bold my-12 ">
            Tipos de riesgo químico
          </h1>
          <p className="text-center text-p-size mb-8">
            De acuerdo con tu experiencia, identifica los tipos de peligros
            químicos que NO se encuentran bien clasificados:
          </p>
        </div>
        <span className="indPagMb mx-auto">
          <i className="inst mb-10 block text-center ">
            Arrastra las imágenes sobre los cuadros correspondientes
          </i>
        </span>

        <div className="col-md-12 col-lg-12 actividad_s10">
          <div className="col-md-12 col-lg-3 actividad_s10_ancho">
            <div className="double-column-act12">
              <span className="col-act12" id="act2_drag4" draggable="true">
                <img src={Picto8} alt="Pictograma 8" />
              </span>
              <span className="col-act12" id="act2_drag1" draggable="true">
                <img src={Picto5} alt="Pictograma 5" />
              </span>
            </div>
            <div className="double-column-act12">
              <span className="col-act12" id="act2_drag3" draggable="true">
                <img src={Picto9} alt="Pictograma 9" />
              </span>
              <span className="col-act12" id="act2_drag2" draggable="true">
                <img src={Picto4} alt="Pictograma 4" />
              </span>
            </div>
          </div>

          <div className="col-md-12 col-lg-9 actividad_s10_ancho">
            <div className="double-column-act12">
              <div className="col-act12">
                <div className="orange-box-act12">
                  Un cuarto de almacenamiento de sustancias químicas que
                  almacena combustibles inflamables, y que no cuenta con las
                  inspecciones debidas.
                </div>
                <br />
                <div className="bottom-boxes-act12">
                  <span className="bottom-box-act12" id="act2_drop1"></span>
                  <span className="bottom-box-act12" id="act2_drop2"></span>
                </div>
              </div>
              <div className="col-act12">
                <div className="orange-box-act12_2">
                  Una válvula de un tanque de gas a presión que tiene un escape
                  aún no detectada.
                </div>
                <br />
                <div className="bottom-boxes-act12">
                  <span className="bottom-box-act12" id="act2_drop3"></span>
                  <span className="bottom-box-act12" id="act2_drop4"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TiposRiesgoQuimicoDragAndDrop;
