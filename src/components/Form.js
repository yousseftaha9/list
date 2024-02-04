import { useState } from "react";

export default function Form({ onAddItems }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(event) {
    event.preventDefault();
    if (!description) return;
    const newItem = { description, quantity, packed: false, id: Date.now() };
    console.log(newItem);
    onAddItems(newItem);
    setDescription((d) => "");
    setQuantity((q) => (q = 1));
  }
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 trip?</h3>
      <select
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
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => {
          console.log(e);
          console.log(e.target);
          setDescription(e.target.value);
        }}
      ></input>
      <button>Add</button>
    </form>
    //we could also not listen to the submit event,
    //and instead listen for on click right here.
    //So we could do like this, net end for example,
    //create a function, handleClick.
    //So instead of handleSubmit.
    //So that would also work,
    //but it would only work on the click of the button.
    //So that would then not work, when we hit enter while here.
    //But we do actually want that.
  );
}
