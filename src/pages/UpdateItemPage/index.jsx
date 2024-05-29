import { useEffect, useState } from "react";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { PageLayout } from "../../styles";
import { Form } from "../../components/Form/styles";
import { useLoaderData, useNavigate } from "react-router-dom";
import useStockItems from "../../hooks/useStockItems";
import VMasker from "vanilla-masker";

export default function UpdateItemPage() {
  const item = useLoaderData();

  const { setStock } = useStockItems();
  const [name, setName] = useState(item.name);
  const [amount, setAmount] = useState(item.amount);
  const [price, setPrice] = useState(item.price);
  const [category, setCategory] = useState(item.category);
  const [description, setDescription] = useState(item.description);
  let navigate = useNavigate();

  useEffect(() => {
    setPrice(VMasker.toMoney(price));
  }, [price]);

  function handleSubmit(ev) {
    ev.preventDefault();

    item.name = name;
    item.amount = amount;
    item.price = price;
    item.category = category;
    item.description = description;
    item.updateDate = new Date().toLocaleString();

    setStock((state) => {
      const index = state.findIndex((i) => i.id === item.id);
      state.splice(index, 1, item);
      localStorage.setItem("stock-items", JSON.stringify(state));

      return state;
    });

    navigate(-1);
  }

  return (
    <PageLayout>
      <h2 style={{ marginBottom: "20px" }}>Atualizar - {item.name}</h2>
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
            inputType={"text"}
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
              <option value="Eletrônicos">Eletrônicos</option>
              <option value="Brinquedos">Brinquedos</option>
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
