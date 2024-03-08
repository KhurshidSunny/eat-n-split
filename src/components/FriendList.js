import AddFriend from "./AddFriend";
import Friend from "./Friend";
import Button from "./Button";

export default function FriendList({
  data,
  onAddFriend,
  showAddFriend,
  onShowFriend,
  onSelection,
  selectedFriend,
}) {
  return (
    <div className="sidebar">
      <ul>
        {data.map((friend) => (
          <Friend
            friend={friend}
            onSelection={onSelection}
            selectedFriend={selectedFriend}
            key={friend.key}
          />
        ))}
      </ul>
      {!showAddFriend && <Button onClick={onShowFriend}>Add Friend</Button>}
      {showAddFriend && (
        <AddFriend onAddFriend={onAddFriend} onShowFriend={onShowFriend} />
      )}
    </div>
  );
}
