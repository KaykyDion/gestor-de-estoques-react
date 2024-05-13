import { useState } from "react";

export default function useStockItems() {
  const [stock, setStock] = useState(() => {
    const stockItems = localStorage.getItem("stock-items");
    if (!stockItems) return [];

    const stockArray = JSON.parse(stockItems);
    return stockArray;
  });

  const [itemToView, setItemToView] = useState();

  function addItem({ id, name, amount, price, category, description }) {
    const timeInMs = new Date().getTime();

    const item = {
      id,
      name,
      amount,
      price,
      category,
      description,
      timeInMs,
      date: new Date(),
    };
    setStock((state) => {
      const newState = [...state, item];
      localStorage.setItem("stock-items", JSON.stringify(newState));
      return newState;
    });
  }

  function removeItem(id) {
    setStock((state) => {
      const newState = state.filter((item) => item.id !== id);
      localStorage.setItem("stock-items", JSON.stringify(newState));

      return newState;
    });
  }

  function getItemsRunningLow() {
    const itemsRunningLow = stock.filter((item) => {
      return item.amount < 10;
    });
    return itemsRunningLow;
  }

  function getRecentItems() {
    const now = new Date().getTime();
    const dayInMs = 1000 * 60 * 60 * 24;

    return stock.filter((item) => {
      const itemTime = item.timeInMs;
      const distance = Math.floor((now - itemTime) / dayInMs);

      return distance <= 10 ? item : null;
    });
  }

  function getItemToView(id) {
    const item = stock.find((i) => i.id === id);
    console.log(item);

    return item ? setItemToView(item) : alert("Item não encontrado");
  }

  return {
    stock,
    addItem,
    removeItem,
    getItemsRunningLow,
    getRecentItems,
    itemToView,
    getItemToView,
  };
}
