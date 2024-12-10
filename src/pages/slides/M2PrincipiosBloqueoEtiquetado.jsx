import imageCarl from "../../assets/img/slides/M1-Carl.png";
import riesgoAudio from "../../assets/audio/sld9_momento2.mp3";

function M2PrincipiosBloqueoEtiquetado({ backgroundColor = "#005abb" }) {
  return (
    <div className="container -z-10 slider02 relative min-h-screen p-0 m-0">
      <div
        className="absolute  inset-0 bg-cover bg-slate-900  bg-center w-full"
        style={{
          // backgroundColor: `${backgroundColor}`,
          width: "100vw",
          height: "100%",
        }}
      >
        <div className="container dividerBg">
          <div className="row mx-auto">
            <div className="col-md-12 col-lg-6 flex flex-col justify-center items-center h-[90vh]">
              <img className="mx-auto my-auto h-[80%] w-[80%]" src={imageCarl} />
            </div>
            <div className="col-lg-5 col-md-12 h-[90vh] flex flex-col justify-center items-center gap-4">
              <h1 className="text-white text-3xl font-bold">
                M2- Principios del Bloqueo y etiquetado (LOTO)
              </h1>
              <hr style={{width: '100%', border: '1px solid white'}}/>
              <h4 className="text-white text-xl">
              Recordaremos conceptos clave de <span className="text-secondary-color">Energía CERO,</span> y el proceso y tipos de etiquetado clave.
              </h4>
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

export default M2PrincipiosBloqueoEtiquetado;
