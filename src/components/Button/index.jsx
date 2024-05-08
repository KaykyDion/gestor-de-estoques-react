import { Btn } from "./style";

// eslint-disable-next-line react/prop-types
export default function Button({ bgColor, text, handleClick }) {
  return (
    <Btn onClick={handleClick} style={{ backgroundColor: bgColor }}>
      {text}
    </Btn>
  );
}
