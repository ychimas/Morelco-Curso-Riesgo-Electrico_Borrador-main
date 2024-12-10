import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperclip, faMapPin, faCheck, faRepeat } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Ener1 from "../../../assets/img/slides/sld_energia_1.jpg";
import Ener2 from "../../../assets/img/slides/sld_energia_2.jpg";
import Ener3 from "../../../assets/img/slides/sld_energia_3.jpg";
import Ener4 from "../../../assets/img/slides/sld_energia_4.jpg";
import Ener5 from "../../../assets/img/slides/sld_energia_5.jpg";
import Ener6 from "../../../assets/img/slides/sld_energia_6.jpg";
import mod1 from "../../../assets/img/slides/es-clave-que-sepas-color.png";
import audio1 from "../../../assets/audio/sld_6_es_clave_sepas.mp3";
import mod2 from "../../../assets/img/slides/recuerda-colo.png";
import audio2 from "../../../assets/audio/M7 - ENERGIAS slide 9 RECUERDA.mp3";

const EnergiaPeligrosa = () => {
    const validarArrastreElementos = () => {
      // Implementar funcionalidad de validación
    };
  
    const reiniciarActividad = () => {
      // Implementar funcionalidad de reinicio
    };
  
    return (
      <div className="container">
        <div className="row">
          {/* <div>
            <p className="indPag">
              <a href="#">La energía en nuestro trabajo</a>
            </p>
            <span className="indPagMb"></span>
          </div> */}
          <h1 className="tituloh1-center text-main-color text-title-size mt-6 mb-6 font-bold">Recordemos los 6 Tipos de riesgos Eléctricos</h1>
          <i className="text-secondary-color bg-secondary-color/20 block text-center px-4 py-2 rounded-md mt-3 mb-2">
            Arrastra el nombre de el riesgo Eléctrico que le corresponda a cada número, de acuerdo con su definición
          </i>
          <div className="col-lg-5 col-md-12">
            <div className="cardEnergias-body">
              <div className="cardEnergias">
                <img
                  className="image-seis-energias"
                  id="img-1"
                  src={Ener1}
                  alt="Energia Quimica"
                />
              </div>
            </div>
            <div className="cardEnergias-body">
              <div className="cardEnergias">
                <img
                  id="img-2"
                  src={Ener2}
                  alt="Energia Electrica"
                  className="image-seis-energias"
                />
              </div>
            </div>
            <div className="cardEnergias-body">
              <div className="cardEnergias">
                <img
                  id="img-3"
                  src={Ener3}
                  alt="Energia Hidraulica"
                  className="image-seis-energias"
                />
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-12">
            <div className="ctActivityDragDrop">
              <div>
                <div className="listOpcDrop">
                  <p className="mt-2">
                    <span className="item-arrastrar" id="drop1">1. <br /><br /></span>
                    <span className="item-arrastrar" id="drop2">2. <br /><br /></span>
                    <span className="item-arrastrar" id="drop3">3. <br /><br /></span>
                    <span className="item-arrastrar" id="drop4">4. <br /><br /></span>
                    <span className="item-arrastrar" id="drop5">5. <br /><br /></span>
                    <span className="item-arrastrar" id="drop6">6. <br /><br /></span>
                  </p>
                  <br />
                </div>
              </div>
              <div className="ctActivityDragDropFny" style={{ display: 'none' }}>
                <h4>Correcto !!</h4>
              </div>
            </div>
          </div>
  
          <div className="col-lg-5 col-md-12">
            <div className="cardEnergias-body">
              <div className="cardEnergias">
                <img
                  id="img-4"
                  src={Ener4}
                  alt="Energia Neumática"
                  className="image-seis-energias"
                />
              </div>
            </div>
            <div className="cardEnergias-body">
              <div className="cardEnergias">
                <img
                  id="img-5"
                  src={Ener5}
                  alt="Energia Termica"
                  className="image-seis-energias"
                />
              </div>
            </div>
            <div className="cardEnergias-body">
              <div className="cardEnergias">
                <img
                  id="img-6"
                  src={Ener6}
                  alt="Energia Mecanica"
                  className="image-seis-energias"
                />
              </div>
            </div>
          </div>
  
          <div className="row col-lg-12 col-md-12">
            <div className="ctActivityDragDrop">
              <div>
                <div className="listOpcDrop"></div>
              </div>
              <div className="listOpcDrag text-center center">
                <span className="item-arrastrar" id="drag5">Térmica</span>
                <span className="item-arrastrar" id="drag2">Eléctrica</span>
                <span className="item-arrastrar" id="drag6">Mecánica</span>
                <span className="item-arrastrar" id="drag1">Química</span>
                <span className="item-arrastrar" id="drag3">Hidráulica</span>
                <span className="item-arrastrar" id="drag4">Neumática</span>
              </div>
              <div className="ctActivityDragDropFny" style={{ display: 'none' }}>
                <h4>Correcto !!</h4>
              </div>
            </div>
            <div className="row col-lg-12 col-md-12">
              <div className="col-lg-3 col-md-12">
                <button className="flex justify-center items-center group bg-main-color rounded-full px-4 py-2 shadow-md shadow-main-color text-white mx-auto my-6 " data-bs-toggle="modal" data-bs-target="#es_clave">
                  <FontAwesomeIcon icon={faPaperclip} /> Es clave que sepas
                </button>
              </div>
              <div className="col-lg-3 col-md-12">
                <button className="flex justify-center items-center group bg-main-color rounded-full px-4 py-2 shadow-md shadow-main-color text-white mx-auto my-6" data-bs-toggle="modal" data-bs-target="#recuerdabtn">
                  <FontAwesomeIcon icon={faMapPin} /> Recuerda
                </button>
              </div>
              <div className="col-lg-3 col-md-12">
                <button id="btn-validar-elementos" onClick={validarArrastreElementos} className="flex justify-center items-center group bg-main-color rounded-full px-4 py-2 shadow-md shadow-main-color text-white mx-auto my-6" disabled>
                  <FontAwesomeIcon icon={faCheck} /> Validar
                </button>
              </div>
              <div className="col-lg-3 col-md-12">
                <button id="btn-reiniciar-elementos" onClick={reiniciarActividad} className="flex justify-center items-center group bg-main-color rounded-full px-4 py-2 shadow-md shadow-main-color text-white mx-auto my-6" disabled>
                  <FontAwesomeIcon icon={faRepeat} /> Reiniciar
                </button>
              </div>
            </div>
          </div>
        </div>
  
        {/* Modal Es Clave */}
        <div className="modal fade" id="es_clave" tabIndex="-1" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content" style={{padding:0}}>
              <div className="modal-header bg-main-color ">
                <h5 className="modal-title">Es clave que sepas</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"><i className="fas fa-times"></i></button>
              </div>
              <div className="modal-body">
                <img src={mod1} alt="" className="image-boton" />
                <p>
                  Riesgo Eléctrico es cualquier fuente o componente de energía que es liberado durante una operación y
                  el mantenimiento de equipos o máquinas y que podría dejar una persona lesionada o la perdida material de un equipo
                </p>
                <audio controls className="media-espanol">
                  <source src={audio1} type="audio/mp3" />
                </audio>
              </div>
            </div>
          </div>
        </div>
  
        {/* Modal Recuerda */}
        <div className="modal fade" id="recuerdabtn" tabIndex="-1" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content" style={{padding:0}}>
      
              <div className=" modal-header bg-main-color">
                <h5 className="modal-title">Recuerda</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"><i className="fas fa-times"></i></button>
              </div>
              <div className="modal-body">
                <img src={mod2} alt="" className="image-boton" />
                <p>
                  De acuerdo con el NIOSH (Instituto Nacional para la Seguridad y Salud Ocupacional) de Estados Unidos, la energía
                  CINÉTICA es la mecánica, mientras que la energía POTENCIAL es la que se encuentra en recipientes a presión, tanques a gas, sistemas hidráulicos o mecánicos.
                </p>
                <audio controls className="media-espanol">
                  <source src={audio2} type="audio/mp3" />
                </audio>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default EnergiaPeligrosa;