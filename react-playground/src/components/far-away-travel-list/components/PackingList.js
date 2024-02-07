import { useState } from "react";
import Form from "./Form";
import Item from "./Item";

export default function PackingList({
  items,
  addItem,
  removeItem,
  toggleItem,
  clearItems,
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [sortBy, setSortBy] = useState("input");
  let sortedList = items;

  if (sortBy === "input") {
    sortedList = items;
  }
  if (sortBy === "description") {
    sortedList = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  }
  if (sortBy === "packed") {
    sortedList = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  }

  return (
    <div className="list">
      <div>
        <div className="interior">
          <a
            className="modal-btn actions"
            href="#open-modal"
            onClick={() => setIsModalOpen(true)}
          >
            Add item
          </a>
        </div>
        <Form
          addItem={addItem}
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
        />
      </div>
      <ul>
        {sortedList.map((item) => (
          <Item
            key={item.id}
            item={item}
            removeItem={removeItem}
            toggleItem={toggleItem}
          />
        ))}
      </ul>

      <div className="actions">
        <select
          className="packing-list-select"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="input">Sort by input</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={clearItems}>Clear list</button>
      </div>
    </div>
  );
}
