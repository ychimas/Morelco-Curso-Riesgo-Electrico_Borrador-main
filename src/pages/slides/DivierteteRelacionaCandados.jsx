/* eslint-disable react/prop-types */
import { DndContext, useDraggable, useDroppable } from "@dnd-kit/core";
import { useState, useEffect } from "react";
import { faCheck, faRotate } from "@fortawesome/free-solid-svg-icons";
import useStore from "../../store";
import { Typography } from "@mui/material";
import imgNoOlvides from "../../assets/img/botones/no-olvides-color.png";
import img1 from "../../assets/img/candado-repuesta-3.jpg";
import img1Check from "../../assets/img/candado-repuesta-3-ok.jpg";
import img1Mal from "../../assets/img/candado-repuesta-3-x.jpg";
import img2 from "../../assets/img/candado-repuesta-4.jpg";
import img2Check from "../../assets/img/candado-repuesta-4-ok.jpg";
import img2Mal from "../../assets/img/candado-repuesta-4-x.jpg";
import img3 from "../../assets/img/candado-repuesta-5.jpg";
import img3Check from "../../assets/img/candado-repuesta-5-ok.jpg";
import img3Mal from "../../assets/img/candado-repuesta-5-x.jpg";
import img4 from "../../assets/img/candado-repuesta-2.jpg";
import img4Check from "../../assets/img/candado-repuesta-2-ok.jpg";
import img4Mal from "../../assets/img/candado-repuesta-2-x.jpg";
import img5 from "../../assets/img/candado-repuesta-1.jpg";
import img5Check from "../../assets/img/candado-repuesta-1-ok.jpg";
import img5Mal from "../../assets/img/candado-repuesta-1-x.jpg";
import audioRecuerdaCandados from "../../assets/audio/recuerda_candados.mp3";
import Instruction from "../components/Instruction.jsx";
import Button from "../components/Button.jsx";

const imagesList = [
  {
    id: 1,
    src: img1,
  },
  {
    id: 2,
    src: img2,
  },
  {
    id: 3,
    src: img3,
  },
  {
    id: 4,
    src: img4,
  },
  {
    id: 5,
    src: img5,
  },
];

const options = [
  { value: "1", label: "Bloqueo de sistema eléctrico" },
  { value: "2", label: "Bloqueo de sistema de válvulas" },
  { value: "3", label: "Bloqueo de escaleras y equipos" },
  { value: "4", label: "Bloqueo de instrumentos" },
  { value: "5", label: "Equipos contratistas" },
];
// Componente Draggable Item con @dnd-kit/core
const DraggableItem = ({ item }) => {
  const { attributes, listeners, setNodeRef, transform, isDragging } =
    useDraggable({ id: item.id });

  const style = {
    transform: transform
      ? `translate3d(${transform.x}px, ${transform.y}px, 0)`
      : "none",
    cursor: isDragging ? "pointer" : "pointer",
    width: "250px",
    height: "100px",
    listStyle: "none",
    transition: isDragging ? "none" : "transform 0.2s",
  };

  return (
    <li
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      className={`ui-state-default`}
    >
      <div
        style={{ fontSize: "16px", lineHeight: "1.3em", fontWeight: "normal" }}
        className="text-center text-white bg-secondary-color rounded-md p-2"
      >
        {item.content}
      </div>
    </li>
  );
};

