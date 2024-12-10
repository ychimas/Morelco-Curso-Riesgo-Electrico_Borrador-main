/* eslint-disable react/prop-types */
import imageCarl from "../../assets/img/slides/1portadacarl1.png";
import riesgoAudio from "../../assets/audio/Slide4RiesgoQuimico.mp3";

function QueEsRiesgoQuimico({ backgroundColor = "#005abb" }) {
  return (
    <div className="container -z-10 slider02 relative min-h-screen p-0 m-0">
      <div
        className="absolute  inset-0 bg-cover bg-center w-full"
        style={{
          backgroundColor: `${backgroundColor}`,
          width: "100vw",
          height: "100%",
        }}
      >
        <div className="container dividerBg">
          <div className="row mx-auto ">
            <div className="col-md-12 col-lg-4 ml-24 flex flex-col justify-center items-center h-[90vh]">
              <img className="mx-auto my-auto" src={imageCarl} />
            </div>
            <div className="col-lg-1 col-md-12"></div>
            <div className="col-lg-5 col-md-12 h-[90vh] flex flex-col justify-center items-center gap-4">
              <h1 className="text-white text-3xl font-bold">
                1- ¿Qué es el riesgo químico?
              </h1>
              <h4 className="text-white text-center mt-8 text-xl">
                Recordemos que el{" "}
                <span className="text-secondary-color">riesgo químico </span> es
                la probabilidad de que una o varias sustancias químicas desaten
                eventos que terminen en daños relacionados con la Salud de las
                personas, afectación al medio ambiente, deterioro de las
                instalaciones o espacios físicos.{" "}
              </h4>
              <br />
              <br />
              <audio controls className="media-espanol">
                <source src={riesgoAudio} type="audio/mp3" />
              </audio>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QueEsRiesgoQuimico;
