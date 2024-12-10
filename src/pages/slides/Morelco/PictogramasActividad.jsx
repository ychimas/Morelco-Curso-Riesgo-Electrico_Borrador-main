import { useRef } from "react";
import Picto1 from "../../assets/img/slides/picto1.png";
import Picto2 from "../../assets/img/slides/picto2.png";
import Picto3 from "../../assets/img/slides/picto3.png";
import Picto4 from "../../assets/img/slides/picto4.png";
import Picto5 from "../../assets/img/slides/picto5.png";
import Picto6 from "../../assets/img/slides/picto6.png";
import Picto7 from "../../assets/img/slides/picto7.png";
import Picto8 from "../../assets/img/slides/picto8.png";
import Picto9 from "../../assets/img/slides/picto9.png";
import sl09img11 from "../../assets/img/slides/sl09img11.png";
import sl09img11a from "../../assets/img/slides/sl09img11a.png";
import sl09img11b from "../../assets/img/slides/sl09img11b.png";
import Slide9_audio1 from "../../assets/audio/slide09.mp3";
import { onMouseOver, onMouseOut } from "../../../assets/js/interactividad.js";

function Slide21() {
  const refs = useRef([]);

  const handleMouseOver = (index, nuevaImagen) => {
    onMouseOver(refs.current[index], nuevaImagen);
  };

  const handleMouseOut = (index) => {
    onMouseOut(refs.current[index]);
  };

  return (
    <div className="container h-[80vh] flex justify-center items-center slider09">
      <div className="row mx-auto mt-12 py-6">
        <div className="col-lg-4 col-md-12 my-auto px-14">
          <h1 className="mb-10 text-title-size text-center text-main-color font-bold">
            Pictogramas y representación de los peligros en las sustancias
            químicas
          </h1>
          <h4 className="text-secondary-color text-p-size text-center">
            Recordemos los <span>9 pictogramas</span> que utiliza el SGA para
            clasificar las sustancias o productos químicos:
          </h4>
          <hr />
          <audio controls className="media-espanol mx-auto m-4">
            <source src={Slide9_audio1} type="audio/mp3" />
          </audio>
        </div>
        <div className="col-md-12 col-lg-8 text-center">
          <i className="inst mb-6 block text-gray-400 px-8">
            Pasa el mouse en cada pictograma para identificar el tipo de peligro
            y su clasificación de acuerdo con el SGA:
          </i>
          <div className="ctAct h-full gap-6">
            <div className="row h-full">
              <div
                ref={(el) => (refs.current[0] = el)}
                onMouseOver={() => handleMouseOver(0, sl09img11b)}
                onMouseOut={() => handleMouseOut(0)}
              >
                <img className="inf2" src={Picto9} alt="Explosivos" />
                <p>
                  Explosivos
                  <br />
                  <br />
                </p>
              </div>
              <div
                ref={(el) => (refs.current[1] = el)}
                onMouseOver={() => handleMouseOver(1, sl09img11b)}
                onMouseOut={() => handleMouseOut(1)}
              >
                <img className="inf2" src={Picto5} alt="Inflamables" />
                <p>
                  Inflamables
                  <br />
                  <br />
                </p>
              </div>
              <div
                ref={(el) => (refs.current[2] = el)}
                onMouseOver={() => handleMouseOver(2, sl09img11)}
                onMouseOut={() => handleMouseOut(2)}
              >
                <img
                  className="inf2"
                  src={Picto7}
                  alt="Peligroso para Capa de Ozono o Irritante"
                />
                <p>Peligroso para Capa de Ozono o Irritante</p>
              </div>
            </div>
            <div className="row h-full">
              <div
                ref={(el) => (refs.current[3] = el)}
                onMouseOver={() => handleMouseOver(3, sl09img11a)}
                onMouseOut={() => handleMouseOut(3)}
              >
                <img
                  className="inf2"
                  src={Picto3}
                  alt="Carcinogenicidad, mutagenecidad"
                />
                <p>
                  Carcinogenicidad, mutagenecidad
                  <br />
                </p>
              </div>
              <div
                ref={(el) => (refs.current[4] = el)}
                onMouseOver={() => handleMouseOver(4, sl09img11b)}
                onMouseOut={() => handleMouseOut(4)}
              >
                <img className="inf2" src={Picto4} alt="Gas a presión" />
                <p>
                  Gas a presión
                  <br />
                  <br />
                </p>
              </div>
              <div
                ref={(el) => (refs.current[5] = el)}
                onMouseOver={() => handleMouseOver(5, sl09img11)}
                onMouseOut={() => handleMouseOut(5)}
              >
                <img
                  className="inf2"
                  src={Picto6}
                  alt="Toxicidad Aguda y crónica para medio ambiente"
                />
                <p>Toxicidad Aguda y crónica para medio ambiente</p>
              </div>
            </div>
            <div className="row h-full">
              <div
                ref={(el) => (refs.current[6] = el)}
                onMouseOver={() => handleMouseOver(6, sl09img11b)}
                onMouseOut={() => handleMouseOut(6)}
              >
                <img className="inf2" src={Picto2} alt="Comburentes" />
                <p>
                  Comburentes
                  <br />
                  <br />
                </p>
              </div>
              <div
                ref={(el) => (refs.current[7] = el)}
                onMouseOver={() => handleMouseOver(7, Picto8)}
                onMouseOut={() => handleMouseOut(7)}
              >
                <img
                  className="inf2"
                  src={sl09img11a}
                  alt="Toxicidad Aguda o Fatal"
                />
                <p>
                  Toxicidad Aguda o Fatal
                  <br />
                </p>
              </div>
              <div
                ref={(el) => (refs.current[8] = el)}
                onMouseOver={() => handleMouseOver(8, sl09img11b)}
                onMouseOut={() => handleMouseOut(8)}
              >
                <img
                  className="inf2"
                  src={Picto1}
                  alt="Corrosivos, quemaduras y lesiones oculares"
                />
                <p>Corrosivos, quemaduras y lesiones oculares</p>
              </div>
            </div>
          </div>
          <div className="nueva-columna hidden-movil">
            <div
              ref={(el) => (refs.current[9] = el)}
              onMouseOver={() => handleMouseOver(9, sl09img11b)}
              onMouseOut={() => handleMouseOut(9)}
            >
              <img className="inf2" src={Picto2} alt="Comburentes" />
              <p>
                Comburentes
                <br />
                <br />
              </p>
            </div>
            <div
              ref={(el) => (refs.current[10] = el)}
              onMouseOver={() => handleMouseOver(10, Picto8)}
              onMouseOut={() => handleMouseOut(10)}
            >
              <img
                className="inf2"
                src={sl09img11a}
                alt="Toxicidad Aguda o Fatal"
              />
              <p>
                Toxicidad Aguda o Fatal
                <br />
              </p>
            </div>
            <div
              ref={(el) => (refs.current[11] = el)}
              onMouseOver={() => handleMouseOver(11, sl09img11b)}
              onMouseOut={() => handleMouseOut(11)}
            >
              <img
                className="inf2"
                src={Picto1}
                alt="Corrosivos, quemaduras y lesiones oculares"
              />
              <p>Corrosivos, quemaduras y lesiones oculares</p>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="sl21md01"
        tabIndex="-1"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Ver video</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <i className="inst mb-2">Haga clic para ejecutar el video</i>
              <video
                controls
                poster
                style={{ maxWidth: "800px" }}
                className="mx-auto"
              >
                <source src="assets/video/sl20vd01.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Slide21;
