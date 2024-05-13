import { Link } from "react-router-dom";
import Button from "../../components/Button";
import ItemInfoBox from "../../components/ItemInfoBox";
import { Table } from "../../components/Table/styles";
import useStockItems from "../../hooks/useStockItems";
import { PageLayout } from "../../styles";
import { InfoBoxContainer, TableContainer } from "./styles";

export default function Home() {
  const { stock, getItemsRunningLow, getRecentItems } = useStockItems();

  return (
    <PageLayout>
      <InfoBoxContainer>
        <ItemInfoBox title={"Diversidade de itens:"} amount={stock.length} />
        <ItemInfoBox
          title={"Inventário total:"}
          amount={stock.reduce((acc, item) => {
            return acc + +item.amount;
          }, 0)}
        />
        <ItemInfoBox
          title={"Itens recentes:"}
          amount={getRecentItems().length}
        />
        <ItemInfoBox
          title={"Itens acabando:"}
          amount={getItemsRunningLow().length}
        />
      </InfoBoxContainer>

      <TableContainer>
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
            {getRecentItems().map((item) => {
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
            })}
          </tbody>
        </Table>

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
      </TableContainer>
    </PageLayout>
  );
}
