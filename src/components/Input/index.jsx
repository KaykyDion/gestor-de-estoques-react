/* eslint-disable react/prop-types */
import { InputContainer } from "./styles";

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
