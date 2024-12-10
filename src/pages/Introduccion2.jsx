import "../assets/bootstrap/css/bootstrap.css";
import "../assets/bootstrap/css/bootstrap-grid.css";
import "../assets/bootstrap/css/bootstrap-reboot.css";
import "../assets/bootstrap/css/bootstrap-utilities.css";
import "../assets/css/style.css";
import "../assets/css/styleSlider.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import relojIns from "../assets/img/instrucciones/reloj-ins.svg";
import cursoIns from "../assets/img/instrucciones/curso-ins.svg";
import Recomendacion1 from "../assets/img/instrucciones/recomendacion-1.svg";
import Recomendacion2 from "../assets/img/instrucciones/recomendacion-2.svg";
import Recomendacion3 from "../assets/img/instrucciones/recomendacion-3.svg";
import Recomendacion4 from "../assets/img/instrucciones/recomendacion-4.svg";

import { useNavigate } from "react-router-dom";

function IntroduccionCombinada() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/slides");
  };

  return (
    <div className="imagen-instruccion introduccion ">
      <div className="row">
        {/* Fondo común para ambas secciones */}
        <div className="col-lg-12 col-md-12 imagen-instruccion p-0 m-0">
          <div className="ctMd darkinstrucciones p-0 mx-auto border-none">
            <div className="contentModule2">
              <div className="container current dividerBgInstruccion">
                <div className="row">
                  {/* Componente 1 */}
                  <div className="col-lg-6 col-md-12 mb-28">
                    <h1 className="tituloh1-center text-white text-2xl pb-5 font-bold">
                      Datos clave de este curso:
                    </h1>
                    <div className="row">
                      <div className="col-lg-6 col-md-12">
                        <div className="cardInstrucciones-body">
                          <div className="cardInstrucciones bg-slate-500">
                            <img src={relojIns} alt="Tiempo máximo" />
                            <h5 className="tituloh5-white">
                              Tiempo máximo estimado de duración virtual:
                            </h5>
                            <p className="parrafo-white">1 hora</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-12">
                        <div className="cardInstrucciones-body">
                          <div className="cardInstrucciones bg-slate-500">
                            <img src={relojIns} alt="Tiempo perfil" />
                            <h5 className="tituloh5-white">
                              Tiempo asociado a su perfil de formación:
                            </h5>
                            <p className="parrafo-white">4 horas</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-6 col-md-12">
                        <div className="cardInstrucciones-body">
                          <div className="cardInstrucciones bg-slate-500">
                            <img src={cursoIns} alt="Permisos curso" />
                            <h5 className="tituloh5-white">
                              Este curso le permitirá:
                            </h5>
                            <p className="parrafo-white">
                            Desarrollar habilidades prácticas para manejar cargas de forma segura y eficiente, reduciendo el riesgo de lesiones.
                              <li className="text-white">Identificar los riesgos asociados al manejo manual de cargas y cómo minimizarlos.</li>                             
                            </p>

                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-12">
                        <div className="cardInstrucciones-body">
                          <div className="cardInstrucciones bg-slate-500">
                            <img src={cursoIns} alt="Finalización curso" />
                            <h5 className="tituloh5-white">
                              Al finalizar este curso usted podrá:
                            </h5>
                            <ul>
                              <li className="text-white">Reconocer las políticas de seguridad que buscan cuidarte en la operación</li>
                              <li className="text-white">Recordar los principios del bloqueo y etiquetado</li>
                              <li className="text-white">Conocer el procedimiento de bloqueo y etiquetado</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Componente 2 */}

                  <div className="col-lg-6 col-md-12 mt-12 mb-36">

                    <h1 className="tituloh1-center text-white text-2xl font-bold pb-5">
                      Recomendaciones para tomar este curso:
                    </h1>
                    <div className="row">
                      <div className="col-lg-6 col-md-12">
                        <div className="cardInstrucciones-body">
                          <div className="cardInstrucciones bg-slate-500">
                            <img src={Recomendacion1} alt="Recomendación 1" />
                            <p className="parrafo-white">
                              1. Disponerse a adquirir nuevos conocimientos y reforzar los existentes para su seguridad.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-12">
                        <div className="cardInstrucciones-body">
                          <div className="cardInstrucciones bg-slate-500">
                            <img src={Recomendacion2} alt="Recomendación 2" />
                            <p className="parrafo-white">
                              2. Disponer del tiempo mínimo estimado de duración.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-6 col-md-12">
                        <div className="cardInstrucciones-body">
                          <div className="cardInstrucciones bg-slate-500">
                            <img src={Recomendacion3} alt="Recomendación 3" />
                            <p className="parrafo-white">
                              3. Contar con conexión a Internet.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-12">
                        <div className="cardInstrucciones-body">
                          <div className="cardInstrucciones bg-slate-500">
                            <img src={Recomendacion4} alt="Recomendación 4" />
                            <p className="parrafo-white">
                              4. Realizar, hasta finalizar, los contenidos del curso y realizar la evaluación.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-12 col-md-12 contenedor-center">
                        <div className="cardInstrucciones-body">
                        <div className="cardInstrucciones bg-slate-500">
                          <img src={Recomendacion2} alt="Recomendación 5" />
                          <p className="parrafo-white">
                            5. Realizar todas las actividades de refuerzo y repetirlas si es necesario.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                  {/* Botón Siguiente centrado */}
                  <div className="col-lg-12 col-md-12 text-center">
                    <button
                      id="siguiente"
                      className="flex justify-center items-center group bg-main-color rounded-full px-4 py-2 shadow-md shadow-main-color text-white mx-auto my-6"
                      onClick={handleClick}
                    >
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className="mr-1 group-hover:translate-x-1 transition-transform duration-200"
                      />
                      Siguiente
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> 
    </div>
  );
}

export default IntroduccionCombinada;
