import { useEffect } from "react";
import Title from '../components/Title.jsx'
import Subtitle from '../components/Subtitle.jsx'
import Paragraph from '../components/Paragraph.jsx'
import Instruction from '../components/Instruction.jsx'
import { initializeTooltips, reproducirAudio } from "../../assets/js/interactividad.js";
import "tippy.js/dist/tippy.css";
import imgMorelcoMen from "../../../src/assets/img/morelco_men.png";
import audioReflexionemos from "../../../src/assets/audio/Sld_1_reflexionemos_v2.mp3";
import audio82Porciento from "../../../src/assets/audio/SLIP_82_porciento.mp3";
import audio11Porciento from "../../../src/assets/audio/SLIP_11_porciento.mp3";
import audio7Porciento from "../../../src/assets/audio/SLIP_7_porciento.mp3";

import useStore from "../../store";

function BotonesTooltipsAudio() {
  const setIsOnDivisor = useStore((state) => state.setIsOnDivisor);

  useEffect(() => {
    setIsOnDivisor(false);
  }, []);

  useEffect(() => {
    initializeTooltips();
    reproducirAudio("toggleSwitch", [
      { esp: "slip_82_porciento", ing: "slip_82_porciento_ingles" },
      { esp: "slip_11_porciento", ing: "slip_11_porciento_ingles" },
      { esp: "slip_7_porciento", ing: "slip_7_porciento_ingles" }
    ]);
  }, []);

  return (
    <div className="flex flex-col md:flex-row">
      {/* Left Column */}
      <div className="md:flex-1 bg-slate-900 md:w-1/2 w-full md:h-screen py-6 px-12 sm:px-24 flex-col justify-center items-center">
        <div className="md:h-[90vh]  my-auto flex flex-col justify-center items-center text-center">
            <Title justify='center' className='text-center'>Bienvenidos al módulo</Title>
            <Title>de Riesgo electrico</Title>
            <Subtitle>Reflexionemos</Subtitle>

          <div className='mb-10'>
          </div>

          <Paragraph justify="justify" className='text-justify'>
            De acuerdo con el NIOSH (El Instituto Nacional de Seguridad y Salud
            Ocupacional de Estados Unidos), los factores relacionados con
            ENERGÍAS PELIGROSAS que han ocasionado la muerte... son los
            siguientes:
          </Paragraph>
          <hr />
          <Paragraph justify="justify">
            En Morelco estamos comprometidos con tu Salud y tu Seguridad, por
            favor revisa atentamente este curso, puede SALVAR TU VIDA o la de un
            compañero tuyo en la operación.
          </Paragraph>
          <Instruction arrow="down">
            Dale play para reproducir el audio
          </Instruction>
          <audio controls className="media-espanol audio-inicio">
            <source src={audioReflexionemos} type="audio/mp3" />
          </audio>
        </div>
      </div>

      {/* Right Column */}
      <div className="md:flex-2 bg-white md:w-1/2 w-full px-4 md:px-10 md:pr-20 mb-36 md:mb-0 flex mx-auto justify-center items-center">
        <div className="flex flex-col justify-center items-center w-full max-w-[400px] mx-auto relative">
          <Instruction theme="light" arrow='down'>
            Toca los botones para obtener más información y reproducir el audio
          </Instruction>
          <div className="image-container relative w-full h-fit">
            <img
              src={imgMorelcoMen}
              alt="Carl"
              className="imagen-carl-respon w-full"
            />
            <button className="botonporcentaje" id="boton1" value="1">
              82%
            </button>
            <button className="botonporcentaje" id="boton2" value="2">
              11%
            </button>
            <button className="botonporcentaje" id="boton3" value="3">
              7%
            </button>
          </div>
          <audio
            controls
            className="media-espanol"
            id="slip_82_porciento"
            hidden
          >
            <source src={audio82Porciento} type="audio/mp3" />
          </audio>
          <audio
            controls
            className="media-espanol"
            id="slip_11_porciento"
            hidden
          >
            <source src={audio11Porciento} type="audio/mp3" />
          </audio>
          <audio
            controls
            className="media-espanol"
            id="slip_7_porciento"
            hidden
          >
            <source src={audio7Porciento} type="audio/mp3" />
          </audio>
        </div>
      </div>
    </div>
  );
}

export default BotonesTooltipsAudio;