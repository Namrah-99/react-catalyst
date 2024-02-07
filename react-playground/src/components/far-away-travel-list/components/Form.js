import { useState } from "react";
export default function Form({ addItem, isModalOpen, setIsModalOpen }) {
  const [quantity, setQuantity] = useState(1);
  const [description, setDescription] = useState("");

  function handleAddItem(e) {
    e.preventDefault();
    if (!description) {
      return;
    }
    addItem({ id: Date.now(), quantity, description, packed: false });

    setQuantity(1);
    setDescription("");
    setIsModalOpen(false);
  }

  return (
    <div
      id="open-modal"
      className={`modal-window ${isModalOpen ? "open" : ""}`}
    >
      <div className="far-away-container">
        <a
          href="#modal-outside"
          title="Close"
          className="modal-close"
          onClick={() => setIsModalOpen(false)}
        >
          &times;
        </a>
        <form className="far-away-form" onSubmit={handleAddItem}>
          <h2>What do you need for your 😍 trip?</h2>
          <select
            className="far-away-form-input"
            placeholder="quantity"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
          >
            {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
              <option value={num} key={num}>
                {num}
              </option>
            ))}
          </select>
          <input
            className="far-away-form-input"
            type="text"
            placeholder="Item..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <button className="far-away-btn">Add</button>
        </form>
      </div>
    </div>
  );
}
