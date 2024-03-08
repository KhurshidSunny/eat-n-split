import AddFriend from "./AddFriend";
import Friend from "./Friend";
import Button from "./Button";
import { useState } from "react";

export default function FriendList({ data, onAddFriend }) {
  const [showAddFriend, setShowAddFriend] = useState(false);

  function handleClick() {
    setShowAddFriend((show) => !show);
    console.log(showAddFriend);
  }
  return (
    <div className="sidebar">
      <ul>
        {data.map((frnd) => (
          <Friend
            name={frnd.name}
            imageLink={frnd.image}
            balance={frnd.balance}
            key={frnd.id}
          />
        ))}
      </ul>
      {!showAddFriend && <Button onClick={handleClick}>Add Friend</Button>}
      {showAddFriend && (
        <AddFriend onAddFriend={onAddFriend} handleClick={handleClick} />
      )}
    </div>
  );
}
