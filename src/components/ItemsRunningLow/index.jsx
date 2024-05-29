import { Table } from "../TableStyles/styles";
import useStockItems from "../../hooks/useStockItems";
import { Link } from "react-router-dom";
import Button from "../Button";

export default function ItemsRunningLow() {
  const { getItemsRunningLow } = useStockItems();
  return (
    <Table>
      <thead>
        <tr>
          <th>
            <h3>Itens Acabando</h3>
          </th>
          <th>
            <h3>Qtd.</h3>
          </th>
          <th>
            <h3>Ações</h3>
          </th>
        </tr>
      </thead>
      <tbody>
        {getItemsRunningLow().length === 0 ? (
          <tr>
            <td style={{ color: "#a7a6a6" }}>Não há itens acabando</td>
          </tr>
        ) : (
          getItemsRunningLow().map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.amount}</td>
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
