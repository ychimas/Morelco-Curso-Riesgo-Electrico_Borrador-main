import { useState } from "react";
import PropTypes from "prop-types";
import Draggable from "react-draggable";
import pairs1 from "../../assets/img/slides/pairs1.png";
import pairs2 from "../../assets/img/slides/pairs2.png";
import pairs3 from "../../assets/img/slides/pairs3.png";
import pairs4 from "../../assets/img/slides/pairs4.png";
import pairs5 from "../../assets/img/slides/pairs5.png";
import pairs6 from "../../assets/img/slides/pairs6.png";
import pairs7 from "../../assets/img/slides/pairs7.png";
import pairs8 from "../../assets/img/slides/pairs8.png";
import audio from "../../assets/audio/slide-25.mp3";

// Modal Component
const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h5 className="modal-title">Es clave</h5>
          <button className="btn-close" onClick={onClose} aria-label="Close">
            ×
          </button>
        </div>
        <div className="modal-body">
          <p>
            Una sustancia química puede estar asociada a más de un tipo de
            peligro clasificado por la SGA, para ello las tablas de
            clasificación te ayudarán a identificarlos.
          </p>
          <i className="inst mb-2">Escuchemos con atención este audio</i>
          <audio controls className="media-espanol">
            <source src={audio} type="audio/mp3" />
          </audio>
        </div>
      </div>
    </div>
  );
};

// Define PropTypes for Modal
Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

// Main Component
const SGADragAndDrop = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [droppedItems, setDroppedItems] = useState({
    act3_drop1: false,
    act3_drop2: false,
    act3_drop3: false,
    act3_drop4: false,
  });

  const handleModalOpen = () => setModalOpen(true);
  const handleModalClose = () => setModalOpen(false);

  const handleDrop = (dropId, dragId) => {
    setDroppedItems((prevState) => ({
      ...prevState,
      [dropId]: dragId,
    }));
  };

  const isCorrect = (dropId, dragId) => {
    // Define the correct pairs
    const correctPairs = {
      act3_drop1: "act3_drag1",
      act3_drop2: "act3_drag2",
      act3_drop3: "act3_drag3",
      act3_drop4: "act3_drag4",
    };
    return correctPairs[dropId] === dragId;
  };

  return (
    <div className="container  h-[80vh] ">
      <div className="col-md-12 col-lg-12">
        <h1 className="mb-2 text-title-size text-main-color mt-6 font-bold text-center">
          Tipos de riesgo químico
        </h1>
        <p className=" text-secondary-color text-center text-p-size my-8">
          En qué casos se debe etiquetar un producto o sustancia química
        </p>
        <button
          type="button"
          onClick={handleModalOpen}
          className="bg-main-color my-8 w-fit flex justify-center items-center rounded-full px-3 py-2 shadow-md shadow-main-color/40 mx-auto text-center btn-primary btn-lg track-element"
        >
          Es clave
        </button>
      </div>

      <div className="col-md-12 col-lg-12">
        <span className="indPagMb mt-3">
          <i className="inst mb-2 ind-27">
            Arrastra sobre las imágenes que hagan parejas
          </i>
        </span>
        <div className="grid-container-pairs">
          <div
            className="grid-item-pairs"
            id="act3_drop1"
            onDrop={(e) => {
              e.preventDefault();
              handleDrop("act3_drop1", e.dataTransfer.getData("text"));
            }}
            onDragOver={(e) => e.preventDefault()}
          >
            <img
              src={pairs1}
              alt="Pair 1"
              className={isCorrect("act3_drop1", droppedItems["act3_drop1"])}
            />
          </div>
          <div
            className="grid-item-pairs"
            id="act3_drop2"
            onDrop={(e) => {
              e.preventDefault();
              handleDrop("act3_drop2", e.dataTransfer.getData("text"));
            }}
            onDragOver={(e) => e.preventDefault()}
          >
            <img
              src={pairs2}
              alt="Pair 2"
              className={isCorrect("act3_drop2", droppedItems["act3_drop2"])}
            />
          </div>
          <div
            className="grid-item-pairs"
            id="act3_drop3"
            onDrop={(e) => {
              e.preventDefault();
              handleDrop("act3_drop3", e.dataTransfer.getData("text"));
            }}
            onDragOver={(e) => e.preventDefault()}
          >
            <img
              src={pairs3}
              alt="Pair 3"
              className={isCorrect("act3_drop3", droppedItems["act3_drop3"])}
            />
          </div>
          <div
            className="grid-item-pairs"
            id="act3_drop4"
            onDrop={(e) => {
              e.preventDefault();
              handleDrop("act3_drop4", e.dataTransfer.getData("text"));
            }}
            onDragOver={(e) => e.preventDefault()}
          >
            <img
              src={pairs4}
              alt="Pair 4"
              className={isCorrect("act3_drop4", droppedItems["act3_drop4"])}
            />
          </div>

          {/* Draggable */}
          <Draggable>
            <div
              className="grid-item-pairs"
              id="act3_drag1"
              draggable
              onDragStart={(e) => e.dataTransfer.setData("text", "act3_drag1")}
            >
              <img src={pairs7} alt="Draggable 1" />
            </div>
          </Draggable>
          <Draggable>
            <div
              className="grid-item-pairs"
              id="act3_drag2"
              draggable
              onDragStart={(e) => e.dataTransfer.setData("text", "act3_drag2")}
            >
              <img src={pairs6} alt="Draggable 2" />
            </div>
          </Draggable>
          <Draggable>
            <div
              className="grid-item-pairs"
              id="act3_drag3"
              draggable
              onDragStart={(e) => e.dataTransfer.setData("text", "act3_drag3")}
            >
              <img src={pairs5} alt="Draggable 3" />
            </div>
          </Draggable>
          <Draggable>
            <div
              className="grid-item-pairs"
              id="act3_drag4"
              draggable
              onDragStart={(e) => e.dataTransfer.setData("text", "act3_drag4")}
            >
              <img src={pairs8} alt="Draggable 4" />
            </div>
          </Draggable>
        </div>
      </div>

      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={handleModalClose} />
    </div>
  );
};

export default SGADragAndDrop;
