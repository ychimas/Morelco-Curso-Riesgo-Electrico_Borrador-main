import img1 from "../../assets/img/slides/sl05img11.png";
import img2 from "../../assets/img/slides/sl05img12.png";
import img3 from "../../assets/img/slides/sl05img13.png";
import img4 from "../../assets/img/slides/sl05img14.png";
import img5 from "../../assets/img/slides/sl05img15.png";
import img6 from "../../assets/img/slides/sl05img16.png";
import audio1 from "../../assets/audio/slide5EsClave.mp3";
import { useState } from "react";

const TiposDeRiesgoQuimico = () => {
  const [borderImg1, setBorderImg1] = useState("border-main-color/50");
  const [borderImg2, setBorderImg2] = useState("border-main-color/50");
  const [borderImg3, setBorderImg3] = useState("border-main-color/50");
  const [borderImg4, setBorderImg4] = useState("border-main-color/50");
  const [borderImg5, setBorderImg5] = useState("border-main-color/50");
  const [borderImg6, setBorderImg6] = useState("border-main-color/50");

  const [img1Clicked, setImg1Clicked] = useState(false);
  const [img2Clicked, setImg2Clicked] = useState(false);
  const [img3Clicked, setImg3Clicked] = useState(false);
  const [img4Clicked, setImg4Clicked] = useState(false);
  const [img5Clicked, setImg5Clicked] = useState(false);
  const [img6Clicked, setImg6Clicked] = useState(false);

  const handleImgClick = (e) => {
    const { target } = e;
    if (target.name === "1") {
      setBorderImg1("border-blue-700");
      setImg1Clicked(true);
    }
    if (target.name === "2") {
      setBorderImg2("border-blue-700");
      setImg2Clicked(true);
    }
    if (target.name === "3") {
      setBorderImg3("border-blue-700");
      setImg3Clicked(true);
    }
    if (target.name === "4") {
      setBorderImg4("border-blue-700");
      setImg4Clicked(true);
    }
    if (target.name === "5") {
      setBorderImg5("border-blue-700");
      setImg5Clicked(true);
    }
    if (target.name === "6") {
      setBorderImg6("border-blue-700");
      setImg6Clicked(true);
    }
  };

  const handleLimpiar = () => {
    setBorderImg1("border-main-color/50");
    setBorderImg2("border-main-color/50");
    setBorderImg3("border-main-color/50");
    setBorderImg4("border-main-color/50");
    setBorderImg5("border-main-color/50");
    setBorderImg6("border-main-color/50");
    setImg1Clicked(false);
    setImg2Clicked(false);
    setImg3Clicked(false);
    setImg4Clicked(false);
    setImg5Clicked(false);
    setImg6Clicked(false);
  };

  const handleValidar = () => {
    img1Clicked
      ? setBorderImg1("border-red-600")
      : setBorderImg1("border-main-color/50");
    img2Clicked
      ? setBorderImg2("border-red-600")
      : setBorderImg2("border-main-color/50");
    img3Clicked
      ? setBorderImg3("border-green-600")
      : setBorderImg3("border-main-color/50");
    img4Clicked
      ? setBorderImg4("border-red-600")
      : setBorderImg4("border-main-color/50");
    img5Clicked
      ? setBorderImg5("border-green-600")
      : setBorderImg5("border-main-color/50");
    img6Clicked
      ? setBorderImg6("border-green-600")
      : setBorderImg6("border-main-color/50");
  };

  return (
    <div className="container mt-12">
      <div className="row mx-auto">
        <div className="col-md-12 col-lg-12 ">
          <h1 className="text-main-color text-center font-bold text-title-size">
            Tipos de riesgo químico
          </h1>
          <p className="mt-6 text-p-size text-center mx-36 ">
            De acuerdo con tu experiencia, identifica los tipos de peligros
            químicos que NO se encuentran bien clasificados:
          </p>
        </div>

        <div className="col-lg-12 col-md-12 row-act">
          <div className="col-lg-4 col-md-4 custom-col-act ">
            <div className="custom-box-act">
              <h4 className="text-main-color font-bold text-xl">SALUD</h4>
              <img
                src={img1}
                alt="Salud 1"
                name="1"
                className={`cursor-pointer border-3 ${borderImg1}`}
                onClick={handleImgClick}
              />
              <img
                src={img2}
                alt="Salud 2"
                name="2"
                className={`cursor-pointer border-3 ${borderImg2}`}
                onClick={handleImgClick}
              />
            </div>
          </div>

          <div className="col-lg-4 col-md-4 custom-col-act">
            <div className="custom-box-act">
              <h4 className="text-main-color font-bold text-xl">
                MEDIO AMBIENTE
              </h4>
              <img
                src={img3}
                alt="Medio Ambiente 1"
                name="3"
                className={`cursor-pointer border-3 ${borderImg3}`}
                onClick={handleImgClick}
              />
              <img
                src={img4}
                alt="Medio Ambiente 2"
                name="4"
                onClick={handleImgClick}
                className={`cursor-pointer border-3 ${borderImg4}`}
              />
            </div>
          </div>

          <div className="col-lg-4 col-md-4 custom-col-act">
            <div className="custom-box-act">
              <h4 className="text-main-color font-bold text-xl">FÍSICOS</h4>
              <img
                src={img5}
                alt="Fisicos 1"
                name="5"
                onClick={handleImgClick}
                className={`cursor-pointer border-3 ${borderImg5}`}
              />
              <img
                src={img6}
                alt="Fisicos 2"
                name="6"
                onClick={handleImgClick}
                className={`cursor-pointer border-3 ${borderImg6}`}
              />
            </div>
          </div>
        </div>

        <div className="flex justify-between px-8 pb-12 text-center center">
          <div>
            <button
              type="button"
              id="clave1Btn"
              data-bs-toggle="modal"
              data-bs-target="#sl05md01"
              className="rounded-full mr-12 btn-primary btn-lg track-element"
            >
              Recordemos
            </button>
          </div>
          <div>
            <button
              type="button"
              id="validarBtn"
              className="btn-primary btn-lg rounded-full text-md bg-main-color"
              onClick={handleValidar}
            >
              Validar
            </button>
            <button
              type="button"
              id="resetBtn"
              className="rounded-full btn-primary btn-lg text-md"
              onClick={handleLimpiar}
            >
              Limpiar
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      <div
        className="modal fade"
        id="sl05md01"
        tabIndex="-1"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Recordemos</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <p>
                Un producto químico peligroso es aquel que incluye
                características peligrosas conforme con la aplicación de los
                criterios de clasificación de peligrosidad establecidos en el
                SGA.
              </p>
              <br />
              <p>
                Otras características adicionales que representan RIESGO QUIMICO
                son: Teratogénico (afectación al embarazo), Mutagénico,
                Irritante, Cancerígeno, Corrosivo, Comburente, Corrosivo, entre
                otros
              </p>
              <i className="inst mb-2">Escuchemos con atención este audio</i>
              <audio controls className="media-espanol">
                <source src={audio1} type="audio/mp3" />
              </audio>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TiposDeRiesgoQuimico;
