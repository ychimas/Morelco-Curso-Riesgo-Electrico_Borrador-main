import energiasMorelco from '../../assets/img/energias_morelco.png'
import { useState } from "react";
import Title from '../components/Title.jsx'
import Instruction from '../components/Instruction.jsx'
import Paragraph from '../components/Paragraph.jsx'
import Button from "../components/Button.jsx";
import ModalDialog from "../components/ModalDialog.jsx"
import { faCheck, faMapPin, faPaperclip, faRotate } from "@fortawesome/free-solid-svg-icons";
import esClaveImg from '../../assets/img/esClave.png'
import esClaveAudio from '../../assets/audio/esClaveAudio.mp3'
import recuerdaImg from '../../assets/img/recuerdaImg.png'
import recuerdaAudio from '../../assets/audio/recuerdaAudio.mp3'

import { useEffect } from 'react';
import useStore from '../../store';
function SeisTiposEnergiasPeligrosas() {
  const [dropdowns, setDropdowns] = useState(Array(6).fill("0"));
  const [borderColors, setBorderColors] = useState(Array(6).fill("border-main-color/50"));
  const [modalEsClaveOpen, setModalEsClaveOpen] = useState(false);
  const [modalRecuerdaOpen, setModalRecuerdaOpen] = useState(false);

  const setIsOnDivisor = useStore((state) => state.setIsOnDivisor);

  useEffect(() => {
    setIsOnDivisor(false);
  }, []);

  const handleDropdownChange = (index, value) => {
    const newDropdowns = [...dropdowns];
    newDropdowns[index] = value;
    setDropdowns(newDropdowns);
  };

  const getFilteredOptions = (index) => {
    const selectedValues = dropdowns.filter((_, i) => i !== index);
    return options.filter(option => !selectedValues.includes(option.value));
  };

    const validateDropdowns = () => {
    const correctAnswers = ["3", "4", "2", "6", "5", "1"];
    const newBorderColors = dropdowns.map((value, index) =>
      value === correctAnswers[index] ? "green-600" : "red-600"
    );
    setBorderColors(newBorderColors);
  };

  const restartActivity = () => {
    const newBorderColors = dropdowns.map((value) => {
      value === 'main-color/50'
    })
    setBorderColors(newBorderColors);
    setDropdowns(Array(6).fill("0"));
  }

  const options = [
  { value: "1", label: "Energía Mecánica" },
  { value: "2", label: "Energía Hidráulica" },
  { value: "3", label: "Energía Química" },
  { value: "4", label: "Energía Eléctrica" },
  { value: "5", label: "Energía Térmica" },
  { value: "6", label: "Energía Neumática" }
];

const texts = [
  "La energía se manifiesta de diversas formas en nuestro entorno. La",
  "surge de cambios en la composición de sustancias, como los combustibles o materiales radioactivos, generando calor. La",
  " se produce por una diferencia de potencial que permite el flujo de corriente en un conductor. La",
  "utiliza fluidos, como el agua o aceite, para activar mecanismos en sistemas industriales o naturales. De manera similar, la",
  " emplea gases comprimidos, como el aire, para generar y operar diferentes sistemas. La",
  "se transfiere en forma de calor desde un cuerpo caliente a uno más frío. Finalmente, la",
  "se relaciona con el movimiento o la posición de los objetos, ya sea como energía cinética (movimiento) o potencial (posición)."
];

  return (
    <div className="flex flex-col md:flex-row ">
      <div className="md:flex-1 bg-slate-900 md:w-3/5 w-full sm:h-screen py-6 px-6 sm:px-24  flex-col justify-center items-center">
                <div className="flex flex-col text-center h-full justify-center items-center">
        <Title>
          Vías de ingreso de las sustancias al cuerpo humano
        </Title>
        <Instruction arrow='down'>
          Seleccione la opción correcta de cada lista desplegable
        </Instruction>
        <div className="ctActivityDragDrop">
          <div>
            <div className="listOpcDrop mx-2">
              <Paragraph justify='justify' className='text-justify'>
                {dropdowns.map((value, index) => (
                  <>
                  {texts[index]}
                    <select
                      key={index}
                      className={`border-3 mx-2 rounded-md border-${borderColors[index]} text-black`}
                      // className={`border-3 mx-2 rounded-md border-${borderColors[index]} bg-${borderColors[index]} text-black`}
                      name={`dropdown${index + 1}`}
                      value={value}
                      onChange={(e) =>
                        handleDropdownChange(index, e.target.value)
                      }
                    >
                      <option value="0">Seleccione...</option>
                      {getFilteredOptions(index).map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                    
                  </>
                ))}
                {texts[6]} 
              </Paragraph>
              <br />
            </div>
          </div>
          </div>

          <div className="flex flex-col lg:flex-row justify-center items-center gap-2 sm:gap-24">
            <Button roundedFull={true} onClick={validateDropdowns} icon={faCheck}>
              Validar
            </Button>
            <Button roundedFull={true} icon={faRotate} onClick={restartActivity}>
              Reiniciar
            </Button>
          </div>
        </div>
      </div>

      {/* Right Column */}
      <div className=" bg-white md:w-1/3 w-full mb-36 md:mb-0 flex flex-col px-10 md:pr-20 mx-auto justify-center items-center pb-24">
          <div className="flex flex-col lg:flex-row justify-center items-center gap-2 sm:gap-24 mt-12 md:mt-0">
            <Button roundedFull={true} icon={faPaperclip} onClick={() => setModalEsClaveOpen(true)}>Es clave que sepas</Button>
            {/* <Button roundedFull={true} icon={faMapPin} onClick={() => setModalRecuerdaOpen(true)}>Recuerda</Button> */}
      </div>
      <div className='md:flex-2 flex items-center justify-center'>
        <div className="p-2">
          <img
            src={energiasMorelco}
            alt="Energias Morelco"
            className="image-seis-energias"
          />
        </div>
      </div>
          <div className="flex flex-col lg:flex-row justify-center items-center gap-2 sm:gap-24">
            {/* <Button roundedFull={true} icon={faPaperclip} onClick={() => setModalEsClaveOpen(true)}>Es clave que sepas</Button> */}
            <Button roundedFull={true} icon={faMapPin} onClick={() => setModalRecuerdaOpen(true)}>Recuerda</Button>
      </div>
      
      </div>

      <ModalDialog
        open={modalEsClaveOpen}
        handleClose={() => setModalEsClaveOpen(false)}
        title="Es clave que sepas"
      >
        <img src={esClaveImg} className='w-[150px] h-[150px] mx-auto'></img>
        <Paragraph theme='light'>
          Energía Peligrosa es cualquier fuente o componente de energía que es liberado durante una operación y el mantenimiento de equipos o máquinas y que podría dejar una persona lesionada o la pérdida material de un equipo
        </Paragraph>
          <audio controls>
            <source src={esClaveAudio} type="audio/mp3" />
          </audio>
      </ModalDialog>

      <ModalDialog
        open={modalRecuerdaOpen}
        handleClose={() => setModalRecuerdaOpen(false)}
        title="Recuerda"
      >
        <img src={recuerdaImg} className='w-[150px] h-[150px] mx-auto'></img>
        <Paragraph theme='light'>De acuerdo con el NIOSH (Instituto Nacional para la Seguridad y Salud Ocupacional) de Estados Unidos, la energía CINÉTICA es la mecánica, mientras que la POTENCIAL es la que se encuentra en recipientes a presión, tanques a gas, sistemas hidráulicos o mecánicos</Paragraph>
          <audio controls>
            <source src={recuerdaAudio} type="audio/mp3" />
          </audio>
      </ModalDialog>
    </div>
  );
}

export default SeisTiposEnergiasPeligrosas;
