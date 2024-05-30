import { InputContainer } from "./styles";
import PropTypes from "prop-types";

Input.propTypes = {
  labelText: PropTypes.string,
  inputType: PropTypes.string,
  value: PropTypes.string,
  setValue: PropTypes.func,
};

export default function Input({ labelText, inputType, value, setValue }) {
  return (
    <InputContainer>
      <label htmlFor={labelText}>{labelText}</label>
      <input
        required
        id={labelText}
        type={inputType}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </InputContainer>
  );
}
