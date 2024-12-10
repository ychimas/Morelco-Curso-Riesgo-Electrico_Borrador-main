import img1 from "../../assets/img/slides/sld06systemwoman.png";
import img2 from "../../assets/img/slides/sld06systemman.png";
import audio1 from "../../assets/audio/slide6Parenteral.mp3";
import { useState } from "react";

function ViasIngresoSustancias() {
  const [dropdown1, setDropdown1] = useState(0);
  const [dropdown2, setDropdown2] = useState(0);
  const [dropdown3, setDropdown3] = useState(0);
  const [dropdown4, setDropdown4] = useState(0);

  const [borderColor1, setBorderColor1] = useState("border-main-color/50");
  const [borderColor2, setBorderColor2] = useState("border-main-color/50");
  const [borderColor3, setBorderColor3] = useState("border-main-color/50");
  const [borderColor4, setBorderColor4] = useState("border-main-color/50");

  const handleDropdownChange = (e) => {
    const { name, value } = e.target;
    if (name === "dropdown1") {
      setDropdown1(value);
    }
    if (name === "dropdown2") {
      setDropdown2(value);
    }
    if (name === "dropdown3") {
      setDropdown3(value);
    }
    if (name === "dropdown4") {
      setDropdown4(value);
    }
  };

  const validateDropdowns = () => {
    setBorderColor1(dropdown1 === "1" ? "border-green-600" : "border-red-600");
    setBorderColor2(dropdown2 === "2" ? "border-green-600" : "border-red-600");
    setBorderColor3(dropdown3 === "4" ? "border-green-600" : "border-red-600");
    setBorderColor4(dropdown4 === "3" ? "border-green-600" : "border-red-600");

    if (
      dropdown1 === "1" &&
      dropdown2 === "2" &&
      dropdown3 === "4" &&
      dropdown4 === "3"
    ) {
      console.log("Correcto");
    } else {
      console.log("Incorrecto");
    }
  };

  return (
    <div className="container h-[80vh] flex justify-center items-center">
      <div className="row">
        <div className="col-lg-3 col-md-12 flex justify-center items-center">
          <img src={img1} />
        </div>

        <div className="col-md-12 col-lg-6">
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
                  La vía
                  <select
                    className={`border-2 mx-2 rounded-md ${borderColor1}`}
                    // className={`border-2 mx-2 rounded-md border-green-800`}
                    name="dropdown1"
                    onChange={handleDropdownChange}
                  >
                    <option value="0">Seleccione...</option>
                    <option value="1">Dérmica</option>
                    <option value="2">Inhalatoria</option>
                    <option value="3">Ingestión</option>
                    <option value="4">Parenteral</option>
                  </select>
                  implica la absorción a través de la piel, permitiendo que
                  sustancias atraviesen las capas cutáneas y entren en la
                  circulación sanguínea. La
                  <select
                    className={`border-2 mx-2 rounded-md ${borderColor2}`}
                    name="dropdown2"
                    onChange={handleDropdownChange}
                  >
                    <option value="0">Seleccione...</option>
                    <option value="1">Dérmica</option>
                    <option value="2">Inhalatoria</option>
                    <option value="3">Ingestión</option>
                    <option value="4">Parenteral</option>
                  </select>
                  se refiere a la entrada de sustancias a través de las vías
                  respiratorias, donde son transportadas por el aire inhalado y
                  pueden ser absorbidas por los pulmones y entrar en el torrente
                  sanguíneo. La vía
                  <select
                    className={`border-2 mx-2 rounded-md ${borderColor3}`}
                    name="dropdown3"
                    onChange={handleDropdownChange}
                  >
                    <option value="0">Seleccione...</option>
                    <option value="1">Dérmica</option>
                    <option value="2">Inhalatoria</option>
                    <option value="3">Ingestión</option>
                    <option value="4">Parenteral</option>
                  </select>
                  involucra la administración directa de sustancias en el cuerpo
                  a través de inyecciones, omite las barreras naturales y
                  permite que las sustancias se distribuyan rápidamente en la
                  sangre. Por último, la
                  <select
                    className={`border-2 mx-2 rounded-md ${borderColor4}`}
                    name="dropdown4"
                    onChange={handleDropdownChange}
                  >
                    <option value="0">Seleccione...</option>
                    <option value="1">Dérmica</option>
                    <option value="2">Inhalatoria</option>
                    <option value="3">Ingestión</option>
                    <option value="4">Parenteral</option>
                  </select>
                  es la entrada de sustancias a través de la boca, donde son
                  absorbidas por el sistema digestivo y transportadas a través
                  del tracto gastrointestinal hacia el torrente sanguíneo.
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

            {/* <div className="ctActivityDragDropFny">
              <h4>Correcto !!</h4>
            </div> */}
          </div>
        </div>

        <div className="col-lg-3 col-md-12 flex justify-center items-center">
          <img src={img2} />
        </div>
      </div>

      <div
        className="modal fade"
        id="sl06md01"
        tabIndex="-1"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">¿Sabías que?</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <p>
                Parenteral quiere decir que ingresa a nuestro cuerpo por una vía
                diferente a la digestiva
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
}

export default ViasIngresoSustancias;
