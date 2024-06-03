import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function useStockItems() {
  const [stock, setStock] = useState(() => {
    const stockItems = localStorage.getItem("stock-items");
    if (!stockItems) return [];

    const stockArray = JSON.parse(stockItems);
    return stockArray;
  });
  let navigate = useNavigate();

  function addItem({ id, name, amount, price, category, description }) {
    const timeInMs = new Date().getTime();
    const date = new Date().toLocaleString();

    const item = {
      id,
      name,
      amount,
      price,
      category,
      description,
      timeInMs,
      date,
    };
    setStock((state) => {
      const newState = [...state, item];
      localStorage.setItem("stock-items", JSON.stringify(newState));
      return newState;
    });
  }

  function removeItem(id) {
    setStock((state) => {
      const itemToRemove = state.find((item) => item.id === id);
      const confirmation = confirm(
        `Tem certeza que deseja remover ${itemToRemove.name} ?`
      );

      if (confirmation) {
        const newState = state.filter((item) => item.id !== id);
        localStorage.setItem("stock-items", JSON.stringify(newState));
        navigate("/itens");

        return newState;
      } else {
        return state;
      }
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

  return {
    stock,
    setStock,
    addItem,
    removeItem,
    getItemsRunningLow,
    getRecentItems,
  };
}
