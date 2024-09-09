import Button from "./Button";

export default function AddItemForm() {
  return (
    <form>
      <h2>Add an Item</h2>
      <input placeholder="Toothbrush..." />
      <Button>Add to List</Button>
    </form>
  );
}
