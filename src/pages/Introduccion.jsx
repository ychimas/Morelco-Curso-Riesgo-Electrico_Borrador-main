import logoMorelco from '../assets/img/logo_morelco_color.png';
import background from '../assets/img/fondo1.png';
import { Clock, BookOpen, User, CheckSquare } from 'lucide-react';
import Button from './components/Button';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

export default function Component() {
  const sections = [
    {
      icon: <Clock className="w-10 h-10" />,
      title: "Duración del Curso",
      content: [
        { label: "Tiempo máximo estimado de duración virtual", value: "1 hora" },
        { label: "Tiempo asociado a su perfil de formación", value: "4 horas" }
      ]
    },
    {
      icon: <User className="w-10 h-10" />,
      title: "Objetivo del Curso",
      content: [
        { label: "Este curso le permitirá", value: "Desarrollar habilidades prácticas para manejar cargas de forma segura y eficiente, reduciendo el riesgo de lesiones." }
      ]
    },
    {
      icon: <CheckSquare className="w-10 h-10" />,
      title: "Al finalizar el curso",
      content: [
        { label: "Usted podrá", value: [
          "Reconocer las políticas de seguridad que buscan cuidarte en la operación",
          "Recordar los principios del pbloqueo y etiquetado",
          "Conocer el procedimiento de bloqueo y etiquetado"
        ]}
      ]
    },
    {
      icon: <BookOpen className="w-10 h-10" />,
      title: "Recomendaciones",
      content: [
        { label: "1.", value: "Disponerse a adquirir nuevos conocimientos y reforzar los existentes para su seguridad" },
        { label: "2.", value: "Disponer el tiempo mínimo estimado de duración para tomar este curso" },
        { label: "3.", value: "Contar con conexión a internet" },
        { label: "4.", value: "Realizar todas las actividades de refuerzo y repetirlas si es necesario" },
        { label: "5.", value: "No olvides firmar tu compromiso y presentar la Evaluación del curso" },
        { label: "6.", value: "Si estás en un lugar abierto, usa AUDÍFONOS; hay audios con información valiosa que no te querrás perder" }
      ]
    }
  ];

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/slides");
  };

  return (
    <div className="mx-auto p-8 min-h-screen"
    style={{
      backgroundImage: `url(${background})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }}
    >

      <div className='flex flex-col md:flex-row justify-between items-center mb-12'>
        <img src={logoMorelco} className=" w-72" />
        <h1 className="text-4xl font-bold text-main-color text-center">Información del Curso</h1>
      

      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {sections.map((section, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg hover:shadow-xl hover:shadow-main-color/30 transition-shadow overflow-hidden">
            <div className="p-6 bg-blue-50">
              <div className="flex items-center space-x-4">
                <div className="text-main-color bg-blue-100 p-3 rounded-full">{section.icon}</div>
                <h2 className="text-2xl font-semibold text-gray-800">{section.title}</h2>
              </div>
            </div>
            <div className="p-6">
              {section.content.map((item, itemIndex) => (
                <div key={itemIndex} className="mb-4">
                  <span className="font-medium text-gray-700">{item.label}: </span>
                  {Array.isArray(item.value) ? (
                    <ul className="list-disc list-inside ml-4 mt-2 space-y-2">
                      {item.value.map((subItem, subIndex) => (
                        <li key={subIndex} className="text-gray-600">{subItem}</li>
                      ))}
                    </ul>
                  ) : (
                    <span className="text-gray-600">{item.value}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className='flex justify-center items-center my-8'>
        <Button onClick={handleClick} icon={faArrowRight}>Siguiente</Button>
      </div>
    </div>
  );
}