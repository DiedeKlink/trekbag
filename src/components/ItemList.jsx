export default function ItemList({ items, setItems }) {
  return (
    <ul>
      {items.map((item) => (
        <Item setItems={setItems} key={item.id} item={item} />
      ))}
    </ul>
  );
}

function Item({ item }) {
  return (
    <li className="item">
      <label>
        <input type="checkbox" checked={item.packed} />
        {item.name}
      </label>

      <button>❌</button>
    </li>
  );
}
