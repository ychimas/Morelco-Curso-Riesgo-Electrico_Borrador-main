import audio1 from "../../../assets/audio/colombia_descripcion.mp3";
import { useEffect } from 'react';
import useStore from '../../../store';
import Title from '../../components/Title.jsx'
import Paragraph from '../../components/Paragraph.jsx'
import Instruction from '../../components/Instruction.jsx'

function RegulacionRiesgoQuimico() {

  const setIsOnDivisor = useStore((state) => state.setIsOnDivisor);

  useEffect(() => {
    setIsOnDivisor(false);
  }, []);
  return (
    <div className="container flex justify-center items-center sm:h-[80vh] mb-36 md:mb-0">
      <div className="row mx-auto">
        <div className="col-lg-12 col-md-12 text-center mb-30">
          <Title theme="light">
            Regulación de riesgos eléctricos en Colombia
          </Title>
          <div className="my-3"></div>
          <Paragraph theme="light">
            Recordemos que todas las normas y regulaciones establecidas, se han
            desarrollado para proteger la integridad de los trabajadores y las
            empresas, conozcamos las principales:
          </Paragraph>
          <div className="w-fit mx-auto">
            <Instruction theme="light" arrow="down">
              Haz clic sobre el audio
            </Instruction>
          </div>
          <audio controls className="media-espanol mx-auto mt-1">
            <source src={audio1} type="audio/mp3" />
          </audio>
        </div>
        <div className="col-lg-12 col-md-12 text-center mt-4">
          <div className="horizontal-timeline">
            <ul className="list-inline items mb-3 contenedor-center mt-6">
              <li className="list-inline-item items-list">
                <div className="px-2">
                  <div className="badge px-4 py-2 text-xl mb-2 bg-main-color">
                    2018
                  </div>
                  <p className="text-muted">
                    Resolución 1348
                    <br />
                    de 2009
                  </p>
                </div>
              </li>
              <li className="list-inline-item items-list">
                <div className="px-2">
                  <div className="badge px-4 py-2 text-xl mb-2 bg-main-color ">
                    2019
                  </div>
                  <p className="text-muted">
                    resolucion 5018
                    <br />
                    de 2019
                  </p>
                </div>
              </li>
              <li className="list-inline-item items-list">
                <div className="px-2">
                  <div className="badge px-4 py-2 text-xl mb-2 bg-main-color ">
                    RETIE
                  </div>
                  <p className="text-muted">
                    Basado en la
                    <br />
                    Norma NFPA 70
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegulacionRiesgoQuimico;
