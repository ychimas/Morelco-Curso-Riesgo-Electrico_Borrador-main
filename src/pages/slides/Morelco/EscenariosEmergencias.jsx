/* eslint-disable react/prop-types */
import imgDerrames from "../../assets/img/slides/derrames.jpg";
import imgConatoIncendios from "../../assets/img/slides/conato_incendio.jpg";
import imgReaccionNoDeseada from "../../assets/img/slides/reaccion_no_deseada.jpg";
import imgRobo from "../../assets/img/slides/robo.jpg";
import imgEmergenciaSalud from "../../assets/img/slides/emergencias_salud.jpg";
import audioDerrame from "../../assets/audio/slide_16_derrames.mp3";
import audioConatoIncendio from "../../assets/audio/slide_16_incendios.mp3";
import audioReaccionNoDeseada from "../../assets/audio/slide_16_reacciones.mp3";
import audioRobo from "../../assets/audio/slide_16_robo.mp3";
import audioEmergenciaSalud from "../../assets/audio/slide_16_emergencia.mp3";

function EscenariosEmergencias() {
  return (
    <div className="container h-[80vh] flex justify-center items-center">
      <div className="row">
        <div className="row">
          <div className="col-lg-12 col-md-12 mt-3 ml-5">
            <h1 className="text-title-size text-center mb-8 text-main-color font-bold">
              Escenarios de EMERGENCIAS con productos químicos
            </h1>
            <p className="text-center text-p-size px-36 mb-12">
              Veamos los escenarios de emergencia que pueden ocurrir en nuestra
              operación y cómo gestionarlos en caso de que ocurran:
            </p>
            <i className="inst block text-center text-gray-400">
              Haz clic sobre los elementos para conocer más
            </i>
          </div>
          <br />
          <div className="container-scene center-scene">
            <div
              className="box-scene"
              data-bs-toggle="modal"
              data-bs-target="#modal_derrame"
              style={{
                cursor: "pointer",
                background: "linear-gradient(to bottom, #8BC34A, #4CAF50)",
              }}
            >
              <img src={imgDerrames} alt="Derrames" />
              <h3>Derrames</h3>
            </div>
            <div
              className="box-scene"
              data-bs-toggle="modal"
              data-bs-target="#modal_incendios"
              style={{
                cursor: "pointer",
                background: "linear-gradient(to bottom, #CDDC39, #8BC34A)",
              }}
            >
              <img src={imgConatoIncendios} alt="Conatos de incendio" />
              <h3>Conatos de incendio</h3>
            </div>
            <div
              className="box-scene"
              data-bs-toggle="modal"
              data-bs-target="#modal_reacciones"
              style={{
                cursor: "pointer",
                background: "linear-gradient(to bottom, #FFEB3B , #CDDC39)",
              }}
            >
              <img src={imgReaccionNoDeseada} alt="Reacciones no deseadas" />
              <h3>Reacciones no deseadas</h3>
            </div>
            <div
              className="box-scene"
              data-bs-toggle="modal"
              data-bs-target="#modal_robo"
              style={{
                cursor: "pointer",
                background: "linear-gradient(to bottom, #FFEB3B, #FFC107)",
              }}
            >
              <img src={imgRobo} alt="Robo" />
              <h3>Robo</h3>
            </div>
            <div
              className="box-scene"
              data-bs-toggle="modal"
              data-bs-target="#modal_emergencias"
              style={{
                cursor: "pointer",
                background: "linear-gradient(to bottom, #FFC107, #FF9800)",
              }}
            >
              <img src={imgEmergenciaSalud} alt="Emergencias de salud" />
              <h3>Emergencias de salud</h3>
            </div>
          </div>
        </div>

        <Modal
          id="modal_derrame"
          title="Derrames"
          audioEs={audioDerrame}
          audioEn={audioDerrame}
        >
          <p>
            {" "}
            Al enterarse de la emergencia active modo manual en las estaciones o
            viva voz. Por favor notifique al operador de producción,
            especialista sistema emergencias. Para más información consulte el
            PON (Procedimiento Operativo Normalizado) de Control de Derrames.
          </p>
        </Modal>

        <Modal
          id="modal_incendios"
          title="Conato de incendio"
          audioEs={audioConatoIncendio}
          audioEn={audioConatoIncendio}
        >
          <p>
            {" "}
            En caso de conato de incendio notifique al especialista sistema
            emergencia y active la brigada emergencia. Para más información
            consulte el PON (Procedimiento Operativo Normalizado) de Control de
            Incendios
          </p>
        </Modal>

        <Modal
          id="modal_reacciones"
          title="Reacciones no deseadas"
          audioEs={audioReaccionNoDeseada}
          audioEn={audioReaccionNoDeseada}
        >
          <p>
            Avise al contratista dueño de los productos para que activen sus
            PON&apos;s según su Plan de Emergencias.
          </p>
        </Modal>

        <Modal
          id="modal_robo"
          title="Robo"
          audioEs={audioRobo}
          audioEn={audioRobo}
        >
          <p>
            {" "}
            Siga las recomendaciones del Coordinador de Seguridad Física y los
            protocolos definidos.
          </p>
        </Modal>

        <Modal
          id="modal_emergencias"
          title="Emergencias de salud"
          audioEs={audioEmergenciaSalud}
          audioEn={audioEmergenciaSalud}
        >
          <p>
            {" "}
            Realice activación de alarma modo manual estaciones o viva voz. Por
            favor notifique al especialista sistema emergencia y active brigada
            emergencia. Para más información consulte el PON (Procedimiento
            Operativo Normalizado) de Primeros Auxilios.
          </p>
        </Modal>
      </div>
    </div>
  );
}

const Modal = ({ id, title, children, audioEs }) => {
  return (
    <div className="modal fade" id={id} tabIndex="-1" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{title}</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            {children}
            <i className="inst mt-2">Haz clic para conocer más</i>
            <br />
            <audio controls className="media-espanol">
              <source src={audioEs} type="audio/mpeg" />
            </audio>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EscenariosEmergencias;
