import "../../assets/css/cards.css";

import momento1 from "../../assets/img/momentos/tematica_1.png";
import momento2 from "../../assets/img/momentos/tematica_2.png";
import momento3 from "../../assets/img/momentos/tematica_3.png";

import Title from '../components/Title.jsx'
import Instruction from '../components/Instruction.jsx'

import { useEffect } from 'react';
import useStore from '../../store';

function EstructuraTematica() {

  const setIsOnDivisor = useStore((state) => state.setIsOnDivisor);

  useEffect(() => {
    setIsOnDivisor(false);
  }, []);

  return (
    <div className="md:px-4 pr-5 md:pr-0 mx-auto mb-36 md:mb-0">
      <div className="container current">
        <div className="col-lg-12 col-md-12 pl-6">
          <div className="text-center my-8">
            <Title theme='light'>
              Estructura temática
            </Title>
          </div>
          <div className="w-fit mx-auto">
            <Instruction arrow='down' theme='light'>
              Desplaza el mouse sobre cada imagen para ver su contenido
            </Instruction>
          </div>

          <section className="section-tours ">
            <div className="container bgazul-doble-lateral ">
              <div className="row ">
                <div className="col-lg-12 col-md-12 sm:px-10">
                  <div className="w-full mx-0 px-0">
                    <div className="col-lg-12 col-md-12 px-0 mx-auto w-full sm:flex justify-start items-start ">
                      <div className="col-lg-4 col-md-6 col-sm-12 px-0 mx-0 ">
                        <article className="card_new h-[70vh] md:h-auto">
                          <img
                            className="card_new__background"
                            src={momento1}
                            alt="Momento 1"
                            width="1920"
                            height="2193"
                          />
                          <div className="card_new__content | flow">
                            <div className="card_new__content--container | flow">
                              <h2 className="card_new__title cardh2">
                                1 - La Energía en nuestro trabajo
                              </h2>
                              <p className="card_new__description pt-4 text-center">
                                Vamos a identificar los tipos de energía
                                existentes en nuestro trabajo, y la regulación
                                en Colombia
                              </p>
                            </div>
                          </div>
                        </article>
                      </div>
                      <div className="col-lg-4 col-md-6 col-sm-12">
                        <article className="card_new h-[70vh] md:h-auto my-12 md:my-0">
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
                                2- Principios del bloqueo y etiquetado (LOTO)
                              </h2>
                              <p className="card_new__description pt-4 text-center">
                                Recordaremos lconceptos clave de Energía CERO, y
                                el proceso y tipos de etiquetado clave.
                              </p>
                            </div>
                          </div>
                        </article>
                      </div>

                      <div className="col-lg-4 col-md-6 col-sm-12">
                        <article className="card_new h-[70vh] md:h-auto my-12 md:mt-0">
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
                                3 - Procedimiento de bloqueo y etiquetado (LOTO)
                              </h2>
                              <p className="card_new__description pt-4 text-center">
                                Revisemos el procedimiento de bloqueo y
                                etiquetado (LOTO)
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
