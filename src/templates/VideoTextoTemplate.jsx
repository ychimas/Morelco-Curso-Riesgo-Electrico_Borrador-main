import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../assets/css/cards.css";
import videoObligaciones from "../../assets/video/SIMBOLOS DE RIESGO QUÍMICO.mp4";
import { faCircleQuestion } from "@fortawesome/free-solid-svg-icons";
import "../../../node_modules/video-react/dist/video-react.css";
import {
  Player,
  ControlBar,
  ReplayControl,
  ForwardControl,
  CurrentTimeDisplay,
  TimeDivider,
  PlaybackRateMenuButton,
  VolumeMenuButton,
} from "video-react";

function VideoTextoTemplate() {
  return (
    <div className="flex flex-col md:flex-row ">
      {/* Left Column */}
      <div className="md:flex-1 bg-slate-900 md:w-2/5 w-full h-screen py-6 px-24  flex-col justify-center items-center">

          <h1 className="text-main-color text-title-size text-center font-bold mb-12">
            Vías de ingreso de las sustancias al cuerpo humano
          </h1>
          <i className="inst block text-center text-p-size my-4">
            Seleccione la opción correcta de cada lista desplegable
          </i>
          <div className="ctActivityDragDrop mt-8">
            <div>
              <div className="listOpcDrop mx-12">
                <p className="mt-2 text-center">
                  La energía se manifiesta de diversas formas en nuestro entorno. La
                  <select
                    className={`border-2 mx-2 rounded-md ${borderColor1}`}
                    // className={`border-2 mx-2 rounded-md border-green-800`}
                    name="dropdown1"
                    onChange={handleDropdownChange}
                  >
                    <option value="0">Seleccione...</option>
                    <option value="1">Energía Mecánica</option>
                    <option value="2">Energía Hidráulica</option>
                    <option value="3">Energía Química</option>
                    <option value="4">Energía Eléctrica</option>
                    <option value="5">Energía Térmica</option>
                    <option value="6">Energía Neumática</option>
                  </select>
                  , por ejemplo, es la capacidad de una sustancia para generar calor a través de cambios en su composición, como ocurre con los materiales radioactivos. Por otro lado, la 
                  <select
                    className={`border-2 mx-2 rounded-md ${borderColor2}`}
                    name="dropdown2"
                    onChange={handleDropdownChange}
                  >
                    <option value="0">Seleccione...</option>
                    <option value="1">Energía Mecánica</option>
                    <option value="2">Energía Hidráulica</option>
                    <option value="3">Energía Química</option>
                    <option value="4">Energía Eléctrica</option>
                    <option value="5">Energía Térmica</option>
                    <option value="6">Energía Neumática</option>
                  </select>
                  se produce cuando existe una diferencia de potencial entre dos puntos, lo que permite que una corriente fluya a través de un conductor. En cuanto a la 
                  <select
                    className={`border-2 mx-2 rounded-md ${borderColor3}`}
                    name="dropdown3"
                    onChange={handleDropdownChange}
                  >
                    <option value="0">Seleccione...</option>
                    <option value="1">Energía Mecánica</option>
                    <option value="2">Energía Hidráulica</option>
                    <option value="3">Energía Química</option>
                    <option value="4">Energía Eléctrica</option>
                    <option value="5">Energía Térmica</option>
                    <option value="6">Energía Neumática</option>
                  </select>
                  , esta proviene de fluidos como el agua o el aceite, los cuales se utilizan para activar mecanismos. De manera similar, la 
                  <select
                    className={`border-2 mx-2 rounded-md ${borderColor4}`}
                    name="dropdown4"
                    onChange={handleDropdownChange}
                  >
                    <option value="0">Seleccione...</option>
                    <option value="1">Energía Mecánica</option>
                    <option value="2">Energía Hidráulica</option>
                    <option value="3">Energía Química</option>
                    <option value="4">Energía Eléctrica</option>
                    <option value="5">Energía Térmica</option>
                    <option value="6">Energía Neumática</option>
                  </select>
                  emplea aire o gases comprimidos para transmitir la fuerza necesaria para hacer funcionar distintos sistemas. También está la 
                  <select
                    className={`border-2 mx-2 rounded-md ${borderColor5}`}
                    name="dropdown5"
                    onChange={handleDropdownChange}
                  >
                    <option value="0">Seleccione...</option>
                    <option value="1">Energía Mecánica</option>
                    <option value="2">Energía Hidráulica</option>
                    <option value="3">Energía Química</option>
                    <option value="4">Energía Eléctrica</option>
                    <option value="5">Energía Térmica</option>
                    <option value="6">Energía Neumática</option>
                  </select>
                  , que se transfiere en forma de calor de un cuerpo con mayor temperatura a uno más frío. Finalmente, la 

                  <select
                    className={`border-2 mx-2 rounded-md ${borderColor6}`}
                    name="dropdown6"
                    onChange={handleDropdownChange}
                  >
                    <option value="0">Seleccione...</option>
                    <option value="1">Energía Mecánica</option>
                    <option value="2">Energía Hidráulica</option>
                    <option value="3">Energía Química</option>
                    <option value="4">Energía Eléctrica</option>
                    <option value="5">Energía Térmica</option>
                    <option value="6">Energía Neumática</option>
                  </select>
                  es aquella que los cuerpos poseen debido a su movimiento, conocida como energía cinética, o por su posición, lo que se denomina energía potencial.
                </p>
                <br />
              </div>
            </div>

            <div className="flex justify-center items-center gap-24">
              <button
                className="bg-main-color px-3 py-2 rounded-full shadow-md shadow-main-color/40 text-white mt-3 track-element"
                onClick={validateDropdowns}
                data-bs-target="#sl06md01"
              >
                Validar
              </button>
              <button
                id="actividad_3"
                className="bg-main-color px-3 py-2 rounded-full shadow-md shadow-main-color/40 text-white mt-3 track-element"
                data-bs-toggle="modal"
                data-bs-target="#sl06md01"
              >
                ¿Sabías que?
              </button>
            </div>
      </div>

      {/* Right Column */}
      <div className="md:flex-2 bg-white md:w-3/5 w-full px-10 md:pr-20 flex mx-auto justify-center items-center pb-24">
      </div>
    </div>
    </div>
  );
}

export default VideoTextoTemplate;
