import { Btn } from "./style";

// eslint-disable-next-line react/prop-types
export default function Button({ bgColor, text }) {
  return <Btn style={{ backgroundColor: bgColor }}>{text}</Btn>;
}
