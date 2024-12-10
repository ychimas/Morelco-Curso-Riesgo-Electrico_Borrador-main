/* eslint-disable react/prop-types */
// import SwiperComponent from "../components/SwiperComponent";
// import '../slides/styles/ReconoceElementosKitBloqueo.css';

import KitBloqueoSlide1 from "../../assets/img/slides/Kit-Bloqueo-Slide-1.png";
import KitBloqueoSlide2 from "../../assets/img/slides/Kit-Bloqueo-Slide-2.png";
import KitBloqueoSlide3 from "../../assets/img/slides/Kit-Bloqueo-Slide-3.png";
import KitBloqueoSlide4 from "../../assets/img/slides/Kit-Bloqueo-Slide-4.png";
// import KitBloqueoSlide5 from "../../assets/img/slides/Kit-Bloqueo-Slide-5.jpg";
// import KitBloqueoSlide6 from "../../assets/img/slides/Kit-Bloqueo-Slide-6.jpg";
// import KitBloqueoSlide7 from "../../assets/img/slides/Kit-Bloqueo-Slide-7.jpg";

import { Block, Lock, Bookmark } from "@mui/icons-material";
import { faBan, faLock, faBookmark } from "@fortawesome/free-solid-svg-icons";
import KitCandadoSlide1 from "../../assets/img/slides/Kit-Candado-Slide-1.png";
import KitCandadoSlide2 from "../../assets/img/slides/Kit-Candado-Slide-2.png";
import KitCandadoSlide3 from "../../assets/img/slides/Kit-Candado-Slide-3.png";
import KitCandadoSlide4 from "../../assets/img/slides/Kit-Candado-Slide-4.png";
import KitCandadoSlide5 from "../../assets/img/slides/Kit-Candado-Slide-5.png";

import KitEtiquetaSlide1 from "../../assets/img/slides/Kit-Etiqueta-Slide-1.png";
import KitEtiquetaSlide2 from "../../assets/img/slides/Kit-Etiqueta-Slide-2.png";
import Instruction from "../components/Instruction";
import Title from "../components/Title";

import { useEffect, useState } from 'react';
import useStore from '../../store';

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Button from "../components/Button";

function SwiperSlides({ slides}) {
  return (
          <Swiper
            pagination={true}
            modules={[Pagination, Autoplay]}
            // navigation={true}
            loop={true}
            slidesPerView={1}
            spaceBetween={30}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index}>
                <div
                  className="slide-container"
                  style={{ backgroundImage: `url(${slide.imageURL})` }}
                >
                    <div className="text-overlay">
                      <h1 className="text-white font-bold text-xl my-0">
                        {slide.text}
                      </h1>
                    </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
  )
}

function ReconoceElementosKitBloqueo() {
  const setIsOnDivisor = useStore((state) => state.setIsOnDivisor);
  const [selectedOption, setSelectedOption] = useState('candados');

  useEffect(() => {
    setIsOnDivisor(false);
  }, []);
  const swiperBloqueoContent = [
    {
      imageURL: KitBloqueoSlide1,
      text: 'Bloqueo de Válvulas',
    },
    {
      imageURL: KitBloqueoSlide2,

      text: 'Bloqueo de Válvulas',
    },
    {
      imageURL: KitBloqueoSlide3,
      text: 'Bloqueo de Válvulas',
    },
    {
      imageURL: KitBloqueoSlide4,
      text: 'Bloqueo de Válvulas',
    },
    // {
    //   imageURL: KitBloqueoSlide5,
    //   text: 'Bloqueo de Válvulas',
    // },
    // {
    //   imageURL: KitBloqueoSlide6,
    //   text: 'Bloqueo de Válvulas',
    // },
    // {
    //   imageURL: KitBloqueoSlide7,
    //   text: 'Elementos para Bloqueo Múltiple',
    // },
  ];

  const swiperCandadoContent = [
    {
      imageURL: KitCandadoSlide1,
      text: 'Amarillo: Operaciones / Producción',
    },
    {
      imageURL: KitCandadoSlide2,
      text: 'Rojo: Eléctrico',
    },
    {
      imageURL: KitCandadoSlide3,
      text: 'Verde: Instrumentación',
    },
    {
      imageURL: KitCandadoSlide4,
      text: 'Azul: Mecánico',
    },
    {
      imageURL: KitCandadoSlide5,
      text: 'Naranja: Contratista',
    },
  ];

  const swiperEtiquetaContent = [
    {
      imageURL: KitEtiquetaSlide1,
      text: 'Qué, quién, tipo de peligro, advertencias',
    },
    {
      imageURL: KitEtiquetaSlide2,
      text: 'Qué, quién, tipo de peligro, advertencias',
    },
  ];


  return (
    <div className="mb-48 md:mb-0">
      <div className="mx-8 md:mx-auto text-center mt-8">
      <Title theme='light'>
        Reconoce los Elementos del KIT de Bloqueo
      </Title>
      </div>
      <div className="mx-8 md:mx-auto w-fit ">
      <Instruction arrow='down' theme='light'>
        Haz clic en los botones para ver el contenido
      </Instruction>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-10 md:gap-4 mx-auto w-[75%] lg:w-[80%]">
        <div className='lg:col-span-3'>
          {/* <h2 className="text-center text-p-size text-main-color font-bold mb-3">
            ELEMENTOS DE BLOQUEO
          </h2> */}
          <div className="md:h-[60vh] my-4 md:my-0 p-0">
            {/* <SwiperComponent
              slides={swiperBloqueoContent}
              delay={3000}
              text={false}
            /> */}
            <div className="flex flex-col gap-3 md:gap-5 justify-center items-center md:items-start h-full">
          <Button icon={faBan} onClick={() => setSelectedOption('bloqueo')}>ELEMENTOS DE BLOQUEO</Button>
          <Button icon={faLock}onClick={() => setSelectedOption('candados')}>CANDADOS</Button>
          <Button icon={faBookmark} onClick={() => setSelectedOption('etiquetas')}>ETIQUETAS</Button>
          </div>
          </div>
        </div>
        <div className='lg:col-span-7'>
          {/* <h2 className="text-center text-p-size text-main-color font-bold mb-3">
            CANDADOS
          </h2> */}
          <div className="h-[60vh] p-0">
            {/* <SwiperComponent
              slides={swiperCandadoContent}
              delay={3000}
              text={false}
            /> */}
            {/* <SwiperSlides slides={swiperCandadoContent} /> */}
            {selectedOption === 'bloqueo' && (
              <SwiperSlides slides={swiperBloqueoContent} />
            )}
            {selectedOption === 'candados' && (
              <SwiperSlides slides={swiperCandadoContent} />
            )}
            {selectedOption === 'etiquetas' && (

            <SwiperSlides slides={swiperEtiquetaContent} />
            )}
          </div>
        </div>
        {/* <div> */}
          {/* <h2 className="text-center text-p-size text-main-color font-bold mb-3">
            ETIQUETAS
          </h2> */}
          {/* <div className="h-[60vh] p-0"> */}
            {/* <SwiperComponent
              slides={swiperEtiquetaContent}
              delay={3000}
              text={false}
            /> */}
            {/* <SwiperSlides slides={swiperEtiquetaContent} /> */}
          {/* </div> */}
        {/* </div> */}
      </div>
    </div>
  );
}

export default ReconoceElementosKitBloqueo;
