import ItemInfoBox from "../../components/ItemInfoBox";
import useStockItems from "../../hooks/useStockItems";
import { PageLayout } from "../../styles";
import { InfoBoxContainer, TableContainer } from "./styles";
import RecentItems from "../../components/RecentItems";
import ItemsRunningLow from "../../components/ItemsRunningLow";

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
        <RecentItems />
        <ItemsRunningLow />
      </TableContainer>
    </PageLayout>
  );
}
