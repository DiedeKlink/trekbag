import Button from "./Button";

export default function AddItemForm() {
  function handleSubmit(event) {
    event.preventDefault();
    const input = event.target.elements[0];
    const value = input.value.trim();
    if (value) {
      console.log(value);
      input.value = "";
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <h2>Add an Item</h2>
      <input placeholder="Toothbrush..." />
      <Button>Add to List</Button>
    </form>
  );
}
