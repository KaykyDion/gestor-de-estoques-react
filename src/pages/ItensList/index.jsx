import { Link } from "react-router-dom";
import Button from "../../components/Button";
import { Table } from "../../components/TableStyles/styles";
import useStockItems from "../../hooks/useStockItems";
import { PageLayout } from "../../styles";
import NoProductsMessage from "../../components/NoProductsMessage";
import Modal from "../../components/Modal";

export default function ItensList() {
  const { stock, removeItem } = useStockItems();

  return (
    <PageLayout>
      <h1>Stock</h1>
      {stock.length === 0 ? (
        <NoProductsMessage />
      ) : (
        <Table style={{ width: "100%" }}>
          <thead>
            <tr>
              <th className="thId">ID</th>
              <th>Nome</th>
              <th>Em Estoque</th>
              <th className="thCategory">Categoria</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {stock.map(({ id, name, amount, category }) => {
              return (
                <tr key={id}>
                  <td className="tdId">{id}</td>
                  <td>{name}</td>
                  <td>{amount}</td>
                  <td className="tdCategory">{category}</td>
                  <td>
                    <div className="buttonContainer">
                      <Link to={`/${id}`}>
                        <Button text={"Ver"} />
                      </Link>
                      <Link to={`/atualizar/${id}`}>
                        <Button text="Atualizar" bgColor={"#5BA7FD"} />
                      </Link>
                      <Button
                        handleClick={() => removeItem(id)}
                        text={"Excluir"}
                        bgColor={"#FF5258"}
                      />
                    </div>
                    <Modal>
                      <Link to={`/${id}`}>
                        <Button text={"Ver"} />
                      </Link>
                      <Link to={`/atualizar/${id}`}>
                        <Button text="Atualizar" bgColor={"#5BA7FD"} />
                      </Link>
                      <Button
                        handleClick={() => removeItem(id)}
                        text={"Excluir"}
                        bgColor={"#FF5258"}
                      />
                    </Modal>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      )}
    </PageLayout>
  );
}
