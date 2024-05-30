import { Btn } from "./style";
import PropTypes from "prop-types";

Button.propTypes = {
  bgColor: PropTypes.string,
  text: PropTypes.string,
  handleClick: PropTypes.func,
};

export default function Button({ bgColor, text, handleClick }) {
  return (
    <Btn onClick={handleClick} style={{ backgroundColor: bgColor }}>
      {text}
    </Btn>
  );
}
