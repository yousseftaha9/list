import React, { useState } from "react";
import Logo from "./Logo.js";
import Form from "./Form.js";
import PackingList from "./PackingList.js";
import Stats from "./Stats.js";
export default function App() {
  //whenever multiple sibling components
  //need access to the same state,
  //we move that piece of state up
  //to the first common parent component,
  //which again, in our case here
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    // we can not simply push the new item
    //into the items array
    //because with that, we would be mutating.
    //So, we would be changing this item's array right here.
    //And again, that's really not allowed in React.
    //So, React is all about immutability.
    //And so, the solution here
    //is to create a brand new array
    //which contains all the current items, plus, the new one.
    setItems((items) => [...items, item]);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItems={handleToggleItem}
      />
      <Stats items={items} />
    </div>
  );
}
