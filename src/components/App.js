import { useState } from "react";
import SplitBills from "../SplitBills";
import FriendList from "./FriendList";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

export default function App() {
  const [friends, setFriends] = useState(initialFriends);
  const [selectedFriend, setSelectedFriend] = useState(null);
  const [showAddFriend, setShowAddFriend] = useState(false);

  function handleShowFriend() {
    setShowAddFriend((show) => !show);
  }

  function handleSelection(friend) {
    // setSelectedFriend(friend);
    setSelectedFriend((cur) => (cur?.id === friend.id ? null : friend));
    setShowAddFriend(false);
  }

  function handleAddFriend(newFriend) {
    setFriends((friends) => [...friends, newFriend]);
  }
  return (
    <div className="app">
      <FriendList
        data={friends}
        onAddFriend={handleAddFriend}
        showAddFriend={showAddFriend}
        onShowFriend={handleShowFriend}
        onSelection={handleSelection}
        selectedFriend={selectedFriend}
      />
      {selectedFriend && <SplitBills selectedFriend={selectedFriend} />}
    </div>
  );
}
