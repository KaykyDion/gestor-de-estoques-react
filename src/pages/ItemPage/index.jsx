import { Link, useLoaderData } from "react-router-dom";
import { PageLayout } from "../../styles";
import Button from "../../components/Button";
import useStockItems from "../../hooks/useStockItems";
import { ButtonContainer, Description, Info, InfoContainer } from "./styles";

export default function ItemPage() {
  const { removeItem } = useStockItems();
  const item = useLoaderData();
  return (
    <PageLayout>
      <h1>{item.name}</h1>
      <span style={{ color: "#a7a6a6" }}>(id: {item.id})</span>

      <InfoContainer>
        <Info>Categoria: {item.category}</Info>
        <Info>Quantidade em estoque: {item.amount}</Info>
        <Info>Preço: R$ {item.price}</Info>
      </InfoContainer>

      <p>{item.description}</p>
      <InfoContainer>
        <Description>Adicionado em: {item.date}</Description>
        {item.updateDate ? (
          <Description>Atualizado em: {item.updateDate}</Description>
        ) : null}
      </InfoContainer>

      <ButtonContainer>
        <Link to={`/atualizar/${item.id}`}>
          <Button text="Atualizar" bgColor={"#5BA7FD"} />
        </Link>
        <Link to="/itens">
          <Button
            text="Excluir"
            handleClick={() => removeItem(item.id)}
            bgColor={"#FF5258"}
          />
        </Link>
      </ButtonContainer>
    </PageLayout>
  );
}
