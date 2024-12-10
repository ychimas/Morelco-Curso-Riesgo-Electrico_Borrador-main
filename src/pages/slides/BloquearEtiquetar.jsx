/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import { useState } from "react";
import { faCheck, faMapPin, faPaperclip, faRotate } from "@fortawesome/free-solid-svg-icons";
import Button from "../components/Button.jsx";
import "../../assets/css/style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../assets/css/switch.css";
import { DndContext, useSensor, useSensors, MouseSensor } from "@dnd-kit/core";
import { useDroppable, useDraggable } from "@dnd-kit/core";
import "@fortawesome/fontawesome-free/css/all.min.css";
import imgLotoL1 from "../../../src/assets/img/act_loto/Loto-L-1.jpg";
import imgLotoO2 from "../../../src/assets/img/act_loto/Loto-O-2.jpg";
import imgLotoT3 from "../../../src/assets/img/act_loto/Loto-T-3.jpg";
import imgLotoO4 from "../../../src/assets/img/act_loto/Loto-O-4.jpg";
import imgTrue from "../../assets/img/checkAct.png"; 
import imgFalse from "../../assets/img/xmarkAct.png";
import Subtitle from '../components/Subtitle.jsx'
import Instruction from '../components/Instruction.jsx'

import useStore from "../../store";
import { useEffect } from "react";
const DraggableItem = ({ id, imgSrc, isDropped }) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id,
  });

  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
        transition: 'none',  // Para hacer el movimiento más fluido
      }
    : undefined;

  if (isDropped) {
    return null;
  }

  return (
    <li
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      style={{
        ...style,
        width: '100px',
        height: '100px',
        listStyle: 'none',
        cursor: 'grab',
      }}
    >
      <img src={imgSrc} alt="Loto item" className="w-24 h-24 object-contain" />
    </li>
  );
};

const DropZone = ({ id, item, verificationImage }) => {
  const { setNodeRef } = useDroppable({
    id,
  });

  return (
    <div
      ref={setNodeRef}
      style={{ backgroundColor: '#ebebeb', position: 'relative' }}
      className="border-2 border-dashed border-main-color/60 h-24 w-24 flex justify-center items-center"
    >
      {/* Mostrar el contenido del item si existe */}
      {item ? (
        <img
          src={item.imgSrc}
          alt="Loto item"
          className="w-full h-full object-contain"
          style={{ margin: 0 }}
        />
      ) : (
        // Mostrar el texto "Arrastre aquí" si no hay item
        <span className="text-gray-500 text-xs">Arrastre aquí</span>
      )}
      
      {/* Mostrar la imagen de verificación si existe */}
      {verificationImage && (
        <img
          src={verificationImage}
          alt="Verification result"
          className="absolute w-12 h-12"
        />
      )}
    </div>
  );
};

