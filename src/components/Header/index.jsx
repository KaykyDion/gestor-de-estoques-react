import { Link } from "react-router-dom";
import { HeaderStyle } from "./styles";
import Button from "../Button";

export default function Header() {
  return (
    <HeaderStyle>
      <Link to={"/"}>
        <h2>DevStock</h2>
      </Link>

      <nav>
        <ul>
          <li>
            <Link to={"/"}>Início</Link>
          </li>
          <li>
            <Link to={"/itens"}>Itens</Link>
          </li>
          <li>
            <Link to={"/novo-item"}>
              <Button text="Novo item+" />
            </Link>
          </li>
        </ul>
      </nav>
    </HeaderStyle>
  );
}
