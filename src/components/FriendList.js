import AddFriend from "./AddFriend";
import Friend from "./Friend";
import Button from "./Button";

export default function FriendList({ data, onAddFriend }) {
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
      <AddFriend onAddFriend={onAddFriend} />
      <Button>Close</Button>
    </div>
  );
}
