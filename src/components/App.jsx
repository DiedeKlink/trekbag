import BackgroundHeading from "./BackgroundHeading";
import Footer from "./Footer";
import Header from "./Header";
import ItemList from "./ItemList";
import Sidebar from "./Sidebar";
import AddItemForm from "./AddItemForm";
import { initialItems } from "../lib/constants";
import { useState } from "react";
import ButtonGroup from "./ButtonGroup";

function App() {
  const [items, setItems] = useState(initialItems);
  return (
    <>
      <BackgroundHeading />

      <main>
        <Header />
        <ItemList items={items} />
        <Sidebar>
          <AddItemForm setItems={setItems} />
          <ButtonGroup />
        </Sidebar>
      </main>

      <Footer />
    </>
  );
}

export default App;
