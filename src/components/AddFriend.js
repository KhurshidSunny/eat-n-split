import { useState } from "react";
import Button from "./Button";

export default function AddFriend({ onAddFriend }) {
  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("https://i.pravatar.cc/48");

  function handleSubmit(e) {
    e.preventDefault();

    //   Guard class
    if (!name || !imageUrl) return;

    const id = crypto.randomUUID();
    const newFriend = {
      id,
      name,
      image: `${imageUrl}?=${id}`,
      balance: 0,
    };

    onAddFriend(newFriend);

    setName("");
    setImageUrl("https://i.pravatar.cc/48");
  }
  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <lable> 👩🏼‍🤝‍👩🏼 Friend name</lable>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label> 💽 Image URL</label>
      <input
        type="text"
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
      />
      <Button>Add</Button>
    </form>
  );
}
