import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/css/switch.css';
import audioDiscuteColegas from '../../assets/audio/BL-0001_Discute-con-tus-colegas.mp3';
import imgComparteColor from '../../../src/assets/img/botones/comparte-color.png';
import Title from '../components/Title.jsx'
import Paragraph from '../components/Paragraph.jsx'
import Instruction from '../components/Instruction.jsx'

import { Player } from '@lottiefiles/react-lottie-player';

import { useEffect } from 'react';
import useStore from '../../store';

function DiscuteConTusColegas() {
  // Estado para controlar la visibilidad del modal
  const [showModal, setShowModal] = useState(false);

  const setIsOnDivisor = useStore((state) => state.setIsOnDivisor);

  useEffect(() => {
    setIsOnDivisor(false);
  }, []);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);
  return (
    <>
      <div className="flex flex-col md:flex-row ">
        {/* Left Column */}
        <div className="md:flex-1 bg-slate-900 md:w-1/2 w-full md:h-screen py-6 px-2 md:px-24 flex-col justify-center items-center">
          <div className="md:h-[90vh] my-auto flex flex-col justify-center items-center">
              <Title>
            Discute con tus colegas…
              </Title>
            <div className='my-3'></div>
            <div className='md:mx-24'>
            <Paragraph>

            De los seis (6) tipos de energías peligrosas, cuál(es) está(n) más cerca de tus actividades en el día a día
            </Paragraph></div>
            <Instruction arrow='down'>
              Haz clic sobre el audio
            </Instruction>
            <audio controls className="media-espanol">
              <source src={audioDiscuteColegas} type="audio/mp3" />
            </audio>

            {/* Botón de WhatsApp */}
            <button id="actividad_3" style={{gap: '5px'}}  className="flex justify-center items-center group bg-main-color rounded-full px-4 py-2  shadow-main-color text-white mx-auto my-6" onClick={handleShow}>
              <i className="fab fa-whatsapp" aria-hidden="true"></i> Comparte
            </button>
          </div>
        </div>

        {/* Right Column */}
        <div className="md:flex-2 bg-white md:w-1/2 w-full md:h-screen px-10 md:pr-20 flex mx-auto justify-center items-center md:pb-24">
  <div className="flex flex-col justify-center items-center p-6 gap-4 md:h-[90vh] max-w-[100%] mx-auto mb-36 md:mb-0 ">
    <div>
      <Player
        autoplay
        loop
        src="https://lottie.host/a39c06e3-36dd-47bd-b898-8589233395d3/Cbc4DMUFZ0.json"
        className='md:w-[700px] md:h-[700px]'
        // style={{ height: '700px', width: '700px' }} // Cambia el tamaño aquí
      />
    </div>
  </div>
</div>

      </div>

      {/* Modal */}
      {showModal && (
        <>
         {/* Backdrop oscuro */}
         <div className="backdrop" onClick={handleClose}></div>

        <div className="modal show fade d-block" tabIndex="-1">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-contenido">
              <div className="bg-main-color modal-header">
                <h5 className="modal-title">Comparte</h5>
                <button type="button" className="btn-close" aria-label="Close" onClick={handleClose}></button>
              </div>
              <div className="modal-body">
                <img src={imgComparteColor} alt="" className="image-boton" />
                <p style={{textAlign: 'center'}}>
                De los tipos de energía peligrosa cual está más cerca de tus actividades diarias, comparte tu opinión en nuestro grupo de WhatsApp
                </p>
                {/* <a href="https://chat.whatsapp.com/JMOUszqHzRjBtQ4TOaN7q4" target="_blank" rel="noopener noreferrer">
                  <button id="actividad_1" style={{gap: '5px'}}  className="flex justify-center items-center group bg-main-color rounded-full px-4 py-2  shadow-main-color text-white mx-auto my-6">
                    <i className="fab fa-whatsapp" aria-hidden="true"></i> Ir al grupo de WhatsApp
                  </button>
                </a> */}
                {/* <audio controls className="media-espanol center-media">
                  <source src="src/assets/audio/BL-0001_Discute-con-tus-colegas.mp3" type="audio/mp3" />
                </audio> */}
              </div>
            </div>
          </div>
        </div>
        </>
      )}
    </>
  );
}

export default DiscuteConTusColegas;
