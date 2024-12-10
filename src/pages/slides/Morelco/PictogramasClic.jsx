import signoInterrogacion from "../../assets/img/slides/signo_interrogacion.png";
import imgExplosivos from "../../assets/img/slides/sl14-1.png";
import imgGasInflamable from "../../assets/img/slides/sl14-2.png";
import imgGasNoToxico from "../../assets/img/slides/sl14-3.png";
import imgGasToxico from "../../assets/img/slides/sl14-4.png";
import imgLiquidosInfamables from "../../assets/img/slides/sl14-5.png";
import imgSolidosInflamables from "../../assets/img/slides/sl14-6.png";
import imgSolidosEsponaneamenteCombustibles from "../../assets/img/slides/sl14-7.png";
import imgSolidosReaccionAgua from "../../assets/img/slides/sl14-8.png";
import imgOxidantes from "../../assets/img/slides/sl14-9.png";
import imgPeroxidoOrganico from "../../assets/img/slides/sl14-10.png";
import imgSolidosLiquidosToxicos from "../../assets/img/slides/sl14-11.png";
import imgBiologicos from "../../assets/img/slides/sl14-12.png";
import imgRadiactivos from "../../assets/img/slides/sl14-13.png";
import imgCorrosivos from "../../assets/img/slides/sl14-14.png";
import imgPeligrosVarios from "../../assets/img/slides/sl14-15.png";
import { mostrarImagen } from "../../../assets/js/interactividad.js";
import { useState } from "react";
function PictogramasClic() {
  const [images, setImages] = useState({
    actividad_6: false,
    actividad_7: false,
    actividad_8: false,
    actividad_9: false,
    actividad_10: false,
  });

  return (
    <div className="container slider09 fr-slide">
      <div className="row mx-auto h-[80vh] ">
        <div className="col-lg-12 col-md-12 mt-3 ">
          <h1 className="text-title-size text-main-color font-bold text-center mx-36 my-12">
            Pictogramas de las Naciones Unidas para el transporte de mercancías
            peligrosas
          </h1>
          <p className="text-p-size  text-center">
            Si los productos químicos requieren ser transportados, se debe
            incluir en la etiqueta, los pictogramas utilizados por las
            Recomendaciones de las Naciones Unidas relativas al Transporte de
            Mercancías Peligrosas: Reglamentación Modelo, acorde a los
            establecido en el Decreto 1079 del 2015 y la Norma Técnica
            Colombiana - NTC1692 relativa al uso de los pictogramas de Naciones
            Unidas para el transporte.
          </p>
        </div>
        <div
          className="col-md-12 col-lg-12 text-center"
          style={{ maxWidth: "1000px", margin: "0 auto" }}
        >
          <i className="inst my-4 block text-gray-400">
            Haz click en los espacios en blanco para descubrir los pictogramas
            recomendados por las Naciones Unidas
          </i>
          <div className="ctAct">
            <div>
              <img
                className="interrogacion track-element"
                id="actividad_6"
                src={signoInterrogacion}
                onClick={(e) =>
                  mostrarImagen(e.currentTarget, setImages, images)
                }
                style={{ cursor: "pointer" }}
                alt="Interrogación"
              />
              {images.actividad_6 && (
                <img src={imgExplosivos} alt="Explosivos" />
              )}
              <p className="small-text">Explosivos</p>
            </div>
            <div>
              <img src={imgGasInflamable} alt="Gas inflamable" />
              <p className="small-text">Gas inflamable</p>
            </div>
            <div>
              <img
                src={signoInterrogacion}
                id="actividad_7"
                onClick={(e) =>
                  mostrarImagen(e.currentTarget, setImages, images)
                }
                style={{ cursor: "pointer" }}
                alt="Interrogación"
              />
              {images.actividad_7 && (
                <img src={imgGasNoToxico} alt="Gas no tóxico, no inflamable" />
              )}
              <p className="small-text">Gas no tóxico, no inflamable</p>
            </div>
            <div>
              <img src={imgGasToxico} alt="Gas tóxico" />
              <p className="small-text">Gas tóxico</p>
            </div>
            <div>
              <img
                className="track-element"
                id="actividad_8"
                src={signoInterrogacion}
                onClick={(e) =>
                  mostrarImagen(e.currentTarget, setImages, images)
                }
                style={{ cursor: "pointer" }}
                alt="Interrogación"
              />
              {images.actividad_8 && (
                <img src={imgLiquidosInfamables} alt="Líquidos inflamables" />
              )}
              <p className="small-text">Líquidos inflamables</p>
            </div>
            <div>
              <img src={imgSolidosInflamables} alt="Sólidos inflamables" />
              <p className="small-text">Sólidos inflamables</p>
            </div>
            <div>
              <img
                src={imgSolidosEsponaneamenteCombustibles}
                alt="Sólidos espontáneamente combustibles"
              />
              <p className="small-text">Sólidos espontáneamente combustibles</p>
            </div>
            <div>
              <img
                src={imgSolidosReaccionAgua}
                alt="Sólidos que reaccionan con el agua"
              />
              <p className="small-text">Sólidos que reaccionan con el agua</p>
            </div>
            <div>
              <img
                src={signoInterrogacion}
                id="actividad_9"
                onClick={(e) =>
                  mostrarImagen(e.currentTarget, setImages, images)
                }
                style={{ cursor: "pointer" }}
                alt="Interrogación"
              />
              {images.actividad_9 && <img src={imgOxidantes} alt="Oxidantes" />}
              <p className="small-text">Oxidantes</p>
            </div>
            <div>
              <img src={imgPeroxidoOrganico} alt="Peróxido organico" />
              <p className="small-text">Peróxido organico</p>
            </div>
            <div>
              <img
                src={imgSolidosLiquidosToxicos}
                alt="Sólidos y líquidos tóxicos"
              />
              <p className="small-text">Sólidos y líquidos tóxicos</p>
            </div>
            <div>
              <img
                className="track-element"
                id="actividad_10"
                src={signoInterrogacion}
                onClick={(e) =>
                  mostrarImagen(e.currentTarget, setImages, images)
                }
                style={{ cursor: "pointer" }}
                alt="Interrogación"
              />
              {images.actividad_10 && (
                <img src={imgBiologicos} alt="Biológicos" />
              )}
              <p className="small-text">Biológicos</p>
            </div>
            <div>
              <img src={imgRadiactivos} alt="Radiactivos" />
              <p className="small-text">Radiactivos</p>
            </div>
            <div>
              <img src={imgCorrosivos} alt="Corrosivos" />
              <p className="small-text">Corrosivos</p>
            </div>
            <div>
              <img src={imgPeligrosVarios} alt="Peligros varios" />
              <p className="small-text">Peligros varios</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PictogramasClic;