function BloquearEtiquetar() {
  const [items, setItems] = useState([
    { id: 'item-1', imgSrc: imgLotoO2, value: 'O', isDropped: false },
    { id: 'item-2', imgSrc: imgLotoT3, value: 'T', isDropped: false },
    { id: 'item-3', imgSrc: imgLotoO4, value: 'O', isDropped: false },
    { id: 'item-4', imgSrc: imgLotoL1, value: 'L', isDropped: false },
  ]);

  const [dropZones, setDropZones] = useState([
    { id: "drop-1", item: null, verificationImage: null },
    { id: "drop-2", item: null, verificationImage: null },
    { id: "drop-3", item: null, verificationImage: null },
    { id: "drop-4", item: null, verificationImage: null },
  ]);


  const [verificationMessage, setVerificationMessage] = useState('');

  const setIsOnDivisor = useStore((state) => state.setIsOnDivisor);

  useEffect(() => {
    setIsOnDivisor(false);
  }, []);
  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);


  const sensors = useSensors(
    useSensor(MouseSensor, {
      activationConstraint: {
        distance: 10,  // Ayuda a suavizar el arrastre
      },
    })
  );

  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (over) {
      const targetZone = dropZones.find((zone) => zone.id === over.id);

      // Verificar si la zona de drop ya tiene un elemento
      if (targetZone.item) {
        return;  // Si ya tiene un ítem, no permitimos que se dropee otro
      }

      const newItems = items.map((item) =>
        item.id === active.id ? { ...item, isDropped: true } : item
      );

      const newDropZones = dropZones.map((zone) =>
        zone.id === over.id ? { ...zone, item: items.find((i) => i.id === active.id) } : zone
      );

      setItems(newItems);
      setDropZones(newDropZones);
    }
  };

  const verifyOrder = () => {
    const correctOrder = ["L", "O", "T", "O"];
    const currentOrder = dropZones.map((zone) => zone.item ? zone.item.value : "");
    
    const newDropZones = dropZones.map((zone, index) => {
      if (!zone.item) return zone;

      // Verificar si el item es correcto
      const isCorrect = zone.item.value === correctOrder[index];
      return {
        ...zone,
        verificationImage: isCorrect ? imgTrue : imgFalse,
      };
    });

    setDropZones(newDropZones);

    const isCorrect = JSON.stringify(currentOrder) === JSON.stringify(correctOrder);
    setVerificationMessage(isCorrect ? '¡Acertaste, orden correcto!' : '¡Orden incorrecto, inténtalo de nuevo!');
  };

  const resetActivity = () => {
    setDropZones(dropZones.map((zone) => ({ ...zone, item: null, verificationImage: null })));
    setItems([
      { id: 'item-1', imgSrc: imgLotoO2, value: 'O', isDropped: false },
      { id: 'item-2', imgSrc: imgLotoT3, value: 'T', isDropped: false },
      { id: 'item-3', imgSrc: imgLotoO4, value: 'O', isDropped: false },
      { id: 'item-4', imgSrc: imgLotoL1, value: 'L', isDropped: false },
    ]);

    // Limpiar el mensaje de verificación
    setVerificationMessage('');
  };

  return (
    <DndContext sensors={sensors} onDragEnd={handleDragEnd}>
      <div className="flex flex-col md:flex-row">
        {/* Left Column */}
        <div className="md:flex-1 bg-slate-900 md:w-1/2 w-full sm:h-screen py-6 px-2 sm:px-24 flex-col justify-center items-center">
          <div className="md:h-[90vh] my-auto flex flex-col justify-center items-center">
            <h1 className="text-white text-center font-bold text-title-size mt-6">
              ¿Bloquear o Etiquetar…?
            </h1>
              <Subtitle>
              ¡Las dos (2) cosas!
              </Subtitle>

            <p className=" text-gray-300 text-p-size md:mx-24 my-3 mb-3 text-justify">
              Bloqueo / Etiquetado (LOTO por sus siglas en inglés: Lock Out Tag Out) se refiere a prácticas y procedimientos secuenciales específicos para proteger la seguridad de los empleados de la activación o inicio inesperado de máquinas y equipo.
            </p>
          </div>
        </div>

        {/* Right Column */}
        <div className="md:flex-2 bg-white md:w-1/2 w-full md:h-screen px-10 md:pr-20 flex mx-auto justify-center items-center pb-24">
          <div className="flex flex-col justify-center   items-center p-6 gap-4  sm:h-[90vh] max-w-[100%] mx-auto md:mt-36 sm:mt-5">
            <Instruction theme='light' arrow='down'>

              Organiza las letras en el orden correcto:
            </Instruction>

            <div className="flex md:hidden flex-col lg:flex-row justify-center items-center gap-2 sm:gap-24">
            <Button roundedFull={true} onClick={verifyOrder} icon={faCheck}>
              Validar
            </Button>
            <Button roundedFull={true} icon={faRotate} onClick={resetActivity}>
              Reiniciar
            </Button>
          </div>

            <div className="center-actividad mx-0">
              {/* Drop Zones */}
              <div className="grid grid-cols-2 gap-4 mt-12 mx-auto md:grid-cols-4 md:gap-4 mb-4">
                {dropZones.map((zone) => (
                  <DropZone key={zone.id} id={zone.id} item={zone.item} verificationImage={zone.verificationImage} />
                ))}
              </div>

              {/* Draggable Items */}
              <ul className="actOrderElement flex md:gap-2 mb-4" id="actOrderElement">
                {items.map((item) => (
                    <DraggableItem key={item.id}  id={item.id} imgSrc={item.imgSrc} isDropped={item.isDropped} />
                ))}
              </ul>

              {/* Botones de acción */}
              <div className="pc-slideflex hidden md:block">
                <button
                  className="flex justify-center items-center group bg-main-color rounded-full px-4 py-2 shadow-main-color text-white mx-auto my-6"
                  style={{ marginRight: "-5px" }}
                  onClick={verifyOrder}
                >
                  <i className="fa fa-check icono-bold"></i> Verificar
                </button>
                <button
                  className="flex justify-center items-center group bg-main-color rounded-full px-4 py-2 shadow-main-color text-white mx-auto my-6"
                  style={{ marginLeft: "20px" }}
                  onClick={resetActivity}
                >
                  <i className="fa fa-repeat icono-bold"></i> Reiniciar
                </button>
              </div>

              {/* Mostrar mensaje de verificación */}
              {verificationMessage && (
                <div style={{fontSize: '16px'}}
                  className={`text-lg font-bold my-2 text-center ${
                    verificationMessage === '¡Acertaste, orden correcto!'
                      ? 'text-[#4CAF50]'  // Clase para el texto en verde
                      : 'text-[#F44336]'  // Clase para el texto en color existente
                  }`}
                >
                  {verificationMessage}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </DndContext>
  );
}

export default BloquearEtiquetar;
