export default function loadItem({ params }) {
  const stock = JSON.parse(localStorage.getItem("stock-items"));
  const item = stock.find((i) => i.id === params.itemId);

  if (!item) {
    throw new Response("404 Not Found", { status: 404 });
  }

  return item;
}
