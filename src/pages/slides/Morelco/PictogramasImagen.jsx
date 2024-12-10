import Slide9_1 from "../../assets/img/slides/ghspictogram.png";
import chemRiskImage from "../../assets/img/slides/chemrisk.png";
import Slide9_audio1 from "../../assets/audio/slide9SGA.mp3";

function PictogramasImagen() {
  return (
    <div className="container -z-10 slider02 relative min-h-screen p-0 m-0">
      <div
        className="absolute  inset-0 bg-cover bg-center w-full"
        style={{
          // backgroundColor: `${backgroundColor}`,
          backgroundImage: `url(${chemRiskImage})`,
          width: "100vw",
          zIndex: "-10",
          height: "100%",
        }}
      >
        <div className="container dividerImg ">
          <div className="row mx-auto ">
            <div className="col-lg-5 col-md-12 bg-whitespace rounded-lg my-auto">
              <h1 className="text-main-color text-title-size text-center font-bold py-4">
                Pictogramas y representación de los peligros en las sustancias
                químicas
              </h1>
              <h4 className="mb-6 text-center text-p-size text-secondary-color">
                El SGA utiliza <span>pictogramas de peligro</span> que consisten
                en un símbolo negro sobre un fondo blanco con un marco rojo en
                forma de rombo, como el que aparece a continuación:{" "}
              </h4>
              <div className="mt-12">
                <audio controls className="media-espanol mx-auto">
                  <source src={Slide9_audio1} type="audio/mp3" />
                </audio>
              </div>
            </div>
            <div className="col-lg-1 col-md-12"></div>
            <div className="col-md-12 col-lg-6 my-auto">
              <img className="mx-auto mb-3" src={Slide9_1} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PictogramasImagen;
