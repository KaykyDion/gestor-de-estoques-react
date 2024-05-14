import { useState } from "react";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { PageLayout } from "../../styles";
import { Form } from "../../components/Form/styles";
import { useLoaderData } from "react-router-dom";
import useStockItems from "../../hooks/useStockItems";

export default function UpdateItemPage() {
  const item = useLoaderData();

  const { setStock } = useStockItems();
  const [name, setName] = useState(item.name);
  const [amount, setAmount] = useState(item.amount);
  const [price, setPrice] = useState(item.price);
  const [category, setCategory] = useState(item.category);
  const [description, setDescription] = useState(item.description);

  function handleSubmit(ev) {
    ev.preventDefault();

    item.name = name;
    item.amount = amount;
    item.price = price;
    item.category = category;
    item.description = description;

    setStock((state) => {
      const index = state.findIndex((i) => i.id === item.id);
      state.splice(index, 1, item);
      localStorage.setItem("stock-items", JSON.stringify(state));
      console.log(state);

      return state;
    });
  }

  return (
    <PageLayout>
      <Form onSubmit={handleSubmit}>
        <div className="inputsContainer">
          <Input
            labelText={"Nome:"}
            inputType={"text"}
            value={name}
            setValue={setName}
          />
          <Input
            labelText={"Quantidade:"}
            inputType={"number"}
            value={amount}
            setValue={setAmount}
          />
          <Input
            labelText={"Preço:"}
            inputType={"number"}
            value={price}
            setValue={setPrice}
          />
          <div>
            <label htmlFor="categories">Categoria:</label>
            <select
              required
              id="categories"
              defaultValue={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option disabled value="não definida">
                Selecione uma categoria...
              </option>
              <option value="Livros">Livros</option>
              <option value="Jogos">Jogos</option>
            </select>
          </div>
        </div>

        <div className="textAreaContainer">
          <label htmlFor="description">Descrição:</label>
          <textarea
            required
            id="description"
            rows="10"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <Button text="Salvar" bgColor="#5BA7FD" />
      </Form>
    </PageLayout>
  );
}