import { Table } from "../../components/Table/styles";
import { PageLayout } from "../../styles";

export default function ItensList() {
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
      </Table>
    </PageLayout>
  );
}
