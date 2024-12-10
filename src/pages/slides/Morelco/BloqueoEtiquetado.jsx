import React from "react";
import slide1 from "../../../assets/img/carrusel/slider1.png";
import slide2 from "../../../assets/img/carrusel/slider2.png";
import slide3 from "../../../assets/img/carrusel/slider3.png";
import slide4 from "../../../assets/img/carrusel/slider4.png";
import slide5 from "../../../assets/img/carrusel/slider5.png";
import slide6 from "../../../assets/img/carrusel/slider6.png";

import audio1Esp from "../../../assets/audio/sld_17_Preparacion_para_apagado.mp3";
import audio2Esp from "../../../assets/audio/sld_17_Apagado_maquinas_equipos.mp3";
import audio3Esp from "../../../assets/audio/sld_17_aislamiento_maquinas_equipos.mp3";
import audio4Esp from "../../../assets/audio/sld17_aseguramiento_y_etiquetado.mp3";
import audio5Esp from "../../../assets/audio/sld17_energia_residual.mp3";
import audio6Esp from "../../../assets/audio/sld17_Liberacion-seguros-etiquetas.mp3";
import SwiperComponent from "../../components/SwiperBloqueoEtiquetado"; // Asegúrate de la ruta correcta
// import SwiperComponent from "../../components/SwiperComponent";

import "../../slides/styles/BloqueoEtiquetado.css";
import useStore from "../../../store";
import { useEffect } from "react";

const ProcedimientoLOTO = () => {
  const setIsOnDivisor = useStore((state) => state.setIsOnDivisor);

  useEffect(() => {
    setIsOnDivisor(false);
  }, []);
  const slides = [
    {
      imgSrc: slide1,
      title: "1. Preparación para apagado",
      text: `Antes que un empleado autorizado, o un empleado afectado desconecte o apague la máquina o dispositivo, 
      debe tener muy claro la clase y magnitud de la energía, los peligros de la energía a ser controlada y los métodos y la forma de controlar la misma.`,
      audioEsp: audio1Esp,
    },
    {
      imgSrc: slide2,
      title: "2. Apagado de máquinas o equipos",
      text: `Las máquinas o equipos deben ser apagados, utilizando los diagramas de apoyo, el certificado de aislamiento de la compañía, 
      o cualquier otro soporte técnico, realizado previamente por la autoridad Ejecutante y aprobada.`,
      audioEsp: audio2Esp,
    },
    {
      imgSrc: slide3,
      title: "3. Aislamiento de máquinas o equipos",
      text: `Todos los dispositivos de aislamiento necesarios para controlar la energía para la máquina o equipo, serán físicamente ubicadas y operadas, 
      de tal manera que estas aíslen la máquina o equipo de la(s) fuente(s) de energía.`,
      audioEsp: audio3Esp,
    },
    {
      imgSrc: slide4,
      title: "4. Aseguramiento y etiquetado",
      text: `Es responsabilidad del ejecutor y de quien autoriza, revisar los planos, diagramas, etc... para identificar los puntos de aislamiento y medir en la fuente para verificar 
      la intensidad de la energía, presión, etc. y volver a medir una vez este efectuado el aislamiento.`,
      audioEsp: audio4Esp,
    },
    {
      imgSrc: slide5,
      title: "5. Energía Residual",
      text: `Siguiendo la aplicación de dispositivos de aseguramiento y etiquetado a dispositivos de aislamiento de energía, toda la energía potencial, residual o almacenada será descargada, 
      desconectada, o en otras formas poner o colocar en un estado de cero energías.`,
      audioEsp: audio5Esp,
    },
    {
      imgSrc: slide6,
      title: "6. Liberación de seguros y etiquetas",
      text: `Antes que los dispositivos de aseguramiento y etiquetas sean removidos, y la energía restaurada a la maquina o dispositivo, los procedimientos y acciones serán seguidos por el empleado 
      y contratista autorizado.`,
      audioEsp: audio6Esp,
    },
  ];

  const slidesNoText = [
    {
      imgSrc: slide1,
      title: "1. Preparación para apagado",
      text: '',
      audioEsp: audio1Esp,
    },
    {
      imgSrc: slide2,
      title: "2. Apagado de máquinas o equipos",
      text: '',
      audioEsp: audio2Esp,
    },
    {
      imgSrc: slide3,
      title: "3. Aislamiento de máquinas o equipos",
      text: '',
      audioEsp: audio3Esp,
    },
    {
      imgSrc: slide4,
      title: "4. Aseguramiento y etiquetado",
      text: '',
      audioEsp: audio4Esp,
    },
    {
      imgSrc: slide5,
      title: "5. Energía Residual",
      text: '',
      audioEsp: audio5Esp,
    },
    {
      imgSrc: slide6,
      title: "6. Liberación de seguros y etiquetas",
      text: '',
      audioEsp: audio6Esp,
    },
  ];

  return (
    <div className="container mb-48 md:mb-0">
      <div className="row mx-auto" style={{ maxWidth: "1000px" }}>
        <h1 className="text-secondary-color text-title-size mb-3 font-bold" style={{ textAlign: "center" }}>
          Revisemos el procedimiento de bloqueo y etiquetado
        </h1>

        <div className="h-[80vh] m-0">
          <SwiperComponent slides={slidesNoText} />
        </div>
      </div>
    </div>
  );
};

export default ProcedimientoLOTO;
