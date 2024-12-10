/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTurnUp, faTurnDown } from "@fortawesome/free-solid-svg-icons";

const Instruction = ({ children, theme='dark', arrow='up' }) => {
  const textColor = theme === 'dark' ? 'text-instruction-color' : 'text-secondary-color';
  const backgroundColor = theme === 'dark' ? 'bg-instruction-color-background' : 'bg-secondary-color-background'
  const arrowDirection = arrow === 'up' ? faTurnUp : faTurnDown;
  return (
    <div className={`${backgroundColor} rounded-lg px-4 py-2 text-center my-8 italic flex items-center gap-2`}>
      <p className={`${textColor} text-instructions-size`} style={{ lineHeight: '1.3rem'}}>{children}</p>
      <FontAwesomeIcon icon={arrowDirection} className={`${textColor}`} />
    </div>
  );
}

export default Instruction;