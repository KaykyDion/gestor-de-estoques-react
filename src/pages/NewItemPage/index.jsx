import Button from "../../components/Button";
import Input from "../../components/Input";
import { PageLayout } from "../../styles";
import { Form } from "./styles";

export default function NewItemPage() {
  return (
    <PageLayout>
      <Form action="">
        <div className="inputsContainer">
          <Input labelText={"Nome:"} inputType={"text"} />
          <Input labelText={"Quantidade:"} inputType={"number"} />
          <Input labelText={"Preço:"} inputType={"number"} />
          <div>
            <label htmlFor="categories">Categoria:</label>
            <select required id="categories" defaultValue="default">
              <option disabled value="default">
                Selecione uma categoria...
              </option>
              <option value="Livros">Livros</option>
              <option value="Jogos">Jogos</option>
            </select>
          </div>
        </div>

        <div className="textAreaContainer">
          <label htmlFor="description">Descrição:</label>
          <textarea required name="description" id="" rows="10"></textarea>
        </div>
        <Button text="Salvar" bgColor="#5BA7FD" />
      </Form>
    </PageLayout>
  );
}
