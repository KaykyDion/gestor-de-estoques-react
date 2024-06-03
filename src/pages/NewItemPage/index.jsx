import { useEffect, useState } from "react";
import Button from "../../components/Button";
import Input from "../../components/Input";
import useStockItems from "../../hooks/useStockItems";
import { PageLayout } from "../../styles";
import { Form } from "./styles";
import VMasker from "vanilla-masker";

export default function NewItemPage() {
  const { addItem } = useStockItems();
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("não definida");
  const [description, setDescription] = useState("");

  function generateId() {
    const characters =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ01234";

    let randomId = "";

    for (let i = 0; i < 6; i++) {
      const randomNum = Math.floor(Math.random() * characters.length) + 1;
      randomId += characters[randomNum];
    }

    return randomId;
  }

  function handleSubmit(ev) {
    ev.preventDefault();
    const id = generateId();
    addItem({ id, name, amount, price, category, description });
    alert(`${name} foi adicionado com sucesso!`);
    setName("");
    setAmount("");
    setPrice("");
    setCategory("não definida");
    setDescription("");
    ev.target.reset();
  }

  useEffect(() => {
    setPrice(VMasker.toMoney(price));
  }, [price]);

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
