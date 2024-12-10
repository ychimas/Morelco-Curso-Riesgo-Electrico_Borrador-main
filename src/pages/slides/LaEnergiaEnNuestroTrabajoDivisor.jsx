/* eslint-disable react/prop-types */
const backgroundImage = "https://placehold.co/1960x1080";

import useStore from "../../store";
import { useEffect } from 'react';

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

function LaEnergiaEnNuestroTrabajoDivisor({
  background = backgroundImage,
  index,
  line1,
  line2,
  line3,
}) {
  const setSlideIndex = useStore((state) => state.setSlideIndex);
  const setIsOnDivisor = useStore((state) => state.setIsOnDivisor);

  useEffect(() => {
    setIsOnDivisor(true);
  }, []);

  return (
    <div className="container  slider02 relative min-h-screen p-0 m-0">
      <div
        className="absolute -z-10 inset-0 bg-cover bg-center w-full"
        style={{
          backgroundImage: `url(${background})`,
          width: "100vw",
          height: "100%",
        }}
      >

        <div className="flex flex-col text-[25px] md:text-[70px] -z-10 justify-center h-full -mt-20 px-16 sm:px-40 font-bold content-start">
          <h1 className="text-white">

            {line1}
            <span className="text-main-color">.</span>
          </h1>
          <h1 className="text-white text-[25px] md:text-[70px]" >
            {line2}
            <span className="text-main-color">.</span>
          </h1>
          <h1 className="text-white text-[25px] md:text-[70px]">
            {line3}
            <span className="text-main-color">.</span>
          </h1>
          {/* <button
            className="bg-main-color text-lg font-normal  text-white w-fit  cursor-pointer py-2.5 px-4 mt-8"
            onClick={() => setSlideIndex(index)}
          >
            VER MÁS &gt;
          </button> */}
        </div>
      </div>
    </div>
  );
}

export default LaEnergiaEnNuestroTrabajoDivisor;
