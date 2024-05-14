import { Table } from "../Table/styles";
import useStockItems from "../../hooks/useStockItems";
import { Link } from "react-router-dom";
import Button from "../Button";

export default function RecentItems() {
  const { getRecentItems } = useStockItems();

  return (
    <Table>
      <thead>
        <tr>
          <th>
            <h3>Itens Recentes</h3>
          </th>
          <th>
            <h3>Ações</h3>
          </th>
        </tr>
      </thead>
      <tbody>
        {getRecentItems().length === 0 ? (
          <tr>
            <td style={{ color: "#a7a6a6" }}>Não há itens recentes</td>
          </tr>
        ) : (
          getRecentItems().map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>
                  <Link to={`/${item.id}`}>
                    <Button text={"Ver"} />
                  </Link>
                </td>
              </tr>
            );
          })
        )}
      </tbody>
    </Table>
  );
}
