import { Link } from "react-router-dom";
import { TabContainer } from "./styles";

export default function TabNav() {
  return (
    <TabContainer>
      <Link className="is-active" to={"/"}>
        Todos os itens
      </Link>
      <Link to={"/"}>Novo item +</Link>
    </TabContainer>
  );
}
