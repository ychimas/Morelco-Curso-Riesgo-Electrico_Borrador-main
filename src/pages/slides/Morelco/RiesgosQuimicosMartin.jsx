/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import historieta_01 from "../../assets/img/slides/historieta_01.png";
import historieta_02 from "../../assets/img/slides/historieta_02.png";
import historieta_03 from "../../assets/img/slides/historieta_03.png";
import historieta_04 from "../../assets/img/slides/historieta_04.png";
import historieta_05 from "../../assets/img/slides/historieta_05.png";
import historieta_06 from "../../assets/img/slides/historieta_06.png";
import historieta_07 from "../../assets/img/slides/historieta_07.png";
import historieta_08 from "../../assets/img/slides/historieta_08.png";
import historieta_09 from "../../assets/img/slides/historieta_09.png";
import historieta_10 from "../../assets/img/slides/historieta_10.png";
import historieta_11 from "../../assets/img/slides/historieta_11.png";
import slide_07_historieta from "../../assets/audio/slide07Historieta.mp3";

function RiesgosQuimicosMartin() {
  const [currentImage, setCurrentImage] = useState(historieta_01);

  useEffect(() => {
    const audio = document.getElementById("audio_slide_07");

    const actualizarImagen = () => {
      const currentTime = audio.currentTime;
      if (currentTime >= 6) {
        setCurrentImage(historieta_02);
      }
      if (currentTime >= 28) {
        setCurrentImage(historieta_03);
      }
      if (currentTime >= 34) {
        setCurrentImage(historieta_04);
      }
      if (currentTime >= 45) {
        setCurrentImage(historieta_05);
      }
      if (currentTime >= 68) {
        setCurrentImage(historieta_06);
      }
      if (currentTime >= 99) {
        setCurrentImage(historieta_07);
      }
      if (currentTime >= 110) {
        setCurrentImage(historieta_08);
      }
      if (currentTime >= 131) {
        setCurrentImage(historieta_09);
      }
      if (currentTime >= 144) {
        setCurrentImage(historieta_10);
      }
      if (currentTime >= 168) {
        setCurrentImage(historieta_11);
      }
    };

    audio.addEventListener("timeupdate", actualizarImagen);
    audio.addEventListener("seeked", actualizarImagen);

    return () => {
      audio.removeEventListener("timeupdate", actualizarImagen);
      audio.removeEventListener("seeked", actualizarImagen);
    };
  }, []);

  return (
    <div className="container z-10">
      <div className="row mx-auto" style={{ maxWidth: "1000px" }}>
        <div className="col-lg-12 col-md-12">
          <h1 className="text-title-size text-center  text-main-color font-bold my-8">
            Recordemos los tipos de riesgos químicos con Martin
          </h1>
          <i
            className="inst mb-2 text-p-size  py-2 w-full text-center text-gray-400"
            style={{
              fontSize: "12px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            Inicia el audio para recorrer esta historieta de &quot;Martin&quot;,
            quien representa a un colaborador comprometido con nuestra
            seguridad.
          </i>
          <div className="historieta">
            <img
              style={{ width: "100%", height: "auto" }}
              id="img_slide_07"
              src={currentImage}
              alt="Historieta actual"
            />
            <div
              className="z-20"
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "20px",
              }}
            >
              <audio id="audio_slide_07" controls>
                <source src={slide_07_historieta} type="audio/mp3" />
              </audio>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RiesgosQuimicosMartin;
