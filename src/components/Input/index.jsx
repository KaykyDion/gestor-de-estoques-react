import { InputContainer } from "./styles";

// eslint-disable-next-line react/prop-types
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
