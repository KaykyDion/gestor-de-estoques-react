import Button from "../../components/Button";
import { Table } from "../../components/Table/styles";
import useStockItems from "../../hooks/useStockItems";
import { PageLayout } from "../../styles";

export default function ItensList() {
  const { stock, removeItem } = useStockItems();

  return (
    <PageLayout>
      <h1>Stock</h1>
      <Table style={{ width: "100%" }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Em Estoque</th>
            <th>Categoria</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {stock.map(({ id, name, amount, category }) => {
            return (
              <tr key={id}>
                <td>{id}</td>
                <td>{name}</td>
                <td>{amount}</td>
                <td>{category}</td>
                <td className="buttonContainer">
                  <Button text={"Ver"} />
                  <Button text={"Atualizar"} bgColor={"#5BA7FD"} />
                  <Button
                    handleClick={() => removeItem(id)}
                    text={"Excluir"}
                    bgColor={"#FF5258"}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </PageLayout>
  );
}
