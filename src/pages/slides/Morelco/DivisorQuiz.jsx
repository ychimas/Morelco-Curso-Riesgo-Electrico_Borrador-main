/* eslint-disable react/prop-types */
const backgroundImage = "https://placehold.co/1960x1080";

/*
Esta plantilla es ideal para implementar las divisiones de los diferentes momentos del curso.
Tendrá una imagen que ocupará todo el fondo, un título grande, y un botón de acción para dirigir
al usuario a la siguiente slide.

PARÁMETROS:
- background: la imagen de fondo que se mostrará en la diapositiva.
- index: el índice de la diapositiva actual.
- line1: la primera línea de texto que se mostrará en la diapositiva.
- line2: la segunda línea de texto que se mostrará en la diapositiva.
- line3: la tercera línea de texto que se mostrará en la diapositiva.

*/

function DivisorQuiz({ background = backgroundImage }) {
  return (
    <div className="container slider02 relative min-h-screen p-0 m-0">
      <div
        className="absolute z-0 inset-0 bg-cover bg-center w-full"
        style={{
          backgroundImage: `url(${background})`,
          width: "100vw",
          height: "100%",
        }}
      >
        <div className="flex flex-col text-7xl z-50 justify-center h-full -mt-20 px-40 font-bold content-start">
          <h1 className="text-white">
            <span className="text-main-color">¿</span>
            QUÉ APRENDIMOS
            <span className="text-main-color">?</span>
          </h1>
          <p className="text-white text-lg w-[800px] mt-12">
            Por favor haz clic en el botón para comenzar la evaluación del
            módulo. Recuerda que debe superar el 70% de la valoración para
            aprobar el módulo. EXITO !
          </p>
          <h1 className="text-white"></h1>
          <button className="bg-main-color text-lg font-normal text-white w-fit py-2.5 px-4 mt-8">
            INICIAR
          </button>
        </div>
      </div>
    </div>
  );
}

export default DivisorQuiz;