// Componente Drop Zone
const DropZone = ({ zone, onDropItem, verified }) => {
  const { setNodeRef, isOver } = useDroppable({ id: zone.id });

  // Usar verified para aplicar los colores después de la verificación
  const backgroundColor = zone.correct
    ? "#4CAF50" 
    : verified
    ? "#F44336" // Solo se vuelve rojo después de la verificación
    : "#ebebeb"; // Si no se ha verificado, se mantiene el color base

  const textColor = zone.correct || zone.item ? "#666" : "#FFFFFF";
  const borderColor = isOver
    ? "#4CAF50"
    : verified && zone.correct
    ? "#4CAF50"
    : verified && !zone.correct
    ? "#F44336"
    : "#ccc"; // Solo cambia después de la verificación

  return (
    <div
      ref={setNodeRef}
      style={{
        backgroundColor,
        border: `2px dashed ${borderColor}`,
        borderRadius: "12px",
        height: "180px",
        width: "270px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        color: textColor,
        boxShadow: `0 4px 12px rgba(0, 0, 0, 0.1)`,
        transition: "all 0.3s ease-in-out",
        padding: "16px",
        cursor: "pointer",
      }}
    >
      {zone.item ? (
        <>
          <div style={{
            position: "absolute", 
            top: "-25px", 
            display: "flex", 
            alignItems: "center",
            gap: "8px"
          }}></div>
          <div style={{ textAlign: "center", marginTop: "20px", fontSize: "16px", fontWeight: "500" }}>
            {zone.item.content}
          </div>
          <p style={{
            marginTop: "10px", 
            fontSize: "14px", 
            textAlign: "center", 
            fontWeight: "400", 
            color: "#333"
          }}>
            {zone.correct
              ? "¡Desplazaste correctamente la opción!"
              : verified
              ? "No es la opción correcta. ¡Inténtalo de nuevo!"
              : ""}
          </p>
        </>
      ) : (
        <p style={{
          fontSize: "16px", 
          color: "#888", 
          fontWeight: "400", 
          textAlign: "center"
        }}>
          Arrastra aquí
        </p>
      )}
    </div>
  );
};


