import Amy from "../../../assets/img/slides/ilustracion-morelco-mujer.png";
import pdf1 from "../../../assets/doc/permiso_trabajo_morelco.pdf";
import pdf2 from "../../../assets/doc/certificado_apoyo_aislamiento.pdf";
import pdf3 from "../../../assets/doc/ats_morelco.pdf";
import Dia from "../../../assets/img/slides/es-clave-que-sepas-color.png";
// import olvi from "../../../assets/audio/Sld11_no_olvides_meta_emerald_v1.mp3";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../assets/css/switch.css';
import { faCircleQuestion,} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useEffect } from 'react';
import useStore from '../../../store';

import Title from '../../components/Title.jsx'
import Paragraph from '../../components/Paragraph.jsx'

const DocumentosClave = () => {
  const [mostrarModal, setMostrarModal] = useState(false);
  const [pdfSrc, setPdfSrc] = useState(pdf1);
  const setIsOnDivisor = useStore((state) => state.setIsOnDivisor);

  useEffect(() => {
    setIsOnDivisor(false);
  }, []);

  const handleMostrarPdf = (src) => {
    setPdfSrc(src);
    setMostrarModal(false); // Asegura que el modal esté cerrado
  };

  const handleMostrarModal = () => {
    setMostrarModal(true);
  };

  const handleCerrarModal = () => {
    setMostrarModal(false);
  };

  const handleOutsideClick = (e) => {
    // Verifica si el clic fue fuera del contenido del modal
    if (e.target.classList.contains("modal")) {
      handleCerrarModal();
    }
  };

  return (
    <div className="container-fluid ">
      <div className="row vh-100">
        {/* Sección izquierda */}
        <div className="col-lg-6 col-md-12 d-flex flex-column justify-content-center align-items-center text-white" style={{ backgroundColor: '#131a2d' }}>
          {/* Imagen principal */}
          <div className="text-center mb-2 mt-4">
            {/* <h1 className="text-secondary-color text-center font-bold text-title-size mt-12 mb-12">Reconoce los documentos clave:</h1> */}
            <Title>
              Reconoce los documentos clave:
            </Title>
          </div>
          <img
            src={Amy}
            alt="Imagen de trabajadores"
            className="img-fluid mb-4 max-w-[80%] mx-auto md:max-w-[20%]"

            // style={{ maxWidth: '20%' }} // Disminuye el tamaño de la imagen
          />

{/* <p className="mb-4 text-center text-gray-300" style={{ marginLeft: '50px', marginRight: '50px' }}> */}
<div className="md:mx-24">
<Paragraph>

  AMY te presenta los documentos que te ayudan a cuidar de tu seguridad con el Riesgo Eléctrico:
</Paragraph></div>
<div className="my-1"></div>
{/* </p> */}

          {/* Botones morados */}
          <button
            className="btn btn-primary mb-3"
            style={{
              backgroundColor: '#9b5de5',
              borderColor: '#9b5de5',
              boxShadow: '0 4px 8px rgba(145, 39, 174, 0.5)' // Sombra con el color #9127AE
            }}
            onClick={() => handleMostrarPdf(pdf1)}
          >
            Permiso de trabajo
          </button>
          <button
            className="btn btn-primary mb-3"
            style={{
              backgroundColor: '#9b5de5',
              borderColor: '#9b5de5',
              boxShadow: '0 4px 8px rgba(145, 39, 174, 0.5)' // Sombra con el color #9127AE
            }}
            onClick={() => handleMostrarPdf(pdf2)}
          >
            Certificado de apoyo de Riesgo Eléctrico
          </button>
          <button
            className="btn btn-primary mb-3"
            style={{
              backgroundColor: '#9b5de5',
              borderColor: '#9b5de5',
              boxShadow: '0 4px 8px rgba(145, 39, 174, 0.5)' // Sombra con el color #9127AE
            }}
            onClick={() => handleMostrarPdf(pdf3)}
          >
            ATS - Análisis Seguro de Trabajo
          </button>

          {/* Botón "No olvides" */}
          <button
              id="actividad_1"
              className="btn btn-primary mb-3 "
              onClick={handleMostrarModal}
              style={{
                backgroundColor: '#9b5de5',
                borderColor: '#9b5de5',
                boxShadow: '0 4px 8px rgba(145, 39, 174, 0.5)' // Sombra con el color #9127AE
              }}
            >
            <FontAwesomeIcon icon={faCircleQuestion} className="mr-2" /> Sabías que
            </button>
        </div>

        {/* Sección derecha */}
        <div className="col-lg-5 col-md-12 d-flex flex-column justify-content-center h-[80vh] md:ml-[40px] md:h-auto mb-36 border md:mb-0 items-center bg-white"
>          {/* Contenedor para mostrar el PDF */}
          <div id="pdf_viewer" className="responsive-pdf w-100 h-100 p-4" style={{ maxWidth: '800px', height: '85vh' }}>
            {pdfSrc ? (
              <iframe
                id="pdf_documento"
                src={pdfSrc}
                frameBorder="0"
                width="100%"
                height="100%"
              ></iframe>
            ) : (
              <p>Selecciona un documento para visualizarlo.</p>
            )}
          </div>
          <div className="mb-36 md:mb-0"></div>
        </div>
      </div>

      {/* Modal para "No olvides" */}
      {mostrarModal && (
        <>
          <div className="modal-backdrop fade show" onClick={() => setMostrarModal(false)}></div>
          <div className="modal show fade d-block" tabIndex="-1" onClick={handleOutsideClick}>
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-contenido bg-white rounded-md">
                <div className="modal-header bg-main-color">
                  <h5 className="modal-title">Escuchemos…</h5>
                  <button type="button" className="btn-close" aria-label="Close" onClick={() => setMostrarModal(false)}></button>
                  
                </div>
                <div className="modal-body">
                <img
                  src={Dia}
                  alt="Es clave que sepas"
                  className="image-boton"
                />
                  <div className="modal-body" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  
                 <p>
                 Nuestra meta es CERO incidentes graves que afecten la salud e integridad de las personas, el ambiente y los activos.
                </p>
                <li>¡TU eres la clave para lograrla!</li>
                </div>
              </div>
            </div>
          </div>
         </div>
        </>
      )}
    </div>
  );
};

export default DocumentosClave;
