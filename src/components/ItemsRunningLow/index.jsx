import { Table } from "../Table/styles";
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
        {getItemsRunningLow().map((item) => {
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
        })}
      </tbody>
    </Table>
  );
}
