import section_1 from "../../assets/img/slides/section-3.png";

import useStore from "../../../store";

/*
Esta slide es particularmente importante, ya que es la que tendrá un background que ocupa todo el espacio y servirá para 
dividir los diferentes momentos del curso. 
Aquí podemos cambiar la imagen de fondo desde el import de arriba, y hay algo importante que hacer aquí. Definir 
el evento del botón que nos permitirá avanzar a la siguiente slide.
Si nos dirigimos al evento onClick del botón, veremos que se llama a la función setSlideIndex(9).
ese número 9 es el índice de la siguiente slide, por lo que si queremos que el botón nos lleve a la siguiente slide,
debemos cambiar ese número al índice de la siguiente slide. Hay que tener en cuenta que ese índice es el índice del arreglo, 
por lo que si queremos ir a la slide 10, debemos poner 9, ya que los arreglos empiezan en 0.
*/

function TransporteMercanciasPeligrosasDivisor() {
  const setSlideIndex = useStore((state) => state.setSlideIndex);
  return (
    <div className="container slider02 relative min-h-screen p-0 m-0">
      <div
        className="absolute z-0 inset-0 bg-cover bg-center w-full"
        style={{
          backgroundImage: `url(${section_1})`,
          width: "100vw",
          height: "100%",
        }}
      >
        <div className="flex flex-col text-7xl z-50 justify-center h-full -mt-20 px-40 font-bold content-start ">
          <h1 className="text-white">
            Transporte de<span className="text-main-color">.</span>
          </h1>
          <h1 className="text-white">
            MERCANCÍAS<span className="text-main-color">.</span>
          </h1>
          <h1 className="text-white">Peligrosas</h1>
          <button
            className="bg-main-color text-lg font-normal text-white w-fit py-2.5 px-4 mt-8"
            onClick={() => setSlideIndex(17)}
          >
            VER MÁS &gt;
          </button>
        </div>
      </div>
    </div>
  );
}

export default TransporteMercanciasPeligrosasDivisor;
