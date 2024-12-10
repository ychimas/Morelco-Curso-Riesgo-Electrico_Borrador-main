import { useEffect } from "react";
import cilynderOillabelSmall from "../../assets/img/slides/cilynder-oillabel_small.png";
import cilynderOillabelFull from "../../assets/img/slides/cilynder-oillabel_full.png";
import $ from "jquery";
import "../../assets/js/magnify/css/magnify.css";

function EtiquetasSGA() {
  useEffect(() => {
    // Inicializa el plugin de magnificación después de que el componente se monte
    // eslint-disable-next-line no-undef
    if ($.fn.magnify) {
      $(".zoom").magnify();
    } else {
      console.error("Magnify plugin is not loaded");
    }
  }, []);
  return (
    <div className="container h-[80vh]">
      <div>
        <span className="indPagMb">
          <i className="inst my-4 ind-27">
            Hacer zoom sobre el área de la etiqueta
          </i>
        </span>
      </div>
      <div className="flex justify-center h-full items-center gap-36 ">
        <div className="col-md-12 col-lg-3 ">
          <h1 className="text-title-size text-center  text-main-color font-bold">
            Conozcamos las etiquetas del SGA
          </h1>
          <hr className="hr-27 mt-8" />
          <p className="text-secondary-color text-center text-p-size mt-8">
            De acuerdo con tu experiencia, etiqueta para cada caso los 2 riesgos
            químicos que mejor apliquen:
          </p>
        </div>
        <div className="w-fit">
          <img
            className="mx-auto mb-3 zoom img-zomm"
            src={cilynderOillabelSmall}
            data-magnify-src={cilynderOillabelFull}
            alt="Etiqueta del cilindro de aceite"
          />
        </div>
      </div>
    </div>
  );
}

export default EtiquetasSGA;
