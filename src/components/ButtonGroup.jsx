import Button from "./Button";

const secondaryButtons = [
  "Mark as complete",
  "Mark all as incomplete",
  "Reset to initial",
  "Remove all items",
];
export default function ButtonGroup() {
  return (
    <section className="button-group">
      {secondaryButtons.map((buttonText) => (
        <Button key={buttonText} type="secondary">
          {buttonText}
        </Button>
      ))}
    </section>
  );
}
