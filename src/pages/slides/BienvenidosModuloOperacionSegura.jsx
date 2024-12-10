import React, { useEffect, useState } from 'react';
import audioBienvenidos from '../../../src/assets/audio/Sld2_bienvenidos.mp3';

// Importa las imágenes directamente
import slide1 from '../../../src/assets/img/slides_home/slide-1.png';
import slide2 from '../../../src/assets/img/slides_home/slide-2.png';
import slide3 from '../../../src/assets/img/slides_home/slide-3.png';
import slide4 from '../../../src/assets/img/slides_home/slide-4.png';
import slide5 from '../../../src/assets/img/slides_home/slide-5.png';

function BienvenidosModuloOperacionSegura() {
  // Array de imágenes importadas
  const images = [slide1, slide2, slide3, slide4, slide5];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    // Cambiar imagen cada 2.1 segundos
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2100);

    // Limpiar intervalo al desmontar el componente
    return () => clearInterval(intervalId);
  }, [images.length]);

  return (
    <>
      <div className="flex flex-col md:flex-row">
        {/* Columna izquierda */}
        <div className="md:flex-1 bg-slate-900 md:w-1/2 w-full h-screen py-6 px-24 flex-col justify-center items-center">
          <div className="flex justify-center items-center gap-3 "></div>
          <div className="h-[90vh] my-auto flex flex-col justify-center items-center">
            <h1 className="text-white text-center font-bold text-title-size mt-6">
              Bienvenidos al módulo
            </h1>
            <h1 className="text-secondary-color text-center font-bold text-title-size mb-6">
              de Riesgo Electrico
            </h1>
            <p className="text-center text-gray-300 text-p-size mx-12 mb-3">
              Bienvenid@s a este módulo virtual, en el cual queremos que todas las personas que trabajan con energías peligrosas, gestionen el riesgo latente en los diferentes tipos de energía existentes en nuestra operación.
            </p>
            <i className="text-secondary-color font-bold mt-3 mb-2">Haz clic sobre el audio</i>
            <audio controls className="media-espanol">
              <source src={audioBienvenidos} type="audio/mp3" />
            </audio>
          </div>
        </div>

        {/* Columna derecha */}
        <div className="md:flex-2 bg-white md:w-1/2 w-full h-screen px-10 md:pr-20 flex mx-auto justify-center items-center pb-24">
          <div className="flex flex-col justify-center items-center p-6 gap-4 h-[90vh] max-w-[70%] mx-auto">
            <div className="slider-box" id="carrusel">
              {/* Mostrar la imagen actual */}
              <img
                src={images[currentImageIndex]}
                alt={`Slide ${currentImageIndex + 1}`}
                className="active-img"
                style={{ maxWidth: '100%', height: 'auto' }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BienvenidosModuloOperacionSegura;
