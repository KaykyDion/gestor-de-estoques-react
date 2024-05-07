import { Link } from "react-router-dom";
import { HeaderStyle } from "./styles";
import Button from "../Button";

export default function Header() {
  return (
    <HeaderStyle>
      <h2>DevStock</h2>
      <nav>
        <Link to={"/"}>Início</Link>
        <Link to={"/itens"}>Itens</Link>
        <Link to={"/novo-item"}>
          <Button text="Novo item+" />
        </Link>
      </nav>
    </HeaderStyle>
  );
}
