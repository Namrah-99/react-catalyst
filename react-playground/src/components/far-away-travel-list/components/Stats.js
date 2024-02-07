export default function Stats({ items }) {
  let numItems = items.length;
  let numPacked = items.filter((item) => item.packed).length;
  let percentagePacked = Math.round((numPacked / numItems) * 100);

  if (!items.length) {
    return (
      <p className="stats">
        <em>Start adding some items to your packing list 🚀</em>
      </p>
    );
  }

  return (
    <footer className="stats">
      <em>
        {percentagePacked === 100
          ? "You got everything! Ready to go ✈️"
          : ` 💼 You have ${numItems} items on your list, and you already packed ${numPacked} (${percentagePacked}%)`}
      </em>
    </footer>
  );
}
