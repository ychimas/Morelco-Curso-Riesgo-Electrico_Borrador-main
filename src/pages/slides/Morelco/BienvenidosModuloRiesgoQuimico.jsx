import imgSlide2 from "../../assets/img/slides/m6slide2.png";
import rateUs from "../../assets/img/slides/rateus.png";

function BienvenidosModuloRiesgoQuimico() {
  return (
    <>
      <div className="flex flex-col md:flex-row ">
        {/* Left Column */}
        <div className="md:flex-1 bg-slate-900 md:w-1/2 w-full h-screen py-6 px-24  flex-col justify-center items-center">
          <div className="flex justify-center items-center gap-3 ">
            {/* <span className="text-main-color font-bold my-auto">__</span> */}
            {/* <h2 className="text-gray-500 font-semibold tracking-wide">
            ACTIVIDAD INTERACTIVA
          </h2> */}
          </div>
          <div className=" h-[90vh] my-auto flex flex-col justify-center items-center">
            <h1 className="text-white text-center font-bold text-title-size mt-6">
              Bienvenidos al módulo de
            </h1>
            <h1 className="text-white text-center font-bold text-title-size mb-6">
              Prevención y Control del
            </h1>
            <h1 className="text-secondary-color text-center font-bold text-title-size mb-6">
              Riesgo Químico
            </h1>
            <p className="text-center text-p-size mx-12">
              Bienvenidos a este módulo virtual, en el cual queremos
              sensibilizar a los responsables del manejo de sustancias químicas
              en nuestra operación, acerca del buen uso y aplicación del SGA
              (sistema Globalmente Armonizado) para una correcta manipulación de
              las sustancias químicas más usadas en nuestros procesos.
              Recordaremos la regulación que nos rige en Colombia, y las
              recomendaciones para un correcto transporte de mercancías
              peligrosas dentro y fuera de nuestra operación.
            </p>
            <button
              id="actividad_1"
              className="text-white px-6 py-2 rounded-full mt-10 mx-auto track-element shadow-lg  bg-secondary-color"
              data-bs-toggle="modal"
              data-bs-target="#surveymd01"
            >
              Votemos
            </button>
          </div>
        </div>

        {/* Right Column */}
        <div className="md:flex-2 bg-white md:w-1/2 w-full px-10 md:pr-20 flex mx-auto justify-center items-center pb-24">
          <div className="flex flex-col justify-center items-center p-6 gap-4 h-[50vh] max-w-[70%] mx-auto ">
            {/* </div> */}
            <div className="image-container">
              <img
                src={imgSlide2}
                alt="sample67"
                className="animated-image pt-4"
              />
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="surveymd01"
        tabIndex="-1"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Votemos</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <i className="inst mb-2">
                Haga clic en las estrellas para participar en la encuesta
              </i>
              <div className="row">
                <div className="col-md-6 col-sm-6">
                  <h4>
                    Qué tan alto consideras el nivel de RIESGO QUIMICO en tus
                    tareas diarias?
                  </h4>
                  <br />
                  <h1 style={{ fontSize: "25px" }}>
                    <strong>SISTEMA DE VOTACIÓN</strong>
                  </h1>
                  <div className="rating">
                    <input
                      type="radio"
                      name="estrellas"
                      id="estrella1"
                      value="1"
                    />
                    <label htmlFor="estrella1"></label>
                    <input
                      type="radio"
                      name="estrellas"
                      id="estrella2"
                      value="2"
                    />
                    <label htmlFor="estrella2"></label>
                    <input
                      type="radio"
                      name="estrellas"
                      id="estrella3"
                      value="3"
                    />
                    <label htmlFor="estrella3"></label>
                    <input
                      type="radio"
                      name="estrellas"
                      id="estrella4"
                      value="4"
                    />
                    <label htmlFor="estrella4"></label>
                    <input
                      type="radio"
                      name="estrellas"
                      id="estrella5"
                      value="5"
                    />
                    <label htmlFor="estrella5"></label>
                  </div>
                  <br />
                  <p className="resultado"></p>
                </div>
                <div className="col-md-6 col-sm-6">
                  <img src={rateUs} alt="Rate Us" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BienvenidosModuloRiesgoQuimico;
