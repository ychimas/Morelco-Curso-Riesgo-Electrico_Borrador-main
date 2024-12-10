import "../../assets/css/cards.css";
import momento1 from "../../assets/img/slides/moment-1.png";
import momento2 from "../../assets/img/slides/moment-2.png";
import momento3 from "../../assets/img/slides/moment-3.png";

function EstructuraTematica() {
  return (
    <div className="px-4">
      <div className="container current">
        <div className="col-lg-12 col-md-12">
          <div className="text-center my-8">
            <h1 className="text-title-size font-bold text-secondary-color text-center">
              Estructura <span>temática</span>
            </h1>
          </div>
          <hr />
          <div>
            <p className="flex justify-center items-center py-2 px-6 rounded-lg my-6 mx-auto w-fit   italic text-p-size">
              Desplaza el mouse sobre cada imagen para ver su contenido
            </p>
          </div>

          <section className="section-tours">
            <div className="container bgazul-doble-lateral">
              <div className="row">
                <div className="col-lg-12 col-md-12 ">
                  <div className="contenido-central">
                    <div className="col-lg-12 col-md-12 pcslide-flex_sld3">
                      <div className="col-lg-4 col-md-6 col-sm-12">
                        <article className="card_new">
                          <img
                            className="card_new__background"
                            src={momento1}
                            alt="Momento 1"
                            width="1920"
                            height="2193"
                          />
                          <div className="card_new__content | flow">
                            <div className="card_new__content--container | flow">
                              <h2 className="card_new__title cardh2 text-white text-lg ">
                                1 - Recordemos qué es el Riesgo Químico
                                <br />y su regulación en Colombia
                              </h2>
                              <p className="card_new__description pt-4">
                                Momento 1
                              </p>
                            </div>
                          </div>
                        </article>
                      </div>
                      <div className="col-lg-4 col-md-6 col-sm-12">
                        <article className="card_new">
                          <img
                            className="card_new__background"
                            src={momento2}
                            alt="Momento 2"
                            width="1920"
                            height="2193"
                          />
                          <div className="card_new__content | flow">
                            <div className="card_new__content--container | flow">
                              <h2 className="card_new__title cardh2 ">
                                2- Apliquemos el SGA
                                <br />
                                (Sistema Globalmente Armonizado)
                              </h2>
                              <p className="card_new__description pt-4">
                                Momento 2
                              </p>
                            </div>
                          </div>
                        </article>
                      </div>

                      <div className="col-lg-4 col-md-6 col-sm-12">
                        <article className="card_new">
                          <img
                            className="card_new__background"
                            src={momento3}
                            alt="Momento 3"
                            width="1920"
                            height="2193"
                          />
                          <div className="card_new__content | flow">
                            <div className="card_new__content--container | flow">
                              <h2 className="card_new__title cardh2  px-4">
                                3 - Transporte de mercancías
                                <br />
                                peligrosas
                              </h2>
                              <p className="card_new__description pt-4">
                                Momento 3
                              </p>
                            </div>
                          </div>
                        </article>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default EstructuraTematica;
