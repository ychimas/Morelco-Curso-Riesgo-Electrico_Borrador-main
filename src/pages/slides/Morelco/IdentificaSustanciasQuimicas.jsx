function IdentificaSustanciasQuimicas() {
  return (
    <div className="p-4">
      <div className="container current">
        <div className="col-lg-12 col-md-12">
          <div className="text-center my-8">
            <h1 className="text-title-size font-bold  text-main-color text-center">
              REFLEXIONEMOS
            </h1>
          </div>
          <section className="section-tours">
            <div className="text-center my-8">
              <h4 className="text-gray-500 mx-36 text-lg">
                Identifica cuál de estas SUSTANCIAS QUIMICAS es la que más ha
                causado accidentes en la operación en el SECTOR PETROLERO:
              </h4>
            </div>
            <div className="flex flex-col lg:flex-row lg:gap-2 justify-around mt-16">
              <div className=" p-4 flex-auto">
                <div className="card border border-gray-300 shadow-lg">
                  <div className="card__side card__side--front">
                    <div className="card__picture card__picture--1"></div>
                    <h4 className="card__heading">
                      <span className="card__heading-span card__heading-span--1"></span>
                    </h4>
                    <div className="card__details p-4">
                      <ul>
                        <li>Sulfuro de Hidrógeno</li>
                      </ul>
                    </div>
                  </div>
                  <div className="card__side card__side--back card__side--back-1">
                    <div className="card__cta">
                      <div className="card__price-box p-4 ">
                        <p className="card__price-value ">Correcto</p>
                        <p className="card__price-only ">
                          Gran inicio de curso
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className=" p-4 flex-auto">
                <div className="card border border-gray-300 shadow-lg">
                  <div className="card__side card__side--front">
                    <div className="card__picture card__picture--2"></div>
                    <h4 className="card__heading">
                      <span className="card__heading-span card__heading-span--2"></span>
                    </h4>
                    <div className="card__details p-4">
                      <ul>
                        <li>Vapores de hidrocarburos</li>
                      </ul>
                    </div>
                  </div>
                  <div className="card__side card__side--back card__side--back-2">
                    <div className="card__cta">
                      <div className="card__price-box p-4">
                        <p className="card__price-value">Incorrecto</p>
                        <p className="card__price-only">
                          Recuerda que el sistema de gestión FORUS se está
                          implementando en EMERALD ENERGY desde 2022 y buscar
                          que seamos una empresa altamente competitiva
                          internacionalmente
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className=" p-4 flex-auto">
                <div className="card border border-gray-300 shadow-lg">
                  <div className="card__side card__side--front">
                    <div className="card__picture card__picture--3"></div>
                    <h4 className="card__heading">
                      <span className="card__heading-span card__heading-span--3"></span>
                    </h4>
                    <div className="card__details p-4">
                      <ul>
                        <li>Nitrato de Amonio</li>
                      </ul>
                    </div>
                  </div>
                  <div className="card__side card__side--back card__side--back-3">
                    <div className="card__cta">
                      <div className="card__price-box p-4">
                        <p className="card__price-value">Incorrecto</p>
                        <p className="card__price-only">
                          Recuerda que el sistema de gestión FORUS se está
                          implementando en EMERALD ENERGY desde 2022 y buscar
                          que seamos una empresa altamente competitiva
                          internacionalmente
                        </p>
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

export default IdentificaSustanciasQuimicas;
