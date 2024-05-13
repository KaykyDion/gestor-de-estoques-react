export default function loadItem({ params }) {
  const stock = JSON.parse(localStorage.getItem("stock-items"));
  const item = stock.find((i) => i.id === params.itemId);

  return item;
}
