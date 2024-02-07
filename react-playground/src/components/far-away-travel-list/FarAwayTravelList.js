import { useState } from "react";
import Form from "./components/Form.js";
import Logo from "./components/Logo.js";
import PackingList from "./components/PackingList.js";
import Stats from "./components/Stats.js";

import "./FarAwayTravelList.css";
const initialData = [
  { id: 1, quantity: 2, description: "Travel tickets", packed: false },
  { id: 2, quantity: 3, description: "Jackets", packed: false },
  { id: 3, quantity: 3, description: "Shoes", packed: false },
  { id: 4, quantity: 8, description: "T-shirt", packed: false },
  { id: 5, quantity: 3, description: "Hats", packed: false },
  { id: 6, quantity: 1, description: "Toothbrush", packed: false },
  { id: 7, quantity: 2, description: "Pillow", packed: false },
  { id: 8, quantity: 4, description: "Pencil", packed: false },
  { id: 9, quantity: 2, description: "Notebook", packed: false },
  { id: 10, quantity: 6, description: "Pens", packed: false },
];
export default function FarAwayTravelListMain() {
  const [items, setItems] = useState(initialData);

  function addItem(item) {
    setItems((items) => [...items, item]);
  }

  function removeItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function toggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function clearItems() {
    if (window.confirm("Are you sure you want to clear the list?")) {
      setItems([]);
    }
  }

  return (
    <div className="travel-list-main">
      <div className="far-away-travel-list-app">
        <Logo />
        <PackingList
          items={items}
          addItem={addItem}
          removeItem={removeItem}
          toggleItem={toggleItem}
          clearItems={clearItems}
        />
        <Stats items={items} />
      </div>
    </div>
  );
}
