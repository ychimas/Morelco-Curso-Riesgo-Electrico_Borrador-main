import { useRef } from "react";
import rombo from "../../assets/img/slides/sl16rombo.png";
import truck from "../../assets/img/slides/sl16truck.png";
import audio1 from "../../assets/audio/slide15Pictograma.mp3";

function EtiquetadoMercanciaPeligrosa() {
  const audioRef = useRef(null);

  const toggleAudio = () => {
    if (audioRef.current) {
      if (audioRef.current.paused) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  };
  return (
    <div className="container">
      <div className="row">
        <div className="row">
          <div className="col-lg-12 col-md-12">
            <h1 className="my-12 text-title-size text-center text-main-color font-bold mb-6">
              Etiquetado de la mercancía peligrosa y del vehículo
            </h1>
            <p className="mb-12 text-p-size mx-36 text-center">
              El vehículo y contenedores de las mercancías peligrosas deben
              estar debidamente marcados. Los rombos y placa UN deben ser
              reflectivos, en material duradero y fijos al vehículo. Escriba los
              números de la placa UN con un marcador de tinta durable.
            </p>
          </div>
        </div>
        <div className="row h-full mt-6">
          <div className="col-lg-3 col-md-12 text-center">
            <i className="inst mt-4 text-gray-400 ">
              Haz clic sobre los símbolos para conocer más
            </i>
            <br />
            <div className="dynamic-border">
              <img src={rombo} onClick={toggleAudio} />
            </div>
          </div>
          <div className="col-lg-9 col-md-12">
            <img src={truck} />
          </div>

          <audio
            id="audio_slide_15_1"
            hidden
            className="media-espanol"
            ref={audioRef}
          >
            <source src={audio1} type="audio/mpeg" />
          </audio>
        </div>
      </div>
    </div>
  );
}

export default EtiquetadoMercanciaPeligrosa;
