import { useState, useEffect } from "react";
import { useImageToggle } from "../../assets/js/interactividad.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../assets/css/switch.css";
import audioAlgunaVez from "../../assets/audio/Sld5_alguna_vez_te_haz_v1.mp3";
import audioComparte from "../../assets/audio/Sld_5_comparte_whatsapp.mp3";
import imgComparteColor from "../../../src/assets/img/botones/comparte-color.png";
import imgSl14_9 from "../../../src/assets/img/sl14-9.png";
import imgSl14_3 from "../../../src/assets/img/sl14-3.png";
import imgSl14_1 from "../../../src/assets/img/sl14-1.png";
import imgSignoInterrogacion from "../../../src/assets/img/signo_interrogacion.png";

import Subtitle from '../components/Subtitle.jsx'
import Title from '../components/Title.jsx'
import Instruction from '../components/Instruction.jsx'
import Paragraph from '../components/Paragraph.jsx'
import useStore from '../../store';
function ExperimentadoAtrapamiento() {
  const words = ['Sufrido una quemadura?', 'Sufrido un choque eléctrico?', 'Experimentado un atrapamiento?'];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [fade, setFade] = useState(true); // Estado para controlar la clase de fade
  const [imageShown, mostrarImagen] = useImageToggle([false, false, false]);
  const [showModal, setShowModal] = useState(false);

  const setIsOnDivisor = useStore((state) => state.setIsOnDivisor);

  useEffect(() => {
    setIsOnDivisor(false);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // Oculta el texto antes de cambiarlo

      setTimeout(() => {
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length); // Cambia la palabra
        setFade(true); // Muestra el nuevo texto con animación
      }, 500); // Tiempo de espera que coincide con la duración de la animación
    }, 2000); // Cambia cada 2 segundos

    return () => clearInterval(interval);
  }, [words.length]);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  return (
    <>
      <div className="flex flex-col md:flex-row mb-36 md:mb-0">
        {/* Left Column */}
        <div className="md:flex-1 bg-slate-900 md:w-1/2 w-full h-fit md:h-screen py-6 px-2 md:px-36 flex-col justify-center items-center">
          <div className="md:h-[90vh] my-auto flex flex-col justify-center items-center">
            <Title>¿Alguna vez has…</Title>

            {/* Añadimos animación al texto cambiando */}
            <div className="px-auto text-center">

            <Subtitle>{words[currentWordIndex]}</Subtitle>
            </div>

            <div className="my-3"></div>

<div className='px-0 md:px-24 md:mx-24'>
            <Paragraph clasName='text-justify' justify="justify">
              Si alguna vez has sufrido alguna quemadura, choque eléctrico, un
              atrapamiento de alguna parte del cuerpo (de un pie, o una mano con
              un guante atrapado con una máquina) Es porque estas interactuando
              con diferentes tipos de energía.
            </Paragraph>
            </div>
            <Instruction arrow="down">Haz clic sobre el audio</Instruction>
            <audio controls className="media-espanol">
              <source src={audioAlgunaVez} type="audio/mp3" />
            </audio>

            {/* Botón de WhatsApp */}
            <button
              id="actividad_3"
              style={{ gap: "5px" }}
              className="flex justify-center items-center group bg-main-color rounded-full px-4 py-2  shadow-main-color text-white mx-auto my-6"
              onClick={handleShow}
            >
              <i className="fab fa-whatsapp" aria-hidden="true"></i> Comparte
            </button>
          </div>
        </div>

        {/* Right Column */}
        <div className="md:flex-2 bg-white md:w-1/2 w-full h-screen mt-24 md:mt-0 mb-36 md:mb-0 px-10 md:pr-20 flex mx-auto justify-center items-center pb-24">
          <div className="flex flex-col justify-center items-center p-6 gap-4 h-[90vh] max-w-[100%] mx-auto mt-5">
            <Instruction theme="light" arrow="down">
              Haz click sobre los círculos y descubre la imagen
            </Instruction>
            <div
              className="col-lg-12 col-md-12 sm:flex justify-center "
              style={{ maxWidth: "1000px", margin: "0 auto" }}
            >
              <div
                className="ctAct sm:flex sm:w-[500px]"
                style={{
                  // width: "500px",
                  // display: "flex",
                  justifyContent: "center",
                  flexWrap: "wrap",
                }}
              >
                <div className="contenedor-center-alguna my-10 sm:my-0">
                  <img
                    className="interrogacion track-element"
                    src={imgSignoInterrogacion}
                    alt="Interrogación"
                    onClick={() => mostrarImagen(0)}
                    style={{
                      display: imageShown[0] ? "none" : "inline",
                      width: "150px",
                      height: "150px",
                    }}
                  />
                  <img
                    src={imgSl14_1}
                    alt="Sufrido una quemadura"
                    style={{
                      display: imageShown[0] ? "inline" : "none",
                      width: "150px",
                      height: "150px",
                    }}
                  />
                  <p>SUFRIDO UNA QUEMADURA</p>
                </div>

                <div className="contenedor-center-alguna">
                  <img
                    src={imgSignoInterrogacion}
                    alt="Interrogación"
                    onClick={() => mostrarImagen(1)}
                    style={{
                      display: imageShown[1] ? "none" : "inline",
                      width: "150px",
                      height: "150px",
                    }}
                  />
                  <img
                    src={imgSl14_3}
                    alt="Choque eléctrico"
                    style={{
                      display: imageShown[1] ? "inline" : "none",
                      width: "150px",
                      height: "150px",
                    }}
                  />
                  <p>CHOQUE ELÉCTRICO</p>
                </div>

                <div className="contenedor-center-alguna">
                  <img
                    src={imgSignoInterrogacion}
                    alt="Interrogación"
                    onClick={() => mostrarImagen(2)}
                    style={{
                      display: imageShown[2] ? "none" : "inline",
                      width: "150px",
                      height: "150px",
                    }}
                  />
                  <img
                    src={imgSl14_9}
                    alt="Atrapamiento"
                    style={{
                      display: imageShown[2] ? "inline" : "none",
                      width: "150px",
                      height: "150px",
                    }}
                  />
                  <p>ATRAPAMIENTO</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <>
          {/* Backdrop oscuro */}
          <div className="backdrop" onClick={handleClose}></div>

          <div className="modal show fade d-block mt-4" tabIndex="-1">
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-contenido">
                <div className="bg-main-color modal-header">
                  <h5 className="modal-title">Comparte</h5>
                  <button
                    type="button"
                    className="btn-close"
                    aria-label="Close"
                    onClick={handleClose}
                  ></button>
                </div>
                <div className="modal-body">
                  <img src={imgComparteColor} alt="" className="image-boton" />
                  <p style={{ textAlign: "center" }}>
                    ¿Has presenciado o vivido un evento con energías peligrosas
                    en el trabajo o en el hogar, y cómo se pudo haber evitado?
                    <br />
                    Comparte con tus compañeros en el grupo de WhatsApp…
                  </p>
                  <audio controls className="media-espanol center-media">
                    <source src={audioComparte} type="audio/mp3" />
                  </audio>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default ExperimentadoAtrapamiento;
