import "../../assets/css/cards.css";
import "../../../node_modules/video-react/dist/video-react.css";
import EnergiaCero from "../../assets/img/slides/Energia-cero.png";
import EnergiaSlide1 from "../../assets/img/slides/Energia-Slide-1.png";
import EnergiaSlide2 from "../../assets/img/slides/Energia-Slide-2.png";
import EnergiaSlide3 from "../../assets/img/slides/Energia-Slide-3.png";
import EnergiaSlide4 from "../../assets/img/slides/Energia-Slide-4.png";

import { useEffect } from 'react';
import useStore from '../../store';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import Title from '../components/Title.jsx'
import Paragraph from '../components/Paragraph.jsx'
import Instruction from '../components/Instruction.jsx'

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Subtitle from "../components/Subtitle.jsx";
// import "./styles/SwiperComponent.css";

function LaClaveEnergiaCero() {
  const slidesContent = [
    {
      imageURL: EnergiaSlide1,
      text: 'Multímetro Digital'
    },
    {
      imageURL: EnergiaSlide2,
      text: 'Manómetro'
    },
    {
      imageURL: EnergiaSlide3,
      text: 'Medidor de Ausencia de Tensión'
    },
    {
      imageURL: EnergiaSlide4,
      text: 'Termómetro Digital'
    },
  ];

  const setIsOnDivisor = useStore((state) => state.setIsOnDivisor);
0
  useEffect(() => {
    setIsOnDivisor(false);
  }, []);

  return (
    <div className="flex flex-col md:flex-row ">
      {/* Left Column */}
      <div className="md:flex-1 bg-slate-900 md:w-1/2 w-full md:h-screen py-6 px-2 md:px-24  flex-col justify-center items-center">
        {/* <h1 className="text-secondary-color font-bold text-3xl md:text-4xl mt-6 text-center"> */}
        <div className="my-8 text-center">
          <Title>La clave es</Title>
          <Subtitle>¡ENERGÍA CERO!</Subtitle>
        </div>
        <div className="md:mx-24">
        <Paragraph>
          Antes de darle servicio o mantenimiento a un equipo, verifica que
          todas las fuentes de energía estén:
        </Paragraph></div>
        <div>
          <img
            className="px-24 my-6 max-w-[400px] mx-auto"
            src={EnergiaCero}
            alt="Energia Cero"
          />
        </div>
        {/* <p className="pt-6 italic text-secondary-color text-center mb-4"> */}
        <div className="w-fit mx-auto">
        <Instruction arrow='down'>
          Pasa el mouse sobre cada palabra:
        </Instruction>
        </div>
        {/* </p> */}
        <div className="flex flex-col sm:flex-row justify-between w-[40%] mx-auto my-5">
        <ul className="list-disc">
          <li className="text-white hover:scale-105  transition-transform">
            Apagadas
          </li>
          <li className="text-white hover:scale-105 transition-transform">
            Aisladas
          </li>
          <li className="text-white hover:scale-105 transition-transform">
            Desconectadas
          </li>
          <li className="text-white hover:scale-105 transition-transform">
            Purgadas
          </li>
        </ul>
        <ul className="list-disc">
          <li className="text-white hover:scale-105 transition-transform">
            Encerradas
          </li>
          <li className="text-white hover:scale-105 transition-transform">
            Inmovilizadas
          </li>
          <li className="text-white hover:scale-105 transition-transform">
            Bloqueadas
          </li>
          <li className="text-white hover:scale-105 transition-transform">
            Obstruidas
          </li>
        </ul>
        </div>
      </div>

      {/* Right Column */}
      <div className="md:flex-2 bg-white md:w-1/2 w-full px-10 md:pr-20 flex mx-auto justify-center items-center mt-12 md:mt-0 mb-48 md:mb-0 md:pb-24">
        <div className="h-[60vh] md:w-[80%] w-full">
          {/* <SwiperComponent slides={slidesContent} delay={5000} text={false} /> */}
          <Swiper
            pagination={true}
            modules={[Pagination, Autoplay]}
            // navigation={true}
            loop={true}
            slidesPerView={1}
            spaceBetween={30}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
          >
            {slidesContent.map((slide, index) => (
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
        </div>
      </div>
    </div>
  );
}

export default LaClaveEnergiaCero;
