import { Link } from "react-router-dom";
import Button from "../Button";
import { MessageContainer } from "./styles";

export default function NoProductsMessage() {
  return (
    <MessageContainer>
      <h2>Você não possui itens no estoque</h2>
      <Link to={"/novo-item"}>
        <Button text={"Adicionar item+"} />
      </Link>
    </MessageContainer>
  );
}
