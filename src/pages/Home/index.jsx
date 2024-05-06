import Button from "../../components/Button";
import ItemInfoBox from "../../components/ItemInfoBox";
import { HomeStyle, InfoBoxContainer, Table, TableContainer } from "./styles";

export default function Home() {
  return (
    <HomeStyle>
      <InfoBoxContainer>
        <ItemInfoBox title={"Diversidade de itens:"} amount="2" />
        <ItemInfoBox title={"Inventário total:"} amount="40" />
        <ItemInfoBox title={"Itens recentes:"} amount="2" />
        <ItemInfoBox title={"Itens acabando:"} amount="1" />
      </InfoBoxContainer>

      <TableContainer>
        <Table cellSpacing={0}>
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
            <tr>
              <td>Cadeira</td>
              <td>
                <Button text={"Ver"} bgColor={"#eee"} />
              </td>
            </tr>
            <tr>
              <td>Cadeira</td>
              <td>
                <Button text={"Ver"} bgColor={"#eee"} />
              </td>
            </tr>
          </tbody>
        </Table>

        <Table cellSpacing={0}>
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
            <tr>
              <td>Cadeira</td>
              <td>0</td>
              <td>
                <Button text={"Ver"} bgColor={"#eee"} />
              </td>
            </tr>
            <tr>
              <td>Cadeira</td>
              <td>0</td>
              <td>
                <Button text={"Ver"} bgColor={"#eee"} />
              </td>
            </tr>
          </tbody>
        </Table>
      </TableContainer>
    </HomeStyle>
  );
}
