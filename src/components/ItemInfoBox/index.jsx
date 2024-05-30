import { InfoBox } from "./styles";
import PropTypes from "prop-types";

ItemInfoBox.propTypes = {
  title: PropTypes.string,
  amount: PropTypes.number,
};

export default function ItemInfoBox({ title, amount }) {
  return (
    <InfoBox>
      <p>{title}</p>
      <span>{amount}</span>
    </InfoBox>
  );
}
