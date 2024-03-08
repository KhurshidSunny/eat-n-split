import AddFriend from "./AddFriend";
import Friend from "./Friend";
import Button from "./Button";

export default function FriendList({ data }) {
  return (
    <div className="sidebar">
      <ul>
        {data.map((frnd) => (
          <Friend name={frnd.name} imageLink={frnd.image} key={frnd.id} />
        ))}
      </ul>
      <AddFriend />
      <Button>Close</Button>
    </div>
  );
}
