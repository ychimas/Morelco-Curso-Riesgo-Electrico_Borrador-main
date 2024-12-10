import React from "react";
import "../../assets/css/style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../assets/css/switch.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import imgEvaluacion from "../../assets/img/morelco_men.png"
import Instruction from '../components/Instruction.jsx'

function EvaluacionCurso() {
  return (
    <div className="flex flex-col md:flex-row h-screen bg-slate-900 pt-36 md:pt-0 justify-center items-center">
      {/* Contenedor General Central */}
      <div className="flex flex-col md:flex-row justify-center items-center h-full w-full">
        
        {/* Columna Izquierda */}
        <div className="md:flex-1 w-full max-w-md h-auto py-6 px-6 flex mt-36 md:mt-0 flex-col justify-center items-center text-white text-center">
          <h1 className="font-bold text-2xl mb-3">EVALUACIÓN</h1>
          <p className="mb-2 text-white">
            Ahora vamos a ver cuánto has aprendido. 
            Al hacer clic afirmas que eres la misma persona que ha realizado este curso, 
            y que va a presentar la evaluación.
          </p>
          {/* <i className="text-secondary-color block text-center px-4 py-2 rounded-md" style={{ fontSize: '14px', lineHeight: '1.2em' }}> */}
            {/* </i> */}
          <button
            className="flex justify-center items-center group bg-main-color rounded-full px-4 py-2 shadow-main-color text-white mx-auto my-2"
            style={{ marginRight: "-5px" }}
            onClick=""
            >
            <i className="fa fa-check icono-bold"></i> Iniciar
            </button>
          {/* <p className="text-secondary-color block text-center px-4 py-2 rounded-md mb-2" style={{ fontSize: '14px', lineHeight: '1.2em' }}> */}
          <Instruction arrow='up'>

            Recuerda que debes superar el 70% de la valoración para aprobar el módulo.
          </Instruction>
          {/* </p> */}
        </div>

        {/* Columna Derecha */}
        <div className="md:flex-1 w-full max-w-md h-auto flex justify-center items-center bg-slate-900">
          <img 
            src={imgEvaluacion} 
            alt="Elefante con Diploma"
            className="w-[400px] h-[400px]" // Tamaño reducido de la imagen
          />
        </div>
        <div className="mb-36 md:mb-0"></div>
        
      </div>
    </div>
  );
}

export default EvaluacionCurso;
