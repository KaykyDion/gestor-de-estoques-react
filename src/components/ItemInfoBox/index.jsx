import { InfoBox } from "./styles";

// eslint-disable-next-line react/prop-types
export default function ItemInfoBox({ title, amount }) {
  return (
    <InfoBox>
      <p>{title}</p>
      <span>{amount}</span>
    </InfoBox>
  );
}