function DivierteteRelacionaCandados() {
  const [isResetDisabled, setIsResetDisabled] = useState(true);
  const [orderValidation, setOrderValidation] = useState("");
  const [isCorrect, setIsCorrect] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [summary, setSummary] = useState("");
  const [borderColors, setBorderColors] = useState(
    Array(5).fill("border-main-color/50")
  );
  const [dropdowns, setDropdowns] = useState(Array(5).fill("0"));
  // const [selectedItems, setSelectedItems] = useState([])
  // const [combinedItems, setCombinedItems] = useState(imagesList.map((image) => ({ ...image, selectedValue: "0" })))
  const [selectedItems, setSelectedItems] = useState(
    Array(imagesList.length).fill({ selectedValue: "0" })
  );
  const [items, setItems] = useState([
    { id: "item-1", content: "Bloqueo de sistema eléctrico", value: "1" },
    { id: "item-2", content: "Bloqueo de sistema de válvulas", value: "2" },
    { id: "item-3", content: "Bloqueo de escaleras y equipos", value: "3" },
    { id: "item-4", content: "Bloqueo de instrumentos", value: "4" },
    { id: "item-5", content: "Equipos contratistas", value: "5" },
  ]);

  const [dropZones, setDropZones] = useState([
    { id: "drop-1", item: null, correct: false },
    { id: "drop-2", item: null, correct: false },
    { id: "drop-3", item: null, correct: false },
    { id: "drop-4", item: null, correct: false },
    { id: "drop-5", item: null, correct: false },
  ]);
  const setIsOnDivisor = useStore((state) => state.setIsOnDivisor);

  const handleDropdownChange = (index, value) => {
    // const newSelectedItems = [...selectedItems];
    // newSelectedItems[index] = value;
    // console.log(newSelectedItems);
    // setSelectedItems(newSelectedItems);
    const newDropdowns = [...dropdowns];
    newDropdowns[index] = value;
    setDropdowns(newDropdowns);
    // Verificamos si al menos una opción es diferente de "0" para habilitar el botón
    if (newDropdowns.some((val) => val !== "0")) {
      setIsResetDisabled(false); // Habilitar el botón si al menos una opción está seleccionada
    } else {
      setIsResetDisabled(true); // Deshabilitar el botón si no hay opciones seleccionadas
    }
  };

  const getFilteredOptions = (index) => {
    const selectedValues = dropdowns.filter((_, i) => i !== index);
    return options.filter((option) => !selectedValues.includes(option.value));
  };

  useEffect(() => {
    setIsOnDivisor(false);
  }, []);

  const [verified, setVerified] = useState(false);

  const onDropItem = (itemId, zoneId) => {
    const itemToDrop = items.find((item) => item.id === itemId);

    const zoneOccupied = dropZones.some(
      (zone) => zone.id === zoneId && zone.item
    );

    if (zoneOccupied || !zoneId) {
      return;
    }

    const newDropZones = dropZones.map((zone) => {
      if (zone.id === zoneId) {
        return { ...zone, item: itemToDrop };
      }
      return zone;
    });

    const newItems = items.filter((item) => item.id !== itemId);

    setItems(newItems);
    setDropZones(newDropZones);
    setVerified(false);
    setIsResetDisabled(false); // Habilita el botón
  };

  const verifyOrder = () => {
    // Verificar si todas las zonas están completas
    const allZonesFilled = dropZones.every((zone) => zone.item !== null);

    if (!allZonesFilled) {
      setOrderValidation("Debes completar todas las opciones");
      setIsCorrect(false); // Indicar que no es correcto
      return;
    }
    const correctOrder = ["3", "4", "5", "2", "1"];    
    const currentOrder = dropZones.map((zone) =>
      zone.item ? zone.item.value : ""
    );

    const newDropZones = dropZones.map((zone, index) => ({
      ...zone,
      correct: zone.item && zone.item.value === correctOrder[index],
      }));

    setDropZones(newDropZones);

    const correctCount = newDropZones.filter((zone) => zone.correct).length;
    const percentage = (correctCount / correctOrder.length) * 100;
    setSummary(
      `Obtuviste ${correctCount}/5 opciones correctas. Su porcentaje fue del ${Math.round(percentage)}%.`
      );

    if (correctCount === correctOrder.length) {
      setOrderValidation("¡Todas las opciones están correctamente ubicadas!");
      setIsCorrect(true);
    } else {
      setOrderValidation(
        `Tienes ${correctCount} de ${correctOrder.length} respuestas correctas. Inténtalo nuevamente.`
      );
      setIsCorrect(false);
    }
  };

  const resetActivity = () => {
    setOrderValidation("");
    setDropZones(
      dropZones.map((zone) => ({ ...zone, item: null, correct: false }))
    );
    setItems([
      { id: "item-1", content: "Bloqueo de sistema eléctrico", value: "1" },
      { id: "item-2", content: "Bloqueo de sistema de válvulas", value: "2" },
      { id: "item-3", content: "Bloqueo de escaleras y equipos", value: "3" },
      { id: "item-4", content: "Bloqueo de instrumentos", value: "4" },
      { id: "item-5", content: "Equipos contratistas", value: "5" },
    ]);
    setVerified(false);
    setIsResetDisabled(true);
    setSummary("");
  };

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const getImageForZone = (zoneIndex) => {
    if (!verified) {
      switch (zoneIndex) {
        case 0:
          return img1;
        case 1:
          return img2;
        case 2:
          return img3;
        case 3:
          return img4;
        case 4:
          return img5;
        default:
          return img1;
      }
    } else {
      const zone = dropZones[zoneIndex];
      switch (zoneIndex) {
        case 0:
          return zone.correct ? img1Check : img1Mal;
        case 1:
          return zone.correct ? img2Check : img2Mal;
        case 2:
          return zone.correct ? img3Check : img3Mal;
        case 3:
          return zone.correct ? img4Check : img4Mal;
        case 4:
          return zone.correct ? img5Check : img5Mal;
        default:
          return img1;
      }
    }
  };

  const handleResetMobile = () => {
    const newBorderColors = dropdowns.map(
      (value) => value === "border-main-color/50"
    );
    setBorderColors(newBorderColors);
    resetActivity();
    setIsResetDisabled(true);
    setDropdowns(Array(5).fill("0"));
    setSummary("");
  };

  const handleValidateMobile = () => {
     // Comprueba si todas las opciones están seleccionadas
  if (dropdowns.some((value) => value === "0")) {
    setSummary("Debes completar todas las opciones"); // Muestra mensaje de error
    setBorderColors([]); // Limpia los bordes en caso de error
    return;
  }

  
    const correctOrder = ["3", "4", "5", "2", "1"];
    const newBorderColors = dropdowns.map((value, index) => {
      return value === correctOrder[index] ? "border-green-600" : "border-red-600";
    });
    setBorderColors(newBorderColors);
  
    const correctCount = dropdowns.filter((value, index) => value === correctOrder[index]).length;
    const percentage = (correctCount / correctOrder.length) * 100;
  
    if (correctCount === correctOrder.length) {
      setOrderValidation("¡Todas las opciones están correctamente ubicadas!");
      setIsCorrect(true);
    } else {
      setOrderValidation(
        `Tienes ${correctCount} de ${correctOrder.length} respuestas correctas. Inténtalo nuevamente.`
      );
      setIsCorrect(false);
    }
    // Actualiza el resumen con el porcentaje calculado
    setSummary(
      `Obtuviste ${correctCount}/5 opciones correctas. Su porcentaje fue del ${Math.round(percentage)}%.`
      );

  };

  // Función para verificar si todas las opciones están seleccionadas
  const handleVerify = () => {
    // Comprobamos si todas las opciones en dropdowns están completas (no "0")
    const allSelected = dropdowns.every((value) => value !== "0");

    if (!allSelected) {
      // Si no todas están seleccionadas, mostramos el mensaje de error
      setOrderValidation("Debes completar todas las opciones");
      setIsCorrect(false); // Marcamos la validación como incorrecta
      return;
    }

    // Si todas están seleccionadas, aquí va la lógica para la verificación real
    // Suponiendo que tienes alguna validación adicional aquí
    setOrderValidation("Las opciones han sido completadas correctamente");
    setIsCorrect(true); // La validación es correcta si todo está bien
  };

  return (
    <div className="container">
      <DndContext
        onDragEnd={(event) => onDropItem(event.active.id, event.over?.id)}
      >
        <div className="row mb-36 md:mb-0">
          <div className="col-md-12 col-lg-12">
            <h1 className="tituloh1-center text-title-size text-secondary-color font-bold mb-2">
              ¡Diviértete! Relaciona los candados con cada caso
            </h1>
            <div className="w-fit mx-auto">
              <div className="hidden md:block">
                <Instruction theme="light" arrow="down">
                  Arrastra cada candado al tipo de bloqueo conveniente
                </Instruction>
              </div>
              <div className="block md:hidden">
                <Instruction theme="light" arrow="down">
                  Escoge la opción correcta de la lista desplegable
                </Instruction>
              </div>
            </div>
            <br />
          </div>
          <div className="mt-6 w-full text-center">
              {summary && (
                <div className="bg-gray-100 p-3 m-3 rounded-md shadow-md">
                  <Typography variant="h6" className="text-secondary-color">
                    {summary}
                  </Typography>
                </div>
              )}
            </div>
          <div className="md:hidden flex flex-row gap-4 w-fit mx-auto">
            <Button
              theme="light"
              onClick={handleValidateMobile}
              roundedFull={true}
              icon={faCheck}
              className="mx-auto"
            >
              Validar
            </Button>
            <button
              className={`flex justify-center items-center group bg-main-color rounded-full px-4 py-2 shadow-main-color text-white mx-auto 
                ${isResetDisabled ? "opacity-50 cursor-not-allowed" : ""}
                ${isResetDisabled ? "hover:bg-main-color" : "hover:bg-hover-color"}`}
              onClick={handleResetMobile}
              disabled={isResetDisabled}
            >
              <i className="fa fa-repeat icono-bold"></i> Reiniciar
            </button>
          </div>
          {/* Resumen de resultados */}          
            <div className="block md:hidden">
              {dropdowns.map((value, index) => (
                <div
                  key={index}
                  className={`relative mb-6 w-full flex flex-col items-center justify-center p-4 rounded-md w-4/5 mx-auto ${
                    borderColors[index] === "border-green-600"
                      ? "bg-[#4CAF50]" // Fondo verde
                      : borderColors[index] === "border-red-600"
                      ? "bg-[#F44336]" // Fondo rojo
                      : "bg-gray-200"
                  }`}
                >
                  {/* Ícono (Check o X) e imagen */}
                  <div className="relative w-full flex flex-col items-center">
                    <img
                      src={getImageForZone(index)}
                      alt={`Candado Respuesta ${index + 1}`}
                      className="w-[60%] object-contain"
                    />
                    {borderColors[index] === "border-green-600" && (
                      <div
                        className="absolute inset-0 flex justify-center items-center text-5xl"
                        style={{ color: "#4CAF50" }} // Ícono verde
                      >
                        <i className="fa fa-check-circle"></i>
                      </div>
                    )}
                    {borderColors[index] === "border-red-600" && (
                      <div
                        className="absolute inset-0 flex justify-center items-center text-5xl"
                        style={{ color: "#F44336" }} // Ícono rojo
                      >
                        <i className="fa fa-times-circle"></i>
                      </div>
                    )}
                  </div>

                  {/* Dropdown más cerca de la imagen */}
                  <div className="w-full text-center mt-4">
                    <select
                      key={index}
                      className="border-2 w-3/4 rounded-md text-black"
                      name={`dropdown${index + 1}`}
                      value={value}
                      onChange={(e) => handleDropdownChange(index, e.target.value)}
                    >
                      <option value="0">Seleccione...</option>
                      {getFilteredOptions(index).map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Mensaje debajo del dropdown */}
                  <div className="mt-4 w-full text-center text-white font-bold">
                    {borderColors[index] === "border-green-600"
                      ? "¡Correcto! ¡Desplazaste bien la opción!"
                      : borderColors[index] === "border-red-600"
                      ? "¡Incorrecto! ¡Piénsalo bien, no es la opción correcta!"
                      : ""}
                  </div>
                </div>
              ))}
            </div>


          {/* Drag and drop activity for desktop */}
          <div className="hidden md:block">
            <div className="col-md-12 col-lg-12 actividad_candidatos">
              <div
                className="flex gap-8 justify-between"
                id="actividad_candado"
                style={{ width: "80%", margin: "auto" }}
              >
                {dropZones.map((zone, index) => (
                  <span
                    key={zone.id}
                    className="grid-item-pairs act3_drag"
                    draggable="true"
                    onDropItem={onDropItem}
                    verified={verified}
                  >
                    <div>
                      <img
                        src={getImageForZone(index)}
                        alt={`Candado Respuesta ${index + 1}`}
                      />
                    </div>
                  </span>
                ))}
              </div>
            </div>

            

            {/* Drop Zones */}
            <div
              className="flex gap-16 my-12 w-[80%] mb-3"
              style={{ margin: "0 auto" }}
            >
              {dropZones.map((zone) => (
                <DropZone key={zone.id} zone={zone} onDropItem={onDropItem} />
              ))}
            </div>

            {/* Draggable Items */}
            <div className="flex gap-16 w-[80%]" style={{ margin: "0 auto" }}>
              {items.map((item) => (
                <DraggableItem key={item.id} item={item} />
              ))}
            </div>

            {/* Botones */}
            <div className="col-lg-12 col-md-12" style={{ display: "flex" }}>
              <button
                className="flex justify-center items-center group bg-main-color rounded-full px-4 py-2  shadow-main-color text-white mx-auto"
                onClick={handleShow}
              >
                <i className="fa fa-question" aria-hidden="true"></i>
                <span className="ml-2">No olvides</span>
              </button>
              <button
                className="flex justify-center items-center group bg-main-color rounded-full px-4 py-2  shadow-main-color text-white mx-auto"
                onClick={verifyOrder}
              >
                <i className="fa fa-check icono-bold"></i> Verificar
              </button>
              <button
                className={`flex justify-center items-center group bg-main-color rounded-full px-4 py-2 shadow-main-color text-white mx-auto 
                    ${isResetDisabled ? "opacity-50 cursor-not-allowed" : ""}
                    ${isResetDisabled ? "hover:bg-main-color" : "hover:bg-hover-color"}`}
                onClick={resetActivity}
                disabled={isResetDisabled}
              >
                <i className="fa fa-repeat icono-bold"></i> Reiniciar
              </button>
            </div>
            {/* Mensaje de Validación */}
            {orderValidation && (
              <Typography
                variant="h6"
                className={`text-lg  font-bold my-2 text-center mt-4 ${isCorrect ? "text-[#4CAF50]" : "text-[#F44336]"}`}
                style={{ fontSize: "16px" }}
              >
                {orderValidation}
              </Typography>
            )}
          </div>
        </div>
      </DndContext>
      {/* Modal */}
      {showModal && (
        <>
          <div className="backdrop" onClick={handleClose}></div>
          <div className="modal show fade d-block mt-4" tabIndex={-1}>
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-contenido">
                <div className="bg-main-color modal-header">
                  <h5 className="modal-title">No olvides</h5>
                  <button
                    type="button"
                    className="btn-close"
                    aria-label="Close"
                    onClick={handleClose}
                  ></button>
                </div>
                <div className="modal-body">
                  <img
                    src={imgNoOlvides}
                    alt="imagen no olvides"
                    className="w-[20%] mb-3"
                    style={{ margin: "0 auto" }}
                  />
                  <p style={{ textAlign: "center" }}>
                    Por favor recuerde que Los CANDADOS son de uso personal. Una
                    vez el candado este abierto la llave no puede salir. Use el
                    color de candado adecuado para la labor a ejecutar. Debe ser
                    en material aislante para labores con electricidad
                  </p>
                  <audio controls className="media-espanol center-media">
                    <source src={audioRecuerdaCandados} type="audio/mp3" />
                  </audio>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default DivierteteRelacionaCandados;
